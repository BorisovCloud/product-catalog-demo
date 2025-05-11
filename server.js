const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Статическая папка
app.use(express.static('public'));

// Health-check endpoint
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});