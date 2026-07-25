const fs = require('fs');
const path = require('path');

async function compressImages() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (err) {
    console.error('Sharp module not found:', err.message);
    process.exit(1);
  }

  const publicDir = path.join(__dirname, '..', 'public');
  const files = fs.readdirSync(publicDir);

  const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));

  console.log(`Found ${jpgFiles.length} JPG files to compress...`);

  for (const file of jpgFiles) {
    const inputPath = path.join(publicDir, file);
    const fileNameWithoutExt = path.parse(file).name;
    const outputPath = path.join(publicDir, `${fileNameWithoutExt}.webp`);

    const stats = fs.statSync(inputPath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`Compressing ${file} (${sizeInMB} MB)...`);

    try {
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeInKB = (newStats.size / 1024).toFixed(2);
      console.log(`✓ Saved ${fileNameWithoutExt}.webp (${newSizeInKB} KB)`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log('All image compressions completed successfully!');
}

compressImages();
