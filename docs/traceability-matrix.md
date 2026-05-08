# Traceability Matrix

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

| 要件 | 仕様 | 実装 | テスト | docs/release |
| --- | --- | --- | --- | --- |
| 代表フロー | 利用者フロー | src/core, app | happy-path | README, user-guide |
| 必須不足検出 | データ仕様 | src/validators | missing-required | test-plan |
| 警告保持 | 安全境界 | src/report | warning, mixed-batch | security-privacy |
| closed alpha配布 | release checklist | scripts/validate | npm test | release-evidence |
| QCDS A-以上 | evaluation criteria | src/review-model | metrics validation | qcds docs |
