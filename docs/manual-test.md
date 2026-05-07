# Manual Test

Codex 側では手動テスト未実施です。ユーザーが実施するための手順を記録します。

## 作業ディレクトリ

`D:\AI\Dictionary\system-game-design-pattern-dictionary`

## 必要ファイル

- `samples/sample-input.json`
- `samples/representative-suite.json`
- `public/index.html`
- `dist/system-game-design-pattern-dictionary-docs.zip`

## セットアップ手順

```powershell
cd D:\AI\Dictionary\system-game-design-pattern-dictionary
npm test
npm start
```

## ローカルサーバーやホストアプリ起動手順

- 静的 preview は `public/index.html` をブラウザで開く。
- GitHub Pages 公開前は任意の静的サーバーで `public/` を配信して確認する。

## 実施手順

1. `npm test` が成功することを確認する。
2. `npm start` 後に `dist/run/report.md` と `dist/run/report.html` を開く。
3. `public/index.html` でタイトル、差別化、主要フィールド、次アクションが読めることを確認する。
4. `dist/system-game-design-pattern-dictionary-docs.zip` を展開し、README、導入手順、ユーザーガイド、QCDS、release evidence が含まれることを確認する。

## 期待結果

- happy-path は passed。
- missing-required は failed。
- warning は warning。
- mixed-batch は failed かつ warning を含む。
- 手動テスト未実施項目が release evidence に残っている。

## 未実施の手動確認項目

- 実機または公開先での継続利用確認。
- GitHub Pages / GitHub Release 向けの掲載文、スクリーンショット、権限説明の確認。
- ユーザー判断による S+ 昇格可否。
