# 厳格手動テスト追補

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

## 状態
Codex側では手動テスト未実施。

## 追加確認
1. `npm test`後にvalidationとweb-smoke resultを確認する。
2. `npm run serve -- --port 4173`で画面を開く。
3. 主要操作を3回実行し状態変化を確認する。
4. security/privacy checklistの手動確認待ちを確認する。
5. release asset 3件を確認する。
