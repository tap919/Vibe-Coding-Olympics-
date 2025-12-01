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
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('vibe-backend.json', 'utf8'));

Object.keys(data.files).forEach(filePath => {
  const content = typeof data.files[filePath] === 'string' ? data.files[filePath] : data.files[filePath].content || data.files[filePath].append || '';
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  if (fs.existsSync(fullPath) && data.files[filePath].append) {
    fs.appendFileSync(fullPath, content);
  } else {
    fs.writeFileSync(fullPath, content);
  }
  console.log('Created/Updated →', filePath);
});
console.log('Backend + DB fully added! Run: npx supabase start && npm run dev');
