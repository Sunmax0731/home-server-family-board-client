# 手動テスト

- Repo: `home-server-family-board-client`
- Domain: AndroidApp
- Rank: 41 / P2 / Score 58
- Idea No: 12
- アイデア名: 自宅サーバー・家庭掲示板クライアント
- 公開先: Google Play
- Version: 0.1.0-alpha.1

## 状態
Codex側では手動テスト未実施。

## 環境
- Working directory: `D:\AI\AndroidApp\home-server-family-board-client`
- Command: `npm run serve -- --port 4173`
- URL: `http://localhost:4173/app/`

## 手順
1. モバイル幅で家庭掲示板とサーバー状態が読める。
2. Android権限がINTERNET中心で不要権限を要求しない。
3. Google Play closed alpha審査観点としてデータ保存とプライバシーを確認する。

## 期待結果
主要画面がblankでなく、主要操作が反応し、警告と手動確認待ちが隠れない。
