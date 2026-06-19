const fs = require('fs');
const content = fs.readFileSync('node_modules/react-icons/si/index.d.ts', 'utf-8');
const lines = content.split('\n').filter(line => 
  line.toLowerCase().includes('anthropic') || 
  line.toLowerCase().includes('claude')
);
console.log(lines.join('\n'));
