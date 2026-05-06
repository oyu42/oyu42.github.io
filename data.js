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
      ja: "趣味で麻雀のスコア管理アプリを作りました。チーム内でランキングを作成したり、点棒なしで麻雀を楽しめるサービスです。ぜひ使ってみてください。",
      en: "As a hobby, I built a mahjong score management app, which lets teams create rankings and play mahjong without using physical score sticks. Please give it a try.",
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
    "Mahjong",
  ],

  // -------------------------------------------------------------------
  // News: 新しいものを上に追加する
  // 例: { date: "2026.05", ja: "○○を発表", en: "Presented ○○", url: "https://..." },
  // 配列が空のときは「準備中 / Coming soon」が表示される。
  // -------------------------------------------------------------------
  news: [
  ],

  // -------------------------------------------------------------------
  // 学歴
  // -------------------------------------------------------------------
  education: [
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
  // 例: { date: "2025", ja: "論文タイトル, 雑誌名, 巻号, ページ", en: "...", url: "https://..." },
  // 配列が空のときは「準備中 / Coming soon」が表示される。
  // -------------------------------------------------------------------
  publications: [
  ],

  // -------------------------------------------------------------------
  // 連絡先
  // -------------------------------------------------------------------
  contact: [
    { label: "Email 1", value: "ono.yuito.z6 [at] s.mail.nagoya-u.ac.jp" },
    { label: "Email 2", value: "yuohn42 [at] gmail.com" },
  ],

};
