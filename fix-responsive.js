const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

async function getAllFiles(dir, extArray) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await getAllFiles(fullPath, extArray));
    } else {
      if (extArray.includes(path.extname(fullPath).toLowerCase())) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function fixResponsiveness() {
  const sourceFiles = await getAllFiles(srcDir, ['.tsx', '.jsx']);
  console.log(`Found ${sourceFiles.length} source files to check for minWidth responsive issues.`);

  for (const file of sourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace minWidth: 500 with minWidth: 'min(100%, 500px)'
    // Careful not to replace 0 or already responsive values
    const minWidthRegex = /minWidth:\s*([1-9]\d{1,3})(?!px|%|vw|vh|'|")/g;
    if(minWidthRegex.test(content)){
      content = content.replace(minWidthRegex, 'minWidth: "min(100%, $1px)"');
      changed = true;
    }

    // Same for string '500px'
    const minWidthStrRegex = /minWidth:\s*'([1-9]\d{1,3})px'/g;
    if(minWidthStrRegex.test(content)){
      content = content.replace(minWidthStrRegex, 'minWidth: "min(100%, $1px)"');
      changed = true;
    }
    
    const minWidthStrRegex2 = /minWidth:\s*"([1-9]\d{1,3})px"/g;
    if(minWidthStrRegex2.test(content)){
      content = content.replace(minWidthStrRegex2, 'minWidth: "min(100%, $1px)"');
      changed = true;
    }

    // Replace width: 800 with width: 'min(100%, 800px)' to prevent overflow, but only large widths
    const largeWidthRegex = /width:\s*([4-9]\d{2}|\d{4})(?!px|%|vw|vh|'|")/g;
    if(largeWidthRegex.test(content)){
      content = content.replace(largeWidthRegex, 'width: "min(100%, $1px)"');
      changed = true;
    }

    const largeWidthStrRegex = /width:\s*'([4-9]\d{2}|\d{4})px'/g;
    if(largeWidthStrRegex.test(content)){
      content = content.replace(largeWidthStrRegex, 'width: "min(100%, $1px)"');
      changed = true;
    }

    const largeWidthStrRegex2 = /width:\s*"([4-9]\d{2}|\d{4})px"/g;
    if(largeWidthStrRegex2.test(content)){
      content = content.replace(largeWidthStrRegex2, 'width: "min(100%, $1px)"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed responsive widths in ${file}`);
    }
  }
  console.log('Responsive optimization complete.');
}

fixResponsiveness();
