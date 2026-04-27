# BED QR Viewer

QR コード（BED 形式の領域情報）をスキャンして、UCSC Genome Browser や ClinGen, DECIPHER 等で表示するデスクトップアプリ。GRCh37 / hg19 対応。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 機能

- カメラで QR コードをスキャン
- BED フォーマットの領域情報を抽出
- UCSC, ClinGen, DECIPHER 等の外部ブラウザでワンクリック表示
- macOS / Windows / Linux 対応

## ダウンロード

[Releases ページ](../../releases) からインストーラを取得してください：

- **Windows**：`BED-QR-Viewer-X.X.X-win-x64.exe`（インストーラ）／`*-portable.exe`（インストール不要）
- **macOS**：`*-mac-arm64.dmg`（Apple Silicon）／`*-x64.dmg`（Intel）
- **Linux**：`*-linux-x86_64.AppImage`

## 開発者向け：ローカル起動

```bash
git clone https://github.com/CheminSu/bed-qr-viewer.git
cd bed-qr-viewer
npm install
npm start
```

## ローカルビルド

```bash
npm run build:win    # Windows .exe
npm run build:mac    # macOS .dmg
npm run build:linux  # Linux .AppImage
```

成果物は `dist/` に出力されます。

## GitHub への上げ方（自動ビルド・公開）

1. GitHub に Public リポジトリ `bed-qr-viewer` を作成（`UCSC-bulk-open` と同手順）
2. ローカルで：
```bash
cd "C:\Users\tchem\bed_qr_viewer"
git init
git config user.name "CheminSu"
git config user.email "CheminSu@users.noreply.github.com"
git add .
git commit -m "Initial commit"
git branch -M main
gh repo create bed-qr-viewer --public --source=. --remote=origin --push
git tag v1.0.0
git push origin v1.0.0
```
3. リポジトリの **Settings → Actions → General → Workflow permissions** で **Read and write permissions** を選択して保存
4. Actions タブでビルド完了を確認 → Releases ページに配布物が並ぶ

## カメラ権限

QR コード読み取りにはカメラへのアクセス権が必要です。
本アプリは起動時に自動でカメラ・マイク権限を許可するよう設定されています。
OS側でアクセスを聞かれた場合は許可してください：

- **Windows**：設定 → プライバシー → カメラ → デスクトップアプリのカメラへのアクセスを許可
- **macOS**：システム設定 → プライバシーとセキュリティ → カメラ
- **Linux**：通常は不要

## ライセンス

[MIT](LICENSE)
