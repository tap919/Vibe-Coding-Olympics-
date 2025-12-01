// Extract script for Vibe Coding Olympics
// Usage: Place 'vibe-coding-olympics-full-code.json' in the same directory and run: node extract.js
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('vibe-coding-olympics-full-code.json', 'utf8'));
Object.keys(data.files).forEach(filename => {
  const file = data.files[filename];
  const dirs = filename.split('/');
  const path = dirs.slice(0, -1).join('/');
  if (path) fs.mkdirSync(path, { recursive: true });
  fs.writeFileSync(filename, typeof file === 'string' ? file : file.content);
  console.log('Created', filename);
});
console.log('Vibe Coding Olympics ready! Run: npm install && npm run dev');
