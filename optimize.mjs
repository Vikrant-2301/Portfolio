import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('./public/assets/portfolio/PORTFOLIO');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(inputDir, file.replace('.png', '.webp'));
        
        console.log(`Optimizing ${file}...`);
        
        await sharp(inputPath)
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        // Delete original png
        fs.unlinkSync(inputPath);
        console.log(`Finished ${file}`);
      }
    }
    console.log("All images optimized successfully!");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
