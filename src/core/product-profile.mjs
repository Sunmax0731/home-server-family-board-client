export const productProfile = {
  "repo": "home-server-family-board-client",
  "title": "自宅サーバー・家庭掲示板クライアント",
  "domain": "AndroidApp",
  "version": "0.1.0-alpha.1",
  "rank": 41,
  "tier": "P2",
  "score": 58,
  "publicTarget": "Google Play",
  "overview": "自宅サーバー状態や家庭内掲示板をAndroidで確認する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "外出先や家の中で家庭内システムの状態を軽く見られない。",
  "differentiation": "操作権限を絞った閲覧中心のクライアントにする。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/mobile-adapter",
    "android"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "Android権限はINTERNET中心に絞り、カメラ、位置情報、連絡先、外部ストレージをclosed alphaでは要求しない。",
    "家庭内サーバーURL、掲示板内容、確認履歴は最小保存とし、Google Play審査向けに権限理由を明記する。",
    "書き込み、削除、通知常時許可はmockまたは手動確認待ちにする。"
  ]
};
