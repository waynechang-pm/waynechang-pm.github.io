/*
 * 網站的所有文字都在這個檔案。zh 是中文、en 是英文。
 */
const CONTENT = {
  email: "aris.wei@gmail.com",
  siteUrl: "",                          // 網站上線後把網址填在這裡，PDF 履歷的頁首會顯示
  pdf: { zh: "assets/docs/resume-zh.pdf", en: "assets/docs/resume-en.pdf" },
  storyLength: "1:10",

  ui: {
    zh: {
      title: "張耿維 Wayne｜AI 導入專案經理",
      name: "張耿維",
      nameAlt: "Wayne",                 // 接在名字後面，中間自動加「｜」
      role: "AI 導入專案經理",
      stats: "近 8 年專案管理資歷，參與 30 餘件專案 · 得標率 64%",
      langBtn: "EN",
      pdfBtn: "完整履歷 PDF ↓",
      pdfShort: "履歷 PDF ↓",          // 手機上空間小，用短的
      pdfMissing: "PDF 履歷準備中，歡迎先用 Email 聯絡我。",
      storyBtn: "▶ 看我的故事（1:10）",
      scroll: "往下捲：文字版 ↓",
      close: "關閉",
      play: "播放／暫停",
      mute: "開關聲音",
      replay: "↻ 重播",
      ecClose: "回首頁",
      closeStory: "關閉影片，回首頁"
    },
    en: {
      title: "Wayne Chang | AI Adoption Project Manager",
      name: "Wayne Chang",
      nameAlt: "張耿維",                // 手機上空間小，英文版只顯示 Wayne Chang
      role: "AI Adoption Project Manager",
      stats: "Nearly 8 years in project management · 30+ public projects · 64% bid win rate",
      langBtn: "中文",
      pdfBtn: "Full résumé (PDF) ↓",
      pdfShort: "Résumé PDF ↓",
      pdfMissing: "The PDF résumé is on its way. Feel free to email me in the meantime.",
      storyBtn: "▶ Watch my story (1:10)",
      scroll: "Scroll for the text version ↓",
      close: "Close",
      play: "Play / pause",
      mute: "Sound on / off",
      replay: "↻ Replay",
      ecClose: "Back to home",
      closeStory: "Close the film"
    }
  },

  /* 首頁影片上的五個標籤。anchor＝亮點位置、pos＝標籤左上角位置（都是影片寬高的百分比） */
  tags: [
    { id: "experience", label: { zh: "工作經歷與重點實績", en: "Experience & Key Case" }, anchor: [31.1, 55.6], pos: [17.2, 43.5] },
    { id: "record",     label: { zh: "實績總覽", en: "Track Record" },                    anchor: [50.8, 43.6], pos: [43.8, 31.9] },
    { id: "ai",         label: { zh: "AI 整合經驗", en: "AI in Practice" },               anchor: [65.8, 35.1], pos: [61.5, 23.1] },
    { id: "skills",     label: { zh: "專長與工具", en: "Skills & Tools" },                anchor: [88.5, 26.9], pos: [81.3, 38.9] },
    { id: "profile",    label: { zh: "個人資料及學歷", en: "Profile & Education" },       anchor: [15.6, 76.9], pos: [4.7, 64.8] }
  ],

  /* 故事影片的章節：t＝開始秒數，tag＝這一章浮出的標籤（pdf＝完整履歷） */
  chapters: [
    { t: 0,    label: { zh: "序章", en: "Intro" },      tag: "record" },
    { t: 5.5,  label: { zh: "現場", en: "On site" },    tag: "experience" },
    { t: 21.5, label: { zh: "數據", en: "Data" },       tag: "experience" },
    { t: 42.5, label: { zh: "AI", en: "AI" },           tag: "ai" },
    { t: 54.5, label: { zh: "下一站", en: "Next" },     tag: "skills" },
    { t: 62.5, label: { zh: "片尾", en: "Credits" },    tag: "pdf" }
  ],

  sections: {
    profile: {
      zh: `
<p class="pos">AI 導入專案經理：在法規、財務和多方利益之間，找出可以落地的解方。</p>
<p>近 8 年專案管理經驗，橫跨公共建設財務顧問、智慧停車科技公司與國家級文物數位化專案。擔任 13 件公共建設與資產開發專案的專案經理，客戶涵蓋中央級公部門、國防醫療機構、國立文化機構與地方政府。</p>
<p>擅長在法規限制、財務可行性與多方利益之間找出可執行的方案，並把複雜的分析做成別人拿了就能用的工具。現在以 Claude 為核心，指揮多種 AI 工具處理研究、文件、資料分析與影片製作。目標是把 AI 技術帶進真實的工作現場，推動它真正落地。</p>
<h3>學歷</h3>
<p>國立臺灣大學 社會學系、歷史學系 雙主修 學士（2018）</p>
<h3>語言</h3>
<p>中文（母語）、英文（中等）、日文（初級）</p>
<h3>聯絡</h3>
<p><a href="mailto:aris.wei@gmail.com">aris.wei@gmail.com</a></p>`,
      en: `
<p class="pos">AI Adoption Project Manager: finding workable solutions where regulation, finance, and competing interests meet.</p>
<p>Nearly 8 years of project management experience across public-infrastructure financial advisory, a smart-parking technology company, and a national cultural-heritage digitization project. Project manager on 13 public-infrastructure and asset-development projects, for clients including central government bodies, a defense medical institution, a national cultural institution, and local governments.</p>
<p>I specialize in finding executable options within regulatory limits, financial feasibility, and competing interests, and in turning complex analysis into tools that others can pick up and use. Today I work with Claude at the core, directing multiple AI tools for research, documents, data analysis, and video production. My goal is to bring AI into real workplaces and make it actually land.</p>
<h3>Education</h3>
<p>National Taiwan University — B.A., double major in Sociology and History (2018)</p>
<h3>Languages</h3>
<p>Mandarin Chinese (native), English (intermediate), Japanese (basic)</p>
<h3>Contact</h3>
<p><a href="mailto:aris.wei@gmail.com">aris.wei@gmail.com</a></p>`
    },

    experience: {
      zh: `
<h3>凌群策略財務顧問有限公司｜專案部副理／專案經理</h3>
<p class="period">2022/11 – 至今</p>
<ul>
  <li>擔任 13 件公共建設與資產開發專案的專案經理，涵蓋可行性評估、財務模型、招商、優先定約與履約管理，客戶包括中央級公部門、國防醫療機構、國立文化機構與地方政府。</li>
  <li>主導 11 件政府標案投標，得標 7 件；負責投標策略、課題研析、服務建議書與評選簡報。</li>
  <li>執行多項市場調查與分析：以深度訪談、市場資料蒐集與問卷調查，研析供需狀況、合理價格與營運方向，涵蓋光纜管線、公有土地招商、交通樞紐商場、展覽館與生態園區等市場；並設計服務滿意度調查（含重要性－績效分析 IPA），評估營運服務品質。</li>
  <li>執行成果帶來後續商機：促成公司成為大型電信業者的服務供應商、機關主動邀請報價，以及金融業者主動洽詢。</li>
  <li>以 Claude 等 AI 工具處理法規研析、財務試算檢核、會議紀錄、公文與報告撰寫，並主動開發租金自動計算工具，作為合約外的加值服務。</li>
</ul>
<h3>歐特儀股份有限公司｜專案企劃</h3>
<p class="period">2020/08 – 2021/10</p>
<ul>
  <li>在以 AI 視覺辨識與智慧引導為核心技術的停車科技公司，負責把研發部門已開發的 AI 功能，規劃導入真實的停車場與路邊停車場景。</li>
  <li>參與 7 件地方政府停車場委外經營案的投標與規劃，負責財務試算、AI 設備導入規劃、服務建議書與簡報。</li>
  <li>執行案場調查與需求訪談，掌握停車供需與使用者需求，作為設備導入與經費規劃的依據；並調查關聯產業的新科技與潛在合作夥伴，協助公司拓展新業務。</li>
  <li>協調研發、營運與外部技術夥伴，主持跨部門會議，推動專案從規劃到執行。</li>
</ul>
<h3>博士門股份有限公司｜專案組長</h3>
<p class="period">2019/08 – 2020/07</p>
<ul>
  <li>帶領國家級文物資料庫的建置團隊，執行千萬元級的文化數位化專案，負責規劃、流程、人力安排、品質監控，直到驗收結案。</li>
  <li>進行關聯產業與潛在合作夥伴的調查研究，結合田野調查與文獻資料，提出部門核心發展方向建議。</li>
  <li>建立部門的跨專案管理方法，並參與公部門標案。</li>
</ul>
<h3 class="case">重點案例｜中央級公部門光纜相關資產評估與租賃定價</h3>
<ul>
  <li>擔任中央級公部門光纜相關資產評估案專案經理，以 4 人團隊在約 6 個月內完成需求研究、資產評估與租用方案三階段報告，訪談電信業者、公部門管線單位及專家共 12 個單位，報告全數通過審查核定。</li>
  <li>以 95 筆市場租金資料建立特徵價格迴歸模型，搭配 15 位專家 AHP 問卷，訂出基準牌價、長度與租期折扣級距及區域差異定價，並完成租賃契約與作業流程。</li>
  <li>主動運用 AI 協助開發租金自動計算模型與操作手冊（合約外加值服務），承辦人選路線、起訖點、芯數和租期即可算出年租金，自動帶入其他重要資訊、非手動修改，減少人為錯誤。</li>
  <li>後續效益：因執行成果獲肯定，機關主動邀請報價其他研究案，並促成公司成為大型電信業者的服務供應商。</li>
</ul>`,
      en: `
<h3>凌群策略財務顧問有限公司 (financial advisory firm, public infrastructure)｜Deputy Manager, Project Department / Project Manager</h3>
<p class="period">Nov 2022 – Present</p>
<ul>
  <li>Project manager on 13 public-infrastructure and asset-development projects covering feasibility studies, financial models, investment solicitation, priority contract renewals, and contract management, for clients including central government bodies, a defense medical institution, a national cultural institution, and local governments.</li>
  <li>Led 11 government tender bids and won 7; responsible for bid strategy, issue analysis, proposals, and selection-panel presentations.</li>
  <li>Carried out market research and analysis using in-depth interviews, market data collection, and surveys to assess supply and demand, fair pricing, and operating direction, across markets including fiber-optic cable conduits, public land development, transit-hub retail, exhibition venues, and ecological parks; also designed service-satisfaction surveys (including importance–performance analysis, IPA) to evaluate service quality.</li>
  <li>Delivery led to follow-on business: the firm became a service provider to a major telecom operator, a public agency invited further quotations, and a financial institution made an inbound inquiry.</li>
  <li>Used Claude and other AI tools for regulatory research, financial-model checks, meeting minutes, official correspondence, and report writing; proactively developed an automated rent calculator as a value-added service beyond the contract.</li>
</ul>
<h3>歐特儀股份有限公司 (smart-parking technology company)｜Project Planner</h3>
<p class="period">Aug 2020 – Oct 2021</p>
<ul>
  <li>At a parking-technology company built on AI vision recognition and smart guidance, planned how AI features developed by R&amp;D would be deployed in real parking facilities and on-street parking.</li>
  <li>Took part in bidding and planning for 7 local-government parking concession projects, covering financial projections, AI equipment deployment plans, proposals, and presentations.</li>
  <li>Conducted site surveys and requirement interviews to understand parking supply, demand, and user needs as the basis for equipment and budget planning; researched new technologies and potential partners in adjacent industries to support new business.</li>
  <li>Coordinated R&amp;D, operations, and external technology partners and chaired cross-department meetings to move projects from planning to execution.</li>
</ul>
<h3>博士門股份有限公司｜Project Team Lead</h3>
<p class="period">Aug 2019 – Jul 2020</p>
<ul>
  <li>Led the team building a national cultural-heritage database, a culture digitization project in the NT$10-million range, covering planning, workflow, staffing, and quality control through final acceptance.</li>
  <li>Researched adjacent industries and potential partners, combining fieldwork and literature review, and proposed the department's core development direction.</li>
  <li>Established the department's cross-project management method and took part in public-sector tenders.</li>
</ul>
<h3 class="case">Key case｜Valuation and lease pricing of fiber-optic cable assets for a central government body</h3>
<ul>
  <li>Project manager for a central-government fiber-optic asset valuation project. With a team of four, completed a three-stage report (demand study, asset valuation, leasing options) in about six months, interviewing 12 organizations including telecom operators, public conduit owners, and experts. All reports passed review.</li>
  <li>Built a hedonic price regression model from 95 market rent data points, combined with an AHP survey of 15 experts, to set a base rate, length and term discount tiers, and regional price differences, and completed the lease contract and operating procedures.</li>
  <li>Proactively used AI to help develop an automated rent calculation model and user manual (a value-added service beyond the contract). Staff select the route, start and end points, fiber count, and lease term to get the annual rent; other key information is filled in automatically rather than typed by hand, reducing human error.</li>
  <li>Follow-on impact: the agency invited quotations for further studies, and the firm became a service provider to a major telecom operator.</li>
</ul>`
    },

    record: {
      zh: `
<div class="nums">
  <div class="num"><b>近 8 年</b><span>專案管理經驗</span></div>
  <div class="num"><b>30 餘件</b><span>參與的公共建設、資產開發與數位專案</span></div>
  <div class="num"><b>13 件</b><span>擔任專案經理</span></div>
  <div class="num"><b>7／11</b><span>主導 11 件政府標案投標，得標 7 件</span></div>
  <div class="num"><b>3 次</b><span>因執行成果獲肯定，帶來新客戶或主動邀約</span></div>
</div>
<h3>其他代表專案（擔任專案經理）</h3>
<table>
  <thead><tr><th>類型</th><th>專案</th><th>我的角色與成果</th></tr></thead>
  <tbody>
    <tr><td>國防醫療機構</td><td>院區商店街與附屬設施促參先期規劃（2 件）</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>國立文化機構</td><td>院區餐飲與公共服務空間 ROT 前置作業</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>交通樞紐</td><td>車站大樓 BOT 營運期履約管理（連續 2 期）</td><td>專案經理；第 2 期從投標開始負責</td></tr>
    <tr><td>直轄市</td><td>生態主題園區及周邊停車場 BOT/OT 財務評估暨履約諮詢</td><td>投標時負責課題與市場分析，後期接任專案經理；以財務及法律分析協助機關作成最終決策</td></tr>
    <tr><td>地方政府</td><td>歷史建築群 ROT 履約管理</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>地方政府</td><td>公有市場 BOT 履約管理（2 案）</td><td>專案經理；處理智財權授權爭議、協力廠商變更、服務滿意度調查設計</td></tr>
    <tr><td>地方政府</td><td>紀念園區 BOT 前置作業及招商</td><td>專案經理，從投標到執行</td></tr>
    <tr><td>地方政府</td><td>公園暨停車場 OT 優先定約</td><td>專案經理；已完成財務分析及基本需求書</td></tr>
    <tr><td>地方政府</td><td>藝文園區 OT 財務評估暨招商</td><td>專案經理</td></tr>
  </tbody>
</table>
<p class="note">另參與：公有土地招商市場分析、冷鏈物流中心財務分析、多件車站、展覽館、市場與停車場案的投標課題研析。</p>`,
      en: `
<div class="nums">
  <div class="num"><b>~8 years</b><span>of project management experience</span></div>
  <div class="num"><b>30+</b><span>public infrastructure, asset development, and digital projects</span></div>
  <div class="num"><b>13</b><span>projects as project manager</span></div>
  <div class="num"><b>7 of 11</b><span>government tenders led and won</span></div>
  <div class="num"><b>3</b><span>new clients or inbound invitations earned through delivery</span></div>
</div>
<h3>Other representative projects (as project manager)</h3>
<table>
  <thead><tr><th>Type</th><th>Project</th><th>My role and results</th></tr></thead>
  <tbody>
    <tr><td>Defense medical institution</td><td>Pre-tender PPP planning for a hospital retail arcade and ancillary facilities (2 projects)</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>National cultural institution</td><td>ROT pre-tender planning for dining and public service spaces</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>Transit hub</td><td>BOT contract management for a station building, operating phase (2 consecutive terms)</td><td>Project manager; led from the bid stage in the second term</td></tr>
    <tr><td>Special municipality</td><td>Financial evaluation and contract advisory for an ecological theme park and parking BOT/OT</td><td>Issue and market analysis at bid stage, later took over as project manager; financial and legal analysis supported the agency's final decision</td></tr>
    <tr><td>Local government</td><td>ROT contract management for a group of historic buildings</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>Local government</td><td>BOT contract management for public markets (2 projects)</td><td>Project manager; handled an IP-licensing dispute, a change of partner vendor, and the design of a service-satisfaction survey</td></tr>
    <tr><td>Local government</td><td>BOT pre-tender planning and investment solicitation for a memorial park</td><td>Project manager, from bid to execution</td></tr>
    <tr><td>Local government</td><td>OT priority contract renewal for a park and parking facility</td><td>Project manager; financial analysis and basic requirements document completed</td></tr>
    <tr><td>Local government</td><td>OT financial evaluation and investment solicitation for an arts park</td><td>Project manager</td></tr>
  </tbody>
</table>
<p class="note">Also contributed to: market analysis for public land development, financial analysis for a cold-chain logistics center, and bid-stage issue analysis for several station, exhibition venue, market, and parking projects.</p>`
    },

    ai: {
      zh: `
<ul class="kv">
  <li><b>使用歷程</b>2020 年起接觸影像辨識與智慧服務類 AI，負責導入真實場景；2025 年起將大型語言模型（LLM）大範圍導入工作流程，每日使用。</li>
  <li><b>工作上</b>以 Claude 處理法規研析、契約條文查核、財務試算檢核、會議錄音整理成紀錄、公文與報告撰寫；報告以 AI 產出 Word 檔並自動排版。</li>
  <li><b>做出工具</b>租金自動計算模型（見「工作經歷與重點實績」的重點案例）。</li>
  <li><b>多 AI 協作</b>Claude、OpenAI Codex、Google Gemini 分工製作影片（見下方重點案例）。</li>
  <li><b>個人實驗</b>設計一整套規則，讓 AI 每天依固定框架完成資訊分析、記錄錯誤並修正規則，測試 AI 在有明確規則時能多穩定地執行判斷。</li>
  <li><b>早期經驗</b>2020 年在智慧停車科技公司，負責把 AI 視覺辨識功能規劃導入真實場景。</li>
</ul>
<h3 class="case">重點案例｜以 Claude 指揮多 AI 協作的影片製作流程</h3>
<ul>
  <li>在無程式背景下，以 Claude 為核心建立多 AI 協作的影片製作流程：Claude 負責腳本、分鏡、提示詞與品質檢查，OpenAI Codex 繪製畫面，Google Gemini 生成動態影片，並由 AI 撰寫 Python／ffmpeg 程式完成剪輯與後製。</li>
  <li>輸入企劃書及重點提示後，由 AI 自動完成腳本、分鏡與剪輯，產出 2 分 46 秒、1080p 的簡報影片，結合實景照片動態、資訊圖卡與 AI 生成示意鏡頭；內容經 AI 審稿與本人逐項核對，事實與數字正確。</li>
  <li>設計「先審文字、再審圖、最後才生成影片」的把關流程，把錯誤擋在花錢之前，AI 影片生成費用極低，不浪費 Token 資源。</li>
</ul>
<p class="note">這個網站上的故事影片，也是用同一套流程完成的。</p>`,
      en: `
<ul class="kv">
  <li><b>Timeline</b>Worked with image-recognition and smart-service AI from 2020, deploying it in real settings; since 2025, large language models (LLMs) have been built into my workflow and used daily.</li>
  <li><b>At work</b>Claude for regulatory research, contract clause checks, financial-model verification, turning meeting recordings into minutes, and drafting official correspondence and reports; reports are produced as Word files by AI with automatic formatting.</li>
  <li><b>Tools built</b>An automated rent calculation model (see the key case under Experience).</li>
  <li><b>Multi-AI collaboration</b>Claude, OpenAI Codex, and Google Gemini working in defined roles to produce video (see the key case below).</li>
  <li><b>Personal experiment</b>Designed a full rule set so that AI completes a daily information analysis within a fixed framework, logs its errors, and revises the rules, to test how reliably AI can exercise judgment under explicit rules.</li>
  <li><b>Early experience</b>In 2020 at a smart-parking technology company, planned the deployment of AI vision features in real settings.</li>
</ul>
<h3 class="case">Key case｜A video production workflow with Claude directing multiple AIs</h3>
<ul>
  <li>With no programming background, built a multi-AI video workflow centered on Claude: Claude handles the script, storyboard, prompts, and quality checks; OpenAI Codex draws the frames; Google Gemini generates motion; and AI-written Python/ffmpeg code does the editing and post-production.</li>
  <li>From a proposal document and key points, AI completes the script, storyboard, and edit, producing a 2 min 46 s, 1080p presentation video that combines real-photo motion, information cards, and AI-generated illustrative shots. Content was reviewed by AI and checked item by item by me; facts and figures are correct.</li>
  <li>Designed a gate process — review the text first, then the images, and only then generate video — so errors are caught before money is spent. AI video generation cost was minimal, with no wasted tokens.</li>
</ul>
<p class="note">The story film on this site was made with the same workflow.</p>`
    },

    skills: {
      zh: `
<ul class="kv">
  <li><b>專案管理</b>專案規劃與執行、成本細緻化、會議設計、跨部門協調、投標策略</li>
  <li><b>財務與法規</b>財務模型、市場調查、可行性評估、促參法、政府採購法、契約管理</li>
  <li><b>研究方法</b>問卷設計與統計分析（Stata）、質性訪談、田野調查</li>
  <li><b>文書與設計</b>Word、Excel、PowerPoint、InDesign</li>
</ul>
<h3>AI 工具（全部是實際用過的）</h3>
<ul class="kv">
  <li><b>對話與協作</b>Claude（核心，含 Projects 專案與記憶功能）、Claude Cowork、ChatGPT</li>
  <li><b>AI 代理</b>Claude Code（指揮 AI 直接讀寫檔案、執行程式、操作瀏覽器）、OpenAI Codex</li>
  <li><b>技能包平台</b>Claude Skills（技能包）搭配 Plugins／MCP 連接器（工具庫），把重複的工作流程標準化</li>
  <li><b>生成式影像</b>Google Gemini（影片生成）、OpenAI 圖像生成</li>
  <li><b>AI 協作開發</b>由 AI 撰寫、本人指揮與驗收的 Python、ffmpeg（影片後製）、Node.js（Word 報告自動產生）、HTML 網頁</li>
</ul>`,
      en: `
<ul class="kv">
  <li><b>Project management</b>Project planning and execution, detailed cost breakdown, meeting design, cross-department coordination, bid strategy</li>
  <li><b>Finance &amp; regulation</b>Financial modeling, market research, feasibility studies, Taiwan's PPP Act (Act for Promotion of Private Participation in Infrastructure Projects), Government Procurement Act, contract management</li>
  <li><b>Research methods</b>Survey design and statistical analysis (Stata), qualitative interviews, fieldwork</li>
  <li><b>Documents &amp; design</b>Word, Excel, PowerPoint, InDesign</li>
</ul>
<h3>AI tools (all hands-on)</h3>
<ul class="kv">
  <li><b>Chat &amp; collaboration</b>Claude (core; Projects and memory), Claude Cowork, ChatGPT</li>
  <li><b>AI agents</b>Claude Code (directing AI to read and write files, run programs, and operate a browser), OpenAI Codex</li>
  <li><b>Skills platform</b>Claude Skills with Plugins / MCP connectors, to standardize repeatable workflows</li>
  <li><b>Generative media</b>Google Gemini (video generation), OpenAI image generation</li>
  <li><b>AI-assisted development</b>Python, ffmpeg (video post-production), Node.js (automated Word reports), and HTML pages — written by AI, directed and accepted by me</li>
</ul>`
    }
  },

  /* 往下捲的文字版，各段出現的順序 */
  order: ["profile", "experience", "record", "ai", "skills"]
};
