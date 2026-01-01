# Calculator App

シンプルな計算機アプリケーションです。

## 技術スタック

- **フロントエンド**: Vite + React + TypeScript
- **バックエンド**: FastAPI (開発環境用)

## セットアップ

### フロントエンド

```bash
cd frontend
npm install
npm run dev
```

### バックエンド（開発環境）

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## デプロイ

このアプリはGitHub Pagesにデプロイされています。フロントエンドは静的サイトとして動作します。

## ビルド

```bash
cd frontend
npm run build
```
