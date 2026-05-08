# テスト計画

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\AndroidApp\home-server-family-board-client`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/home-server-family-board-client-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
