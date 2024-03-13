// Express.jsのインポート
const express = require('express');

// Expressアプリケーションの作成
const app = express();
const PORT = 3000;

// ミドルウェアの設定
app.use(express.json()); // JSONのリクエストボディをパースするためのミドルウェア

// ルートエンドポイントの定義
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// エンドポイント '/api/messages' の定義
const messages = [];
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { message } = req.body;
  messages.push(message);
  res.status(201).json(messages);
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
