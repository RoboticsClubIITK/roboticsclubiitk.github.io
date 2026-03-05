const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
// Keep clarity high, but prevent massive sizes
const MAX_WIDTH = 1200;
const QUALITY = 80; // Adjusted for even lower latency

const processDirectory = async (dir) => {
    try {
        const files = await fs.promises.readdir(dir);

        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = await fs.promises.stat(fullPath);

            if (stat.isDirectory()) {
                await processDirectory(fullPath);
            } else {
                const ext = path.extname(file).toLowerCase();
                if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                    console.log(`Processing: ${fullPath}`);
                    await optimizeImage(fullPath, ext);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }
};

const optimizeImage = async (filePath, ext) => {
    try {
        const tempPath = `${filePath}.tmp${ext}`;
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize only if wider than MAX_WIDTH, otherwise keep original width
        const resizeOptions = metadata.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

        // .rotate() will automatically use EXIF data to orient the image correctly
        let pipeline = image.rotate().resize(resizeOptions);

        if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });
        } else if (ext === '.png') {
            // Use png compression, keep colors intact
            pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
        } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: QUALITY });
        }

        await pipeline.toFile(tempPath);

        const originalStat = await fs.promises.stat(filePath);
        const newStat = await fs.promises.stat(tempPath);

        // Replace the file to apply the new rotation and lower quality settings
        await fs.promises.rename(tempPath, filePath);
        const savedMB = ((originalStat.size - newStat.size) / (1024 * 1024)).toFixed(2);
        console.log(`✅ Processed ${path.basename(filePath)} - Size diff: ${savedMB} MB`);

    } catch (error) {
        console.error(`Error optimizing ${filePath}:`, error);
    }
};

console.log('Starting image optimization...');
console.log(`Settings: Max Width: ${MAX_WIDTH}px, Quality: ${QUALITY}%`);
processDirectory(PUBLIC_DIR).then(() => {
    console.log('Finished scanning directories.');
});
