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

async function addLazyLoading() {
  const sourceFiles = await getAllFiles(srcDir, ['.tsx', '.jsx']);
  console.log(`Found ${sourceFiles.length} source files to check for lazy loading.`);

  for (const file of sourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Regex to match <img ... /> or <motion.img ... /> that don't have loading="lazy"
    // It's tricky to do perfectly with regex but we can try to replace <img with <img loading="lazy" decoding="async"
    // only if it doesn't already have loading=
    
    // Replace <img (not followed by loading=) 
    const imgRegex = /<img(?![^>]*loading=)([^>]*)>/g;
    if (imgRegex.test(content)) {
      content = content.replace(imgRegex, '<img loading="lazy" decoding="async"$1>');
      changed = true;
    }

    const motionImgRegex = /<motion\.img(?![^>]*loading=)([^>]*)>/g;
    if (motionImgRegex.test(content)) {
      content = content.replace(motionImgRegex, '<motion.img loading="lazy" decoding="async"$1>');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Added lazy loading to ${file}`);
    }
  }
  console.log('Lazy loading optimization complete.');
}

addLazyLoading();
