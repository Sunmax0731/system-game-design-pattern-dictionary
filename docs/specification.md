# 仕様

## プロダクト範囲

- Domain: Dictionary
- Repository: system-game-design-pattern-dictionary
- 主な公開先: GitHub Pages / GitHub Release
- Surface: static pattern dictionary site + CLI validation core

## 入力データ

必須項目:

- `id`
- `title`
- `patternType`
- `problemContext`
- `tradeoff`
- `avoidWhen`

推奨項目:

- `exampleReference`

## 判定

- 必須項目不足は `failed`。
- 推奨項目不足、`waiting`、`blocked`、`riskLevel=high` は `warning`。
- エラーも警告もない場合は `passed`。
