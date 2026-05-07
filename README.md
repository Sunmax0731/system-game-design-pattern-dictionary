# システム・ゲーム開発デザインパターン辞書

システム開発やゲーム開発で使うデザインパターン、アーキテクチャパターン、ゲームループ、ECS、状態管理、イベント駆動、データ駆動設計などを辞書化する。背景、関連パターン、避けるべき場面、実装例、トレードオフを学べる。

| 項目 | 内容 |
| --- | --- |
| Rank | 87 |
| Domain | Dictionary |
| Idea No. | 3 |
| Repository | system-game-design-pattern-dictionary |
| 主な公開先 | GitHub Pages / GitHub Release |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: QCDS / 手動レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/app-adapter.mjs`: static pattern dictionary site + CLI validation core 向けの表示状態を作る。
- `src/cli.mjs`: CLI。
- `public/`: closed alpha preview 用の静的 UI。

## Validation

```powershell
npm test
npm start
```

`npm test` で代表シナリオ、QCDS、docs ZIP、静的UI smoke、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
