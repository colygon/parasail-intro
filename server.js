const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const comparisonHtml = fs.readFileSync(path.join(__dirname, 'comparison.html'));

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(comparisonHtml);
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = server;
