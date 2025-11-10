const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Default route: serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Test site running at http://localhost:${PORT}`);
  console.log('Open this URL in your browser to test the Markdown Selector userscript.');
});
