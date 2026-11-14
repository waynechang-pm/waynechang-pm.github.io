/*
 * 網站的所有文字都在這個檔案。zh 是中文、en 是英文。
 * 這個檔案是由 pdf/build_site_content.js 自動產生的：履歷內文來自 pdf/content_v2.js。
 * 要改文字請改那兩個檔案再重新產生，不要直接改這裡。
 */
const CONTENT = {
  "email": "aris.wei@gmail.com",
  "siteUrl": "https://waynechang-pm.github.io/",
  "pdf": {
    "zh": "assets/docs/resume-zh.pdf",
    "en": "assets/docs/resume-en.pdf"
  },
  "ui": {
    "zh": {
      "title": "張耿維 Wayne Chang｜AI 應用導入／數位轉型 專案經理",
      "name": "張耿維",
      "nameAlt": "Wayne Chang",
      "role": "AI 應用導入／數位轉型 專案經理",
      "stats": "近 8 年專案管理經驗 · 擔任 13 件專案經理 · 主導 11 件標案、得標 7 件",
      "langBtn": "EN",
      "pdfBtn": "完整履歷 PDF ↓",
      "pdfShort": "履歷 PDF ↓",
      "pdfMissing": "PDF 履歷準備中，歡迎先用 Email 聯絡我。",
      "scroll": "往下捲：文字版 ↓",
      "close": "關閉",
      "play": "播放／暫停",
      "mute": "開關聲音",
      "replay": "↻ 重播",
      "ecClose": "回首頁",
      "closeStory": "關閉影片，回首頁"
    },
    "en": {
      "title": "Wayne Chang | AI Adoption & Digital Transformation Project Manager",
      "name": "Wayne Chang",
      "nameAlt": "張耿維",
      "role": "AI Adoption & Digital Transformation Project Manager",
      "stats": "~8 years in project management · PM on 13 projects · 7 of 11 government tenders won",
      "langBtn": "中文",
      "pdfBtn": "Full résumé (PDF) ↓",
      "pdfShort": "Résumé PDF ↓",
      "pdfMissing": "The PDF résumé is on its way. Feel free to email me in the meantime.",
      "scroll": "Scroll for the text version ↓",
      "close": "Close",
      "play": "Play / pause",
      "mute": "Sound on / off",
      "replay": "↻ Replay",
      "ecClose": "Back to home",
      "closeStory": "Close the film"
    }
  },
  "tags": [
    {
      "id": "experience",
      "label": {
        "zh": "工作經歷",
        "en": "Experience"
      },
      "anchor": [
        31.1,
        55.6
      ],
      "pos": [
        17.2,
        43.5
      ]
    },
    {
      "id": "record",
      "label": {
        "zh": "專案實績",
        "en": "Track Record"
      },
      "anchor": [
        50.8,
        43.6
      ],
      "pos": [
        43.8,
        31.9
      ]
    },
    {
      "id": "ai",
      "label": {
        "zh": "AI 導入實績",
        "en": "AI Adoption Cases"
      },
      "anchor": [
        65.8,
        35.1
      ],
      "pos": [
        61.5,
        23.1
      ]
    },
    {
      "id": "skills",
      "label": {
        "zh": "專長與工具",
        "en": "Skills & Tools"
      },
      "anchor": [
        88.5,
        26.9
      ],
      "pos": [
        81.3,
        38.9
      ]
    },
    {
      "id": "profile",
      "label": {
        "zh": "個人簡介與學歷",
        "en": "Profile & Education"
      },
      "anchor": [
        15.6,
        76.9
      ],
      "pos": [
        4.7,
        64.8
      ]
    }
  ],
  "videos": [
    {
      "id": "story",
      "file": "story",
      "poster": "assets/video/story_poster.jpg",
      "dur": 70.5,
      "btn": {
        "zh": "▶ 我的故事（1:10）",
        "en": "▶ My story (1:10)"
      },
      "chapters": [
        {
          "t": 0,
          "label": {
            "zh": "序章",
            "en": "Intro"
          },
          "tag": "record"
        },
        {
          "t": 5.5,
          "label": {
            "zh": "現場",
            "en": "On site"
          },
          "tag": "experience"
        },
        {
          "t": 21.5,
          "label": {
            "zh": "數據",
            "en": "Data"
          },
          "tag": "experience"
        },
        {
          "t": 42.5,
          "label": {
            "zh": "AI",
            "en": "AI"
          },
          "tag": "ai"
        },
        {
          "t": 54.5,
          "label": {
            "zh": "下一站",
            "en": "Next"
          },
          "tag": "skills"
        },
        {
          "t": 62.5,
          "label": {
            "zh": "片尾",
            "en": "Credits"
          },
          "tag": "pdf"
        }
      ]
    },
    {
      "id": "ai",
      "file": "ai",
      "poster": "assets/video/ai_poster.jpg",
      "dur": 105,
      "btn": {
        "zh": "▶ 我如何執行 AI 導入（1:45）",
        "en": "▶ How I deliver AI adoption (1:45)"
      },
      "chapters": [
        {
          "t": 0,
          "label": {
            "zh": "序章",
            "en": "Intro"
          },
          "tag": "profile"
        },
        {
          "t": 8,
          "label": {
            "zh": "租金工具",
            "en": "Rent tool"
          },
          "tag": "ai"
        },
        {
          "t": 33,
          "label": {
            "zh": "智慧停車",
            "en": "Parking"
          },
          "tag": "experience"
        },
        {
          "t": 61.5,
          "label": {
            "zh": "文件研究",
            "en": "Documents"
          },
          "tag": "ai"
        },
        {
          "t": 78.5,
          "label": {
            "zh": "AI 影片",
            "en": "AI video"
          },
          "tag": "ai"
        },
        {
          "t": 97,
          "label": {
            "zh": "片尾",
            "en": "Credits"
          },
          "tag": "pdf"
        }
      ]
    }
  ],

  sections: {
    profile: {
      zh: `
<p class="pos">把 AI 帶進研究、財務、文件與營運等知識工作流程，在法規、財務和多方利益之間，找出可以落地的解方。</p>
<p>具專案管理與顧問經驗，橫跨公共建設財務顧問、智慧停車科技公司與國家級文物數位化專案，曾擔任 13 件公共建設與資產開發專案的專案經理。擅長需求分析、財務評估與跨單位協調，在法規、成本及多方需求之間形成可執行的方案。</p>
<p>能將複雜分析與業務規則轉成第一線人員可操作的工具，曾為機關承辦人設計租金自動計算工具，並參與停車開單作業的 AI 車牌辨識導入規劃。近年整合多種生成式 AI 工具，將研究、財務檢核、文件及簡報影片製作整理為可重複使用的工作流程，期望進一步投入企業 AI 應用導入與流程改善。</p>
<h3>個人故事</h3>
<p>我是文組出身，過去的專業訓練與工作經驗，讓我習慣先理解問題，再釐清需求、拆解流程、協調不同專業，並把關交付品質。</p>
<p>開始使用 AI 後，我將這套專案管理方法運用到 AI 協作：定義目標與輸入資料、安排工具分工、設置檢核點，再由我確認成果是否符合需求。程式開發並非我的原始專長，因此我更重視把需求與判斷標準說清楚，並透過測試及覆核確認結果。</p>
<p>這個履歷網站與故事影片，就是我運用這套方法完成的作品，也呈現了我如何把想法拆解成流程，再推進到具體成果。</p>
<h3>學歷與語言</h3>
<ul class="kv">
  <li><b>學歷</b>國立臺灣大學 社會學系、歷史學系 雙主修 學士，2018 年畢業</li>
  <li><b>語言</b>中文母語、英文中等、日文初級</li>
</ul>
<h3>聯絡</h3>
<p><a href="mailto:aris.wei@gmail.com">aris.wei@gmail.com</a></p>`,
      en: `
<p class="pos">Bringing AI into knowledge-work workflows such as research, finance, documents, and operations, and finding workable solutions where regulation, finance, and competing interests meet.</p>
<p>Project management and consulting experience across public-infrastructure financial advisory, a smart-parking technology company, and a national cultural-heritage digitization project, including serving as project manager on 13 public-infrastructure and asset-development projects. Skilled in requirements analysis, financial evaluation, and cross-organization coordination, shaping executable plans within regulatory, cost, and stakeholder constraints.</p>
<p>Able to turn complex analysis and business rules into tools that frontline staff can operate: designed an automated rent calculator for agency case officers and took part in planning the rollout of AI license-plate recognition for parking ticketing. In recent years I have combined multiple generative AI tools to turn research, financial checks, documents, and presentation-video production into repeatable workflows, and I hope to go further into enterprise AI adoption and process improvement.</p>
<h3>My Story</h3>
<p>I come from a humanities background. My training and work experience taught me to understand the problem first, then clarify requirements, break down the process, coordinate different specialists, and hold the line on delivery quality.</p>
<p>When I started using AI, I applied the same project-management method to AI collaboration: define the goal and the input data, assign roles to the tools, set checkpoints, and confirm myself that the result meets the need. Software development is not my original specialty, so I put more weight on stating requirements and judgment criteria clearly, and on confirming results through testing and review.</p>
<p>This résumé site and its story film are work I completed with this method. They also show how I break an idea down into a process and carry it through to a concrete result.</p>
<h3>Education & Languages</h3>
<ul class="kv">
  <li><b>Education</b>National Taiwan University, B.A., double major in Sociology and History, 2018</li>
  <li><b>Languages</b>Mandarin Chinese native, English intermediate, Japanese basic</li>
</ul>
<h3>Contact</h3>
<p><a href="mailto:aris.wei@gmail.com">aris.wei@gmail.com</a></p>`
    },

    experience: {
      zh: `
<h3>財務顧問公司｜專案部副理／專案經理</h3>
<p class="period">2022/11 – 至今</p>
<ul>
  <li>擔任 13 件公共建設與資產開發專案的專案經理，涵蓋可行性評估、財務模型、招商、優先定約與履約管理，客戶包括中央級公部門、國防醫療機構、國立文化機構與地方政府。</li>
  <li>主導 11 件政府標案投標，得標 7 件；負責投標策略、課題研析、服務建議書與評選簡報。</li>
  <li>執行多項市場調查與分析：以深度訪談、市場資料蒐集與問卷調查，研析供需狀況、合理價格與營運方向，涵蓋光纜管線、公有土地招商、交通樞紐商場、展覽館與生態園區等市場；並設計含重要性－績效分析 IPA 的服務滿意度調查，評估營運服務品質。</li>
  <li>主持中央級公部門光纜相關資產評估與租賃定價案：帶領 4 人團隊約 6 個月，訪談 12 個單位，以 95 筆市場租金資料建立特徵價格迴歸模型，搭配 15 位專家 AHP 問卷訂出基準牌價與折扣級距，三階段報告全數通過審查。</li>
  <li>執行成果帶來後續商機：促成公司成為大型電信業者的服務供應商、機關主動邀請報價，以及金融業者主動洽詢。</li>
  <li>把 AI 帶入研究、財務與文件等知識工作流程：以 Claude 等工具處理法規研析、契約條文查核、財務試算檢核、會議紀錄、公文與報告撰寫，並由本人覆核結果。</li>
  <li>在合約之外，主動為機關承辦人設計租金自動計算工具：原本不同路段與芯數的價格不同，需一段一段核算；整合契約內容後，選好條件即可正確算出租金。</li>
</ul>
<h3>智慧停車科技公司｜專案企劃</h3>
<p class="period">2020/08 – 2021/10</p>
<ul>
  <li>在以 AI 視覺辨識與智慧引導為核心技術的停車科技公司，擔任需求、研發與營運之間的協調角色，把研發部門開發的 AI 功能規劃導入真實的停車場與路邊停車場景。</li>
  <li>參與路邊停車開單作業的 AI 車牌辨識導入規劃：開單人員原本手動輸入車號，容易輸入錯誤，造成罰金與公司損失；研究開單動作、操作習慣與設備畫面限制後，規劃導入在設備上直接辨識的 AI 車牌辨識操作系統，實際使用後 6 個月內，協助公司將開單錯誤率由 3% 降至 0.2%。</li>
  <li>參與 7 件地方政府停車場委外經營案的投標與規劃，負責財務試算、AI 設備導入規劃、服務建議書與簡報。</li>
  <li>執行案場調查與需求訪談，掌握停車供需與使用者需求，作為設備導入與經費規劃的依據；並調查關聯產業的新科技與潛在合作夥伴，協助公司拓展新業務。</li>
  <li>協調研發、營運與外部技術夥伴，主持跨部門會議，推動專案從規劃到執行。</li>
</ul>
<h3>文資檔案管理公司｜專案組長</h3>
<p class="period">2019/08 – 2020/07</p>
<ul>
  <li>帶領國家級文物資料庫的建置團隊，執行千萬元級的文化數位化專案，負責規劃、流程、人力安排、品質監控，直到驗收結案。</li>
  <li>進行關聯產業與潛在合作夥伴的調查研究，結合田野調查與文獻資料，提出部門核心發展方向建議。</li>
  <li>建立部門的跨專案管理方法，並參與公部門標案。</li>
</ul>`,
      en: `
<h3>Financial Advisory Firm｜Deputy Manager, Project Department / Project Manager</h3>
<p class="period">Nov 2022 – Present</p>
<ul>
  <li>Project manager on 13 public-infrastructure and asset-development projects covering feasibility studies, financial models, investment solicitation, priority contract renewals, and contract management, for clients including central government bodies, a defense medical institution, a national cultural institution, and local governments.</li>
  <li>Led 11 government tender bids and won 7; responsible for bid strategy, issue analysis, proposals, and selection-panel presentations.</li>
  <li>Carried out market research and analysis using in-depth interviews, market data collection, and surveys to assess supply and demand, fair pricing, and operating direction, across markets including fiber-optic cable conduits, public land development, transit-hub retail, exhibition venues, and ecological parks; also designed service-satisfaction surveys with importance–performance analysis, IPA, to evaluate service quality.</li>
  <li>Led a valuation and lease-pricing study of fiber-optic cable assets for a central government body: a team of four over about six months interviewed 12 organizations, built a hedonic price regression model from 95 market rent data points, and used an AHP survey of 15 experts to set the base rate and discount tiers; all three stage reports passed review.</li>
  <li>Delivery led to follow-on business: the firm became a service provider to a major telecom operator, a public agency invited further quotations, and a financial institution made an inbound inquiry.</li>
  <li>Brought AI into knowledge-work workflows in research, finance, and documents: used Claude and other tools for regulatory research, contract clause checks, financial-model verification, meeting minutes, official correspondence, and report writing, with results reviewed by me.</li>
  <li>Beyond the contract scope, proactively designed an automated rent calculator for agency case officers: prices used to differ by route section and fiber count and had to be worked out section by section; with the contract terms built in, selecting the conditions now gives the correct rent.</li>
</ul>
<h3>Smart Parking Technology Company｜Project Planner</h3>
<p class="period">Aug 2020 – Oct 2021</p>
<ul>
  <li>At a parking-technology company built on AI vision recognition and smart guidance, served as the link between requirements, R&amp;D, and operations, planning how AI features developed by R&amp;D would be deployed in real parking facilities and on-street parking.</li>
  <li>Took part in planning the rollout of AI license-plate recognition for on-street parking ticketing: ticketing staff used to key in plate numbers by hand, and input errors led to penalties and company losses. After studying their ticketing motions, working habits, and the limits of the device screen, planned the introduction of an AI plate-recognition system that runs directly on the device. Within six months of real use, it helped cut the ticketing error rate from 3% to 0.2%.</li>
  <li>Took part in bidding and planning for 7 local-government parking concession projects, covering financial projections, AI equipment deployment plans, proposals, and presentations.</li>
  <li>Conducted site surveys and requirement interviews to understand parking supply, demand, and user needs as the basis for equipment and budget planning; researched new technologies and potential partners in adjacent industries to support new business.</li>
  <li>Coordinated R&amp;D, operations, and external technology partners and chaired cross-department meetings to move projects from planning to execution.</li>
</ul>
<h3>Cultural Heritage Archive Management Company｜Project Team Lead</h3>
<p class="period">Aug 2019 – Jul 2020</p>
<ul>
  <li>Led the team building a national cultural-heritage database, a culture digitization project in the NT$10-million range, covering planning, workflow, staffing, and quality control through final acceptance.</li>
  <li>Researched adjacent industries and potential partners, combining fieldwork and literature review, and proposed the department's core development direction.</li>
  <li>Established the department's cross-project management method and took part in public-sector tenders.</li>
</ul>`
    },

    ai: {
      zh: `
<div class="case-box">
  <h3>A　租金自動計算工具</h3>
  <p class="meta">使用者：機關承辦人員｜中央級公部門光纜相關資產評估與租賃定價案</p>
  <ul class="kv">
    <li><b>發現問題</b>機關出租光纜相關資產的管理方式，原本的做法是不同路段、不同芯數各有獨立價格，承辦人必須一段一段核算，費時又容易出錯。</li>
    <li><b>評估解方</b>結合市場租金分析，建立基準價格及折扣規則，再將定價模型轉為租金自動計算工具。承辦人選取路線、起訖點、芯數與租期後，即可自動帶入對應資料並計算年租金，減少逐段查價與人工核算作業；另搭配操作手冊，讓計價規則與作業方式一致，降低人為錯誤風險。</li>
    <li><b>行動執行</b>在合約之外，運用 AI 協助建立 Excel 自動試算工具，並由本人檢核公式與試算結果。</li>
    <li><b>收穫成果</b>Excel 工具及操作手冊已交付機關承辦人使用，評價良好獲機關主動邀請報價其他研究案，並促成公司成為大型電信業者的服務供應商。</li>
  </ul>
</div>
<div class="case-box">
  <h3>B　AI 車牌辨識開單</h3>
  <p class="meta">使用者：第一線開單人員｜智慧停車科技公司</p>
  <ul class="kv">
    <li><b>發現問題</b>路邊停車開單人員要手動輸入車號，容易輸入錯誤，造成罰金與公司損失。</li>
    <li><b>評估解方</b>實地研究開單動作、操作習慣與設備畫面限制，找出能配合現場作業的做法。</li>
    <li><b>行動執行</b>規劃導入在設備上直接辨識的 AI 車牌辨識操作系統，協調研發、營運與第一線人員的需求，推動上線。</li>
    <li><b>收穫成果</b>實際使用後 6 個月內，開單錯誤率由 3% 降至 0.2%。</li>
  </ul>
</div>
<div class="case-box">
  <h3>C　簡報影片 AI 協作製作流程</h3>
  <p class="meta">個人主導實務應用｜地方政府 BOT 履約管理案評選簡報</p>
  <ul class="kv">
    <li><b>發現問題</b>服務建議書與評選簡報資訊量大，需在有限時間內清楚傳達服務重點與團隊優勢，因此規劃以短影片作為簡報結尾，濃縮提案內容並呼應核心訴求。</li>
    <li><b>評估解方</b>設計一套 AI 工作流程包，放進服務建議書內容和重點提示，就能自動產出介紹影片，強化專案執行做法的說明。</li>
    <li><b>行動執行</b>規劃運用 AI 工具將提示詞、審核要點與剪輯程式整理為可重複使用的工作流程包，創作運用 Claude 協助腳本、分鏡、提示詞、內容檢查及指揮其他 AI 工具 API 運作，搭配 OpenAI Codex、Google Gemini 完成畫面及動態生成，再由 Claude 撰寫 Python／ffmpeg 程式協助完成剪輯與後製，確認內容後再進入下一步，本人負責定義影片目標、整理輸入資料、安排工具分工及審核成果。</li>
    <li><b>交付成果</b>完成一套工具包，輸入服務建議書及評選重點，並依 AI 要求回復問題後，自動產出 2 分 46 秒、1080p 的提案介紹影片，以實景照片搭配資訊圖卡及 AI 生成示意鏡頭，完成從提案文件轉為影音內容的製作流程驗證。</li>
  </ul>
</div>
<div class="case-box">
  <h3>D　互動履歷網站</h3>
  <p class="meta">個人實務應用、AI 多工運行概念驗證</p>
  <ul class="kv">
    <li><b>發現問題</b>傳統履歷只能用文字描述，很難讓人看見實際運用 AI 的能力。</li>
    <li><b>評估解方</b>自行構想、規劃與設計一個結合故事影片與互動標籤的履歷網站。</li>
    <li><b>行動執行</b>指揮多個 AI 工具分工，完成資料去識別化、中英文故事影片、網站與 PDF 履歷，每個階段都設審稿與檢核。</li>
    <li><b>收穫成果</b><span>網站已上線 <a href="https://waynechang-pm.github.io/">waynechang-pm.github.io</a>，包含 1 分 10 秒故事影片、中英文切換與完整履歷 PDF。</span></li>
  </ul>
</div>
<h3>AI 應用概況</h3>
<ul class="kv">
  <li><b>使用歷程</b>2020 年起接觸影像辨識與智慧服務類 AI，負責導入真實場景；2024 年起以 ChatGPT 輔助市場與法規研究，2025 年起將大型語言模型大範圍導入工作流程，每日使用，現在以 Claude 為核心指揮其他 AI 協作，提供更全面的整套工作流程，同時針對特定任務設計專用的工具包。</li>
  <li><b>研究與市場分析</b>用 AI 快速建立分析起點，例如估算支撐一項設施營運所需的周邊人口、特定遊憩場域的市場規模、觀光人數與住宿率、場館使用率與裝修單價；對 AI 給的數字會追問依據，再回頭查證來源。</li>
  <li><b>法規研析</b>查找並比對法源與辦理流程，例如環境影響評估檢核、歷史建築認定與文化資產檢核、土地使用分區的容許項目、促參與採購的適用關係、產業園區與一般設定地上權的差異，並由本人覆核結果。</li>
  <li><b>財務</b>以 AI 協助檢核財務試算、分析營運績效與財務報表；並設計 Excel 自動查表與加總的邏輯，後來發展成租金自動計算工具。</li>
  <li><b>文件</b>把會議錄音逐字稿整理成會議紀錄，依發言委員分類審查意見並逐條擬定回覆；從契約草案整理出定期與不定期應交付的資料與應辦事項；檢查報告前後的名詞一致與概念銜接等文件處理工作。</li>
  <li><b>營運</b>把業務規則做成第一線人員可操作的工具，見實績 A 租金自動計算工具、B AI 車牌辨識開單。</li>
  <li><b>多 AI 協作</b>Claude、OpenAI Codex、Google Gemini 分工製作影片與網站，見實績 C、D。</li>
  <li><b>個人實驗</b>設計一整套規則，讓 AI 每天依固定框架完成資訊分析、記錄錯誤並修正規則，測試 AI 在有明確規則時能多穩定地執行判斷。</li>
</ul>`,
      en: `
<div class="case-box">
  <h3>A　Automated rent calculator</h3>
  <p class="meta">Users: agency case officers｜Valuation and lease pricing of fiber-optic cable assets for a central government body</p>
  <ul class="kv">
    <li><b>Problem</b>The agency managed the leasing of its fiber-optic cable assets with a separate price for every route section and fiber count, so case officers had to work out the rent section by section, which was slow and error-prone.</li>
    <li><b>Assessment</b>Combined market rent analysis to set a base price and discount rules, then turned the pricing model into an automated rent calculator. Once a case officer selects the route, start and end points, fiber count, and lease term, the matching data is filled in and the annual rent is calculated, cutting section-by-section price lookups and manual calculation. A user manual keeps the pricing rules and procedures consistent and lowers the risk of human error.</li>
    <li><b>Action</b>Beyond the contract scope, used AI to help build an automated Excel calculator and personally checked the formulas and results.</li>
    <li><b>Results</b>The Excel tool and user manual were handed over to the agency's case officers and were well received: the agency invited quotations for further studies, and the work helped the firm become a service provider to a major telecom operator.</li>
  </ul>
</div>
<div class="case-box">
  <h3>B　AI license-plate recognition for ticketing</h3>
  <p class="meta">Users: frontline ticketing staff｜Smart-parking technology company</p>
  <ul class="kv">
    <li><b>Problem</b>On-street parking ticketing staff keyed in plate numbers by hand; input errors were common and led to penalties and company losses.</li>
    <li><b>Assessment</b>Studied ticketing motions, working habits, and device-screen limits on site to find an approach that fits field work.</li>
    <li><b>Action</b>Planned the introduction of an AI plate-recognition system that runs directly on the device, coordinated the needs of R&amp;D, operations, and frontline staff, and pushed it to launch.</li>
    <li><b>Results</b>Within six months of real use, the ticketing error rate fell from 3% to 0.2%.</li>
  </ul>
</div>
<div class="case-box">
  <h3>C　AI-assisted production workflow for presentation videos</h3>
  <p class="meta">Self-led applied practice｜Selection-panel presentation for a local-government BOT contract-management project</p>
  <ul class="kv">
    <li><b>Problem</b>Proposals and selection-panel presentations are dense, and the service highlights and team strengths must come across in limited time, so I planned a short closing film that condenses the proposal and echoes its core message.</li>
    <li><b>Assessment</b>Designed an AI workflow package: put in the proposal content and key points, and it automatically produces an introduction video that reinforces how the project will be carried out.</li>
    <li><b>Action</b>Packaged prompts, review checklists, and editing code into a reusable workflow. Claude handles the script, storyboard, prompts, and content checks and directs the other AI tools via API; OpenAI Codex and Google Gemini generate frames and motion; Claude writes the Python and ffmpeg code for editing. Each step is checked before the next. I set the goals, prepare the inputs, assign the tools, and review the results.</li>
    <li><b>Deliverables</b>A toolkit that takes the proposal and evaluation criteria, asks follow-up questions, and produces a 2 min 46 s, 1080p proposal video of real photos, information cards, and AI-generated illustrative shots, validating the path from proposal documents to video.</li>
  </ul>
</div>
<div class="case-box">
  <h3>D　Interactive résumé site</h3>
  <p class="meta">Personal applied practice, proof of concept for multi-AI operation</p>
  <ul class="kv">
    <li><b>Problem</b>A traditional résumé can only describe in words; it is hard to show the ability to actually apply AI.</li>
    <li><b>Assessment</b>Conceived, planned, and designed a résumé site that combines a story film with interactive tags.</li>
    <li><b>Action</b>Directed multiple AI tools in defined roles to complete data de-identification, the story film in Chinese and English, the site, and the PDF résumé, with review and checks at every stage.</li>
    <li><b>Results</b><span>The site is live at <a href="https://waynechang-pm.github.io/">waynechang-pm.github.io</a>, with a 1 min 10 s story film, a Chinese/English switch, and the full résumé as PDF.</span></li>
  </ul>
</div>
<h3>AI in Practice</h3>
<ul class="kv">
  <li><b>Timeline</b>Worked with image-recognition and smart-service AI from 2020, deploying it in real settings; used ChatGPT for market and regulatory research from 2024; since 2025, large language models have been built into my workflow and used daily, now with Claude at the core, directing other AI tools to deliver complete end-to-end workflows, plus purpose-built toolkits for specific tasks.</li>
  <li><b>Research &amp; market analysis</b>Use AI to set up a starting point for analysis quickly, such as estimating the catchment population needed to support a facility, the market size of a specific recreation site, visitor numbers and occupancy rates, venue utilization, and fit-out unit costs. I ask AI for the basis of its figures and then verify the sources.</li>
  <li><b>Regulatory research</b>Find and compare legal bases and procedures, such as environmental impact assessment screening, historic-building designation and cultural-heritage checks, permitted uses under land-use zoning, how PPP and procurement rules apply together, and how superficies rights in industrial parks differ from ordinary ones, with results reviewed by me.</li>
  <li><b>Finance</b>Use AI to check financial models and analyze operating performance and financial statements; designed Excel lookup-and-sum logic that later grew into the automated rent calculator.</li>
  <li><b>Documents</b>Turn meeting transcripts into minutes, sort review comments by committee member, and draft item-by-item replies; extract from draft contracts the materials and actions due on a regular and ad hoc basis; check reports for consistent terminology and connected concepts, among other document tasks.</li>
  <li><b>Operations</b>Turn business rules into tools frontline staff can operate; see case A, the automated rent calculator, and case B, AI plate recognition for ticketing.</li>
  <li><b>Multi-AI collaboration</b>Claude, OpenAI Codex, and Google Gemini working in defined roles to produce video and websites; see cases C and D.</li>
  <li><b>Personal experiment</b>Designed a full rule set so that AI completes a daily information analysis within a fixed framework, logs its errors, and revises the rules, to test how reliably AI can exercise judgment under explicit rules.</li>
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
<h3>其他代表專案｜擔任專案經理</h3>
<table>
  <thead><tr><th>類型</th><th>專案</th><th>我的角色與成果</th></tr></thead>
  <tbody>
    <tr><td>國防醫療機構</td><td>院區商店街與附屬設施促參先期規劃 2 件</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>國立文化機構</td><td>院區餐飲與公共服務空間 ROT 前置作業</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>交通樞紐</td><td>車站大樓 BOT 營運期履約管理，連續 2 期</td><td>專案經理；第 2 期從投標開始負責</td></tr>
    <tr><td>直轄市</td><td>生態主題園區及周邊停車場 BOT/OT 財務評估暨履約諮詢</td><td>投標時負責課題與市場分析，後期接任專案經理；以財務及法律分析協助機關作成最終決策</td></tr>
    <tr><td>地方政府</td><td>歷史建築群 ROT 履約管理</td><td>專案經理，從投標、得標到結案</td></tr>
    <tr><td>地方政府</td><td>公有市場 BOT 履約管理 2 案</td><td>專案經理；處理智財權授權爭議、協力廠商變更、服務滿意度調查設計；重點：設計簡報影片 AI 工作流程包，見 AI 導入實績 C</td></tr>
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
<h3>Other representative projects｜as project manager</h3>
<table>
  <thead><tr><th>Type</th><th>Project</th><th>My role and results</th></tr></thead>
  <tbody>
    <tr><td>Defense medical institution</td><td>Pre-tender PPP planning for a hospital retail arcade and ancillary facilities, 2 projects</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>National cultural institution</td><td>ROT pre-tender planning for dining and public service spaces</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>Transit hub</td><td>BOT contract management for a station building in its operating phase, 2 consecutive terms</td><td>Project manager; led from the bid stage in the second term</td></tr>
    <tr><td>Special municipality</td><td>Financial evaluation and contract advisory for an ecological theme park and parking BOT/OT</td><td>Issue and market analysis at bid stage, later took over as project manager; financial and legal analysis supported the agency's final decision</td></tr>
    <tr><td>Local government</td><td>ROT contract management for a group of historic buildings</td><td>Project manager, from bid and award to close-out</td></tr>
    <tr><td>Local government</td><td>BOT contract management for public markets, 2 projects</td><td>Project manager; handled an IP-licensing dispute, a change of partner vendor, and the design of a service-satisfaction survey. Highlight: designed an AI workflow package for presentation videos; see AI adoption case C</td></tr>
    <tr><td>Local government</td><td>BOT pre-tender planning and investment solicitation for a memorial park</td><td>Project manager, from bid to execution</td></tr>
    <tr><td>Local government</td><td>OT priority contract renewal for a park and parking facility</td><td>Project manager; financial analysis and basic requirements document completed</td></tr>
    <tr><td>Local government</td><td>OT financial evaluation and investment solicitation for an arts park</td><td>Project manager</td></tr>
  </tbody>
</table>
<p class="note">Also contributed to: market analysis for public land development, financial analysis for a cold-chain logistics center, and bid-stage issue analysis for several station, exhibition venue, market, and parking projects.</p>`
    },

    skills: {
      zh: `
<ul class="kv">
  <li><b>專案管理</b>專案規劃與執行、成本細緻化、會議設計、跨部門協調、投標策略</li>
  <li><b>財務與法規</b>財務模型、市場調查、可行性評估、促參法、政府採購法、契約管理</li>
  <li><b>研究方法</b>問卷設計、Stata 統計分析、質性訪談、田野調查</li>
  <li><b>文書與設計</b>Word、Excel、PowerPoint、InDesign</li>
</ul>
<h3>AI 工具</h3>
<ul class="kv">
  <li><b>對話與協作</b>以 Claude 為核心，使用 Projects 專案與記憶功能；Claude Cowork、ChatGPT</li>
  <li><b>AI 代理</b>Claude Code，指揮 AI 直接讀寫檔案、執行程式、操作瀏覽器；OpenAI Codex</li>
  <li><b>技能包平台</b>Claude Skills 技能包搭配 Plugins 與 MCP 連接器，把重複的工作流程標準化</li>
  <li><b>生成式影像</b>Google Gemini 影片生成、OpenAI 圖像生成</li>
  <li><b>AI 協作開發</b>由 AI 撰寫、本人指揮與驗收的 Python、ffmpeg 影片後製、Node.js 自動產生 Word 報告、HTML 網頁</li>
</ul>`,
      en: `
<ul class="kv">
  <li><b>Project management</b>Project planning and execution, detailed cost breakdown, meeting design, cross-department coordination, bid strategy</li>
  <li><b>Finance &amp; regulation</b>Financial modeling, market research, feasibility studies, Taiwan's PPP Act, Government Procurement Act, contract management</li>
  <li><b>Research methods</b>Survey design, statistical analysis with Stata, qualitative interviews, fieldwork</li>
  <li><b>Documents &amp; design</b>Word, Excel, PowerPoint, InDesign</li>
</ul>
<h3>AI tools</h3>
<ul class="kv">
  <li><b>Chat &amp; collaboration</b>Claude at the core, with Projects and memory; Claude Cowork, ChatGPT</li>
  <li><b>AI agents</b>Claude Code, directing AI to read and write files, run programs, and operate a browser; OpenAI Codex</li>
  <li><b>Skills platform</b>Claude Skills with Plugins and MCP connectors, to standardize repeatable workflows</li>
  <li><b>Generative media</b>Google Gemini video generation, OpenAI image generation</li>
  <li><b>AI-assisted development</b>Python, ffmpeg video post-production, Node.js automated Word reports, and HTML pages, written by AI and directed and accepted by me</li>
</ul>`
    }
  },

  /* 往下捲的文字版，各段出現的順序 */
  order: ["profile", "experience", "ai", "record", "skills"]
};
