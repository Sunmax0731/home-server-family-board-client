# 仕様

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

## フロー
1. サンプルデータを読み込む。
2. 代表カード、状態、主要操作を確認する。
3. 警告、失敗、手動確認待ちを同じ画面で読む。
4. 手動テスト手順へ進む。

## データ
- `samples/representative-suite.json`: happy-path / missing-required / warning / mixed-batch。
- `samples/sample-telemetry.json`: 家庭掲示板とAndroid client snapshot。

## 安全境界
- Android権限はINTERNET中心に絞り、カメラ、位置情報、連絡先、外部ストレージをclosed alphaでは要求しない。
- 家庭内サーバーURL、掲示板内容、確認履歴は最小保存とし、Google Play審査向けに権限理由を明記する。
- 書き込み、削除、通知常時許可はmockまたは手動確認待ちにする。
