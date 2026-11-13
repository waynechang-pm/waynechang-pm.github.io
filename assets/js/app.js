/* 網站的互動功能。要改文字請改 content.js，一般不用動這個檔案。 */
(function () {
  "use strict";

  const C = CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const mqMobile = window.matchMedia("(max-width: 860px)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = "zh";
  try {
    lang = localStorage.getItem("lang") || ((navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en");
  } catch (e) { /* 無法使用瀏覽器儲存空間時，照預設語言 */ }
  if (!C.ui[lang]) lang = "zh";

  let openId = null;            // 目前打開的標籤
  let chIdx = -1;               // 故事影片目前的章節
  const pdfOk = {};             // 各語言的 PDF 是否已經放上來

  const ui = (k) => C.ui[lang][k];
  const tagById = (id) => C.tags.find((t) => t.id === id);

  const loop = $("#loop"), story = $("#story"), player = $("#player");

  /* ---------- 畫面上的文字 ---------- */
  function renderStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title = ui("title");
    $$("[data-t]").forEach((el) => { el.textContent = ui(el.dataset.t); });
    const alt = document.createElement("span");   // 頁首的名字後面接另一個語言的名字
    alt.className = "alt";
    alt.textContent = "｜" + ui("nameAlt");
    $("h1.name").append(alt);
    $("#langBtn").textContent = ui("langBtn");
    $("#langBtn").setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換成中文");
    ["#pdfBtn", "#ecPdf"].forEach((id) => { const a = $(id); a.textContent = ui("pdfBtn"); a.href = C.pdf[lang]; });
    const long = document.createElement("span"), short = document.createElement("span");
    long.className = "long"; long.textContent = ui("pdfBtn");
    short.className = "short"; short.textContent = ui("pdfShort");
    $("#pdfBtn").replaceChildren(long, short);   // 手機顯示短的，電腦顯示完整的
    $("#storyBtn").textContent = ui("storyBtn");
    // 手機上那行數字：只在逗號和「·」的地方換行，不要把詞切一半
    const sm = $(".stats-m");
    sm.replaceChildren();
    ui("stats").replace(/，/g, "，\u0001").replace(/\s+·/g, "\u0001·").split("\u0001").forEach((part) => {
      if (part.startsWith("·")) sm.append(" ");
      const s = document.createElement("span");
      s.className = "nb";
      s.textContent = part;
      sm.append(s);
    });
    $("#panelClose").setAttribute("aria-label", ui("close"));
    $("#playerClose").setAttribute("aria-label", ui("closeStory"));
    $("#pp").setAttribute("aria-label", ui("play"));
    $("#mute").setAttribute("aria-label", ui("mute"));
    $("#ecReplay").textContent = ui("replay");
    $("#ecClose").textContent = ui("ecClose");
    $("#year").textContent = new Date().getFullYear();
    const m = $("#mailLink");
    m.textContent = C.email;
    m.href = "mailto:" + C.email;
  }

  function renderTags() {
    const tags = $("#tags"), chips = $("#chips"), wires = $("#wires");
    tags.innerHTML = "";
    chips.innerHTML = "";
    wires.innerHTML = "";
    C.tags.forEach((t) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.left = t.anchor[0] + "%";
      dot.style.top = t.anchor[1] + "%";

      const b = document.createElement("button");
      b.type = "button";
      b.className = "tag";
      b.dataset.id = t.id;
      b.textContent = t.label[lang];
      b.style.left = t.pos[0] + "%";
      b.style.top = t.pos[1] + "%";
      tags.append(dot, b);

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.dataset.id = t.id;
      wires.append(line);

      const c = document.createElement("button");
      c.type = "button";
      c.className = "chip";
      c.dataset.id = t.id;
      c.textContent = t.label[lang];
      chips.append(c);
    });
    markOpen();
    drawWires();
  }

  /* 亮點和標籤之間的細線 */
  function drawWires() {
    const stage = $("#stage").getBoundingClientRect();
    if (!stage.width) return;
    C.tags.forEach((t) => {
      const b = $('.tag[data-id="' + t.id + '"]');
      const line = $('#wires line[data-id="' + t.id + '"]');
      if (!b || !line) return;
      const r = b.getBoundingClientRect();
      if (!r.width) return;
      const cx = ((r.left + r.width / 2 - stage.left) / stage.width) * 100;
      const top = ((r.top - stage.top) / stage.height) * 100;
      const bottom = ((r.bottom - stage.top) / stage.height) * 100;
      line.setAttribute("x1", t.anchor[0]);
      line.setAttribute("y1", t.anchor[1]);
      line.setAttribute("x2", cx.toFixed(2));
      line.setAttribute("y2", (t.anchor[1] > bottom ? bottom : top).toFixed(2));
    });
  }

  /* 往下捲的文字版 */
  function renderText() {
    const main = $("#text");
    main.innerHTML = "";
    C.order.forEach((id, i) => {
      const sec = document.createElement("section");
      sec.id = "sec-" + id;
      const h = document.createElement("h2");
      h.textContent = tagById(id).label[lang];
      h.dataset.no = "SCENE " + String(i + 1).padStart(2, "0");
      const body = document.createElement("div");
      body.className = "prose";
      body.innerHTML = C.sections[id][lang];
      sec.append(h, body);
      main.append(sec);
    });
  }

  /* ---------- 點標籤打開的內容框 ---------- */
  function markOpen() {
    $$(".tag, .chip").forEach((el) => el.classList.toggle("on", el.dataset.id === openId));
  }

  function fillPanel() {
    if (!openId) return;
    $("#panelTitle").textContent = tagById(openId).label[lang];
    const body = $("#panelBody");
    body.innerHTML = C.sections[openId][lang];
    body.scrollTop = 0;
  }

  function openPanel(id) {
    if (!C.sections[id]) return;
    if (openId === id) { closePanel(); return; }   // 再點一次同一個標籤：關閉
    openId = id;
    fillPanel();
    document.body.classList.add("panel-open");
    $("#panel").setAttribute("aria-hidden", "false");
    if (mqMobile.matches) document.body.style.overflow = "hidden";
    markOpen();
    $("#panelClose").focus({ preventScroll: true });
  }

  function closePanel() {
    if (!openId) return;
    const last = $('.tag[data-id="' + openId + '"]');
    openId = null;
    document.body.classList.remove("panel-open");
    $("#panel").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    markOpen();
    if (last && !mqMobile.matches) last.focus({ preventScroll: true });
  }

  /* ---------- 故事影片 ---------- */
  function storySrc() {
    return "assets/video/story_" + lang + "_" + (window.innerWidth < 900 ? "720" : "1080") + ".mp4";
  }

  function renderChapters() {
    const box = $("#chapters");
    box.innerHTML = "";
    C.chapters.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "ch";
      b.dataset.i = i;
      b.innerHTML = '<span class="bar"><span class="fill"></span></span>';
      b.append(document.createTextNode(c.label[lang]));
      box.append(b);
    });
    chIdx = -1;
    updateProgress();
  }

  function ctxLabel(tag) {
    return tag === "pdf" ? ui("pdfBtn") : tagById(tag).label[lang];
  }

  function setCtx(tag, instant) {
    const el = $("#ctxTag");
    const put = () => { el.textContent = ctxLabel(tag); el.classList.toggle("pdf", tag === "pdf"); };
    if (instant) { put(); return; }
    el.classList.add("swap");
    setTimeout(() => { put(); el.classList.remove("swap"); }, 350);
  }

  function updateProgress() {
    const t = story.currentTime || 0;
    const dur = story.duration || 70.5;
    let idx = 0;
    C.chapters.forEach((c, i) => { if (t >= c.t) idx = i; });
    $$(".ch").forEach((el, i) => {
      const start = C.chapters[i].t;
      const end = i + 1 < C.chapters.length ? C.chapters[i + 1].t : dur;
      const p = Math.max(0, Math.min(1, (t - start) / (end - start)));
      el.querySelector(".fill").style.width = (p * 100).toFixed(1) + "%";
      el.classList.toggle("now", i === idx);
    });
    if (idx !== chIdx) {
      const first = chIdx === -1;
      chIdx = idx;
      setCtx(C.chapters[idx].tag, first);
    }
  }

  /* 片尾的三個按鈕（重播／PDF／回首頁）；出現時把右上角的標籤收起來，避免重複 */
  function showEnd(on) {
    $("#endcard").hidden = !on;
    player.classList.toggle("at-end", on);
  }

  function seekStory(t) {
    const go = () => { story.currentTime = t; };
    if (story.readyState >= 1) go(); else story.addEventListener("loadedmetadata", go, { once: true });
  }

  function openPlayer() {
    closePanel();
    player.hidden = false;
    document.body.style.overflow = "hidden";
    loop.pause();
    showEnd(false);
    const src = storySrc();
    if (story.getAttribute("src") !== src) { story.setAttribute("src", src); chIdx = -1; }
    updateProgress();
    story.play().catch(() => { /* 瀏覽器擋自動播放時，使用者按播放鍵即可 */ });
    $("#playerClose").focus({ preventScroll: true });
  }

  function closePlayer() {
    if (player.hidden) return;
    story.pause();
    player.hidden = true;
    document.body.style.overflow = "";
    if (!reduceMotion) loop.play().catch(() => {});
    $("#storyBtn").focus({ preventScroll: true });
  }

  function togglePlay() {
    if (story.ended) { story.currentTime = 0; }
    if (story.paused) story.play().catch(() => {}); else story.pause();
  }

  /* ---------- 完整履歷 PDF ---------- */
  function checkPdf() {
    const url = C.pdf[lang];
    if (location.protocol === "file:" || url in pdfOk) return;
    fetch(url, { method: "HEAD" }).then((r) => { pdfOk[url] = r.ok; }).catch(() => { pdfOk[url] = false; });
  }

  function onPdfClick(e) {
    if (pdfOk[C.pdf[lang]] === false) {   // 檔案還沒放上來：提示，而不是打開錯誤頁
      e.preventDefault();
      toast(ui("pdfMissing"));
    }
  }

  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3800);
  }

  /* ---------- 語言 ---------- */
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) { /* 存不了就算了 */ }
    renderStatic();
    renderTags();
    renderText();
    fillPanel();
    renderChapters();
    checkPdf();
    if (!player.hidden) {   // 影片播到一半換語言：換成另一個語言的檔案，從同一秒繼續
      const t = story.currentTime, wasPaused = story.paused;
      story.setAttribute("src", storySrc());
      seekStory(t);
      if (!wasPaused) story.play().catch(() => {});
    } else {
      story.removeAttribute("src");
      story.load();
    }
  }

  /* ---------- 事件 ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target.closest(".tag, .chip");
    if (t) { openPanel(t.dataset.id); return; }
    const ch = e.target.closest(".ch");
    if (ch) {
      showEnd(false);
      seekStory(C.chapters[Number(ch.dataset.i)].t);
      story.play().catch(() => {});
    }
  });

  $("#panelClose").addEventListener("click", closePanel);
  $("#langBtn").addEventListener("click", () => setLang(lang === "zh" ? "en" : "zh"));
  $("#storyBtn").addEventListener("click", openPlayer);
  $("#playerClose").addEventListener("click", closePlayer);
  $("#pdfBtn").addEventListener("click", onPdfClick);
  $("#ecPdf").addEventListener("click", onPdfClick);
  $("#pp").addEventListener("click", togglePlay);
  story.addEventListener("click", togglePlay);
  $("#mute").addEventListener("click", () => { story.muted = !story.muted; });
  $("#ecReplay").addEventListener("click", () => { showEnd(false); story.currentTime = 0; story.play().catch(() => {}); });
  $("#ecClose").addEventListener("click", closePlayer);

  $("#ctxTag").addEventListener("click", () => {
    const tag = C.chapters[Math.max(0, chIdx)].tag;
    story.pause();
    if (tag === "pdf") {
      if (pdfOk[C.pdf[lang]] === false) toast(ui("pdfMissing")); else window.open(C.pdf[lang], "_blank", "noopener");
      return;
    }
    closePlayer();
    openPanel(tag);
  });

  story.addEventListener("timeupdate", updateProgress);
  story.addEventListener("seeked", updateProgress);
  story.addEventListener("play", () => { $("#pp").classList.remove("paused"); showEnd(false); });
  story.addEventListener("pause", () => $("#pp").classList.add("paused"));
  story.addEventListener("volumechange", () => $("#mute").classList.toggle("off", story.muted));
  story.addEventListener("ended", () => showEnd(true));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!player.hidden) closePlayer(); else closePanel();
    } else if (e.key === " " && !player.hidden && !e.target.closest("button, a")) {
      e.preventDefault();
      togglePlay();
    }
  });

  if ("ResizeObserver" in window) new ResizeObserver(drawWires).observe($("#stage"));
  window.addEventListener("resize", drawWires);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawWires);

  /* ---------- 開始 ---------- */
  $("#pp").classList.add("paused");
  renderStatic();
  renderTags();
  renderText();
  renderChapters();
  checkPdf();
  if (reduceMotion) loop.pause();
})();
