# Security / Privacyチェックリスト

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

## 完了項目
- [x] Android権限はINTERNET中心に絞り、カメラ、位置情報、連絡先、外部ストレージをclosed alphaでは要求しない。
- [x] 家庭内サーバーURL、掲示板内容、確認履歴は最小保存とし、Google Play審査向けに権限理由を明記する。
- [x] 書き込み、削除、通知常時許可はmockまたは手動確認待ちにする。
- [x] Android権限、データ保存、プライバシー、Google Play審査観点をmanual testにも記載した。

## 手動確認待ち
- [ ] 実機または実ブラウザで権限説明、危険操作抑止、保存場所を確認する。
