// =====================================================================
// このファイルを編集すればホームページの内容を更新できます。
// 編集後はファイルを保存し、git push するとサイトに反映されます。
//
// 注意: カンマ「,」、波括弧「{ }」、角括弧「[ ]」、引用符「" "」を消すと
// サイト全体が真っ白になります。構造を保ちつつ中身だけ書き換えてください。
//
// リンクボタン「↗」を末尾につけたい場合は、その項目に url: "https://..."
// を追加してください。
// =====================================================================

const data = {

  // -------------------------------------------------------------------
  // 名前
  // -------------------------------------------------------------------
  name: {
    ja: "大野 結人",
    en: "Yuito Ohno",
  },

  // -------------------------------------------------------------------
  // 所属（複数行表示。url を付けるとリンクボタンが付く）
  // -------------------------------------------------------------------
  affiliation: [
    {
      ja: "名古屋大学 大学院 工学研究科 機械システム工学専攻 博士後期課程",
      en: "Ph.D. Student, Department of Mechanical Systems Engineering, Graduate School of Engineering, Nagoya University",
    },
    {
      ja: "モビリティシステムグループ",
      en: "Mobility System Group",
      url: "https://www.suzlab.mae.nagoya-u.ac.jp/",
    },
  ],

  // -------------------------------------------------------------------
  // About: 段落ごとに分けて記述する。新しい段落は { } をコピーして追加。
  // url を付けるとその段落の末尾にリンクボタンが付く。
  // -------------------------------------------------------------------
  about: [
    {
      ja: "名古屋大学大学院工学研究科の博士後期課程に在籍しています。エネルギーマネジメントシステム（EMS）に関する研究に取り組んでおり、特に電気自動車（EV）と共有蓄電池を活用した、再生可能エネルギーの効率的な利用を目指しています。",
      en: "I am a Ph.D. student at the Graduate School of Engineering, Nagoya University. My research focuses on energy management systems (EMS), with a particular interest in efficient utilization of renewable energy via electric vehicles (EVs) and shared energy storage systems.",
    },
    {
      ja: "P.S. 麻雀のスコア管理アプリを作りました。",
      en: "P.S. I built a mahjong score management app.",
      url: "https://mahjong-score-omega.vercel.app/",
    },
  ],

  // -------------------------------------------------------------------
  // キーワード（カンマ区切りで自動表示）
  // -------------------------------------------------------------------
  keywords: [
    "Energy Management System",
    "V2X System",
    "Optimization",
  ],

  // -------------------------------------------------------------------
  // News: 新しいものを上に追加する
  // 例: { date: "2026.05", ja: "○○を発表", en: "Presented ○○", url: "https://..." },
  // 配列が空のときは「準備中 / Coming soon」が表示される。
  // -------------------------------------------------------------------
  news: [
    {
      date: "2026.08.18",
      ja: "EVsmart Park に我々の研究に関する記事が掲載されました",
      en: "Our research was featured in an article on EVsmart Park",
      url: "https://blog.evsmart.net/t/ev-v2x-pr/3996",
    },
    {
      date: "2026.06.01",
      ja: "情報処理推進機構（IPA）2026年度未踏ターゲット事業（量子コンピューティング技術を活用したソフトウェア開発分野）に採択されました",
      en: "Selected for the IPA MITOU Target Program (Quantum Computing), FY2026",
      url: "https://www.ipa.go.jp/jinzai/mitou/target/2026-quantum/gaiyou-tr-1.html",
    },
    {
      date: "2026.04.01",
      ja: "木下記念事業団 奨学生に採用されました",
      en: "Selected as a scholarship student of the Kinoshita Memorial Foundation",
      url: "https://www.k-zaidan.or.jp/",
    },
  ],

  // -------------------------------------------------------------------
  // 略歴
  // -------------------------------------------------------------------
  education: [
    {
      date: "2026.06 - 2027.02",
      ja: "情報処理推進機構（IPA）2026年度未踏ターゲット事業（量子コンピューティング技術を活用したソフトウェア開発分野）",
      en: "IPA MITOU Target Program (Quantum Computing), FY2026",
      url: "https://www.ipa.go.jp/jinzai/mitou/target/2026-quantum/gaiyou-tr-1.html",
    },
    {
      date: "2026.04 -",
      ja: "名古屋大学大学院 工学研究科 機械システム工学専攻 博士後期課程",
      en: "Ph.D. Student, Department of Mechanical Systems Engineering, Graduate School of Engineering, Nagoya University",
    },
    {
      date: "2024.04 - 2026.03",
      ja: "名古屋大学大学院 工学研究科 機械システム工学専攻 博士前期課程",
      en: "M.E., Department of Mechanical Systems Engineering, Graduate School of Engineering, Nagoya University",
    },
    {
      date: "2020.04 - 2024.03",
      ja: "名古屋大学 工学部 機械・航空宇宙工学科",
      en: "B.E., Department of Mechanical and Aerospace Engineering, School of Engineering, Nagoya University",
    },
  ],

  // -------------------------------------------------------------------
  // 論文
  // 例: { type: "conference", date: "2025", ja: "...", en: "...", url: "https://..." },
  // type には "conference"（国際会議）または "journal"（論文誌）を指定するとタグが付く。
  // 配列が空のときは「準備中 / Coming soon」が表示される。
  // -------------------------------------------------------------------
  publications: [
    {
      type: "conference",
      date: "2025",
      ja: "Model Predictive Control for EMS Integrating EV and Shared Storage Based on Simultaneous Optimization of EV Transport, Charging/Discharging and Trading Price, IECON 2025.",
      en: "Model Predictive Control for EMS Integrating EV and Shared Storage Based on Simultaneous Optimization of EV Transport, Charging/Discharging and Trading Price, IECON 2025.",
      url: "https://ieeexplore.ieee.org/document/11221717/",
    },
    {
      type: "conference",
      date: "2024",
      ja: "Charging Control Method for HEMS Considering Multiple Vehicle Usage Scenarios by Using EV, SICE FES 2024.",
      en: "Charging Control Method for HEMS Considering Multiple Vehicle Usage Scenarios by Using EV, SICE FES 2024.",
      url: "https://ieeexplore.ieee.org/document/10804891/",
    },
  ],

  // -------------------------------------------------------------------
  // 連絡先
  // -------------------------------------------------------------------
  contact: [
    { label: "Email 1", value: "ono.yuito.z6 [at] s.mail.nagoya-u.ac.jp" },
    { label: "Email 2", value: "yuohn42 [at] gmail.com" },
  ],

};
