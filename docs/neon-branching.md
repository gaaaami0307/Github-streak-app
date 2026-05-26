
# Neon ブランチ運用（超簡潔）

手順（3行）

1. Neon でブランチを作成し、Pooled と Direct の接続文字列を取得する。
2. Render と GitHub Actions の設定を更新する（短く具体）

- Render:
	- 該当サービスの環境変数 `DATABASE_URL` にブランチの Pooled URL を設定する。
	- マイグレーション時に Render 側で direct を使う運用をする場合は、同サービスに `DIRECT_DATABASE_URL` を設定しておく（必須ではない）。

- GitHub (Repository Secrets):
	- Direct 用シークレットを追加（例: `NEON_STAGING_DIRECT_DATABASE_URL`）。
	- 既存の workflow が `NEON_DIRECT_DATABASE_URL` を参照するなら同名で登録するか、workflow を新しいシークレット名に合わせて修正する。

3. GitHub Actions の manual workflow（`workflow_dispatch`）で Direct を `DATABASE_URL` に注入して `bundle exec rails db:migrate` を実行する。

セキュリティ注意（短く）

- 接続文字列は絶対にリポジトリへコミットしない（`.env` も不可）。
- 値は GitHub Secrets または Render の環境変数に保存し、ワークフローでログに出力しないこと。
- 本番は Pooled、マイグレーションは Direct を使う（直接同時接続は避ける）。

必要なら Render の画面手順や `gh` コマンドの一括スクリプトも追加できます。
