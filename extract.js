const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('vibe-admin.json', 'utf8'));
Object.keys(data.files).forEach(filePath => {
  const content = typeof data.files[filePath] === 'string' ? data.files[filePath] : data.files[filePath].content;
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('Added →', filePath);
});
console.log('\n🎉 VIBE CODING OLYMPICS ADMIN PANEL IS NOW LIVE!');
console.log('Visit: http://localhost:3000/admin\n');
