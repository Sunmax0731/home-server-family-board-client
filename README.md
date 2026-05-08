# home-server-family-board-client

自宅サーバー・家庭掲示板クライアント の closed alpha prototype。自宅サーバー状態や家庭内掲示板をAndroidで確認する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## Status

- Version: 0.1.0-alpha.1
- Rank: 41 / P2 / Score 58
- Domain: AndroidApp
- Public target: Google Play
- Manual testing: not run by Codex

## Included

- Android closed alpha client prototype
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
