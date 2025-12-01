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
