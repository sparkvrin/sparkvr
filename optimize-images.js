const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
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

async function optimizeImages() {
  const images = await getAllFiles(publicDir, ['.png', '.jpg', '.jpeg']);
  const replaceMap = {};

  console.log(`Found ${images.length} images to optimize.`);

  for (const img of images) {
    const ext = path.extname(img);
    const basename = path.basename(img, ext);
    const relativePath = path.relative(publicDir, img);
    const webpPath = path.join(path.dirname(img), `${basename}.webp`);
    
    const oldUrl = '/' + relativePath.replace(/\\/g, '/');
    const newUrl = '/' + path.relative(publicDir, webpPath).replace(/\\/g, '/');

    try {
      await sharp(img)
        .webp({ quality: 80, effort: 4 })
        .toFile(webpPath);
      
      replaceMap[oldUrl] = newUrl;
      // also replace without leading slash just in case
      replaceMap[relativePath.replace(/\\/g, '/')] = path.relative(publicDir, webpPath).replace(/\\/g, '/');

      console.log(`Converted: ${img} -> ${webpPath}`);
      fs.unlinkSync(img); // Delete original
    } catch (e) {
      console.error(`Failed to convert ${img}`, e);
    }
  }

  // Now find and replace in all src files
  const sourceFiles = await getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js', '.css']);
  console.log(`Found ${sourceFiles.length} source files to update.`);

  for (const file of sourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [oldUrl, newUrl] of Object.entries(replaceMap)) {
      // Need to be careful with replace
      // Let's replace global occurrences
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in ${file}`);
    }
  }
  console.log('Image optimization complete.');
}

optimizeImages();
