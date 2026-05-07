# Strict Manual Test Addendum

## 作業ディレクトリ

`D:\AI\Dictionary\system-game-design-pattern-dictionary`

## 必要ファイル

- `docs/manual-test.md`
- `dist/system-game-design-pattern-dictionary-docs.zip`
- GitHub prerelease `v0.1.0-alpha.1`

## セットアップ手順

1. `npm test` を実行する。
2. release asset 3件をダウンロードできることを確認する。
3. docs ZIP を展開し、`docs/release-evidence.json` を読む。

## 実施手順

1. README の導線から requirements、specification、manual-test に到達する。
2. `samples/representative-suite.json` の4シナリオを確認する。
3. `public/index.html` または公開先 preview を確認する。
4. GitHub Pages 公開時の読み込み、検索、主要文言をレビューする。

## 期待結果

- 手順だけで第三者が closed alpha を検証できる。
- 手動テスト未実施が明示され、S+ 評価になっていない。

## 未実施の手動確認項目

- 実機/公開環境での画面確認。
- ユーザーによる継続利用の判断。
- 公開先の最終掲載素材レビュー。
