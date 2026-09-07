// Keep every Node harness on the same script order as the shipped page.
const fs = require('fs');
const path = require('path');
function readConversationSource(root){
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const files = [...html.matchAll(/<script src="\.\/(conversation-[a-z-]+\.js)(?:\?v=[0-9.]+)?"><\/script>/g)].map(match=>match[1]);
  if(!files.length || new Set(files).size !== files.length) throw new Error('Invalid conversation script manifest');
  return files.map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n');
}
module.exports = {readConversationSource};
