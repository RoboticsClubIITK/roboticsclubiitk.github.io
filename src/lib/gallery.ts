import fs from "fs";
import path from "path";

const galleryDirectory = path.join(process.cwd(), "public/Gallery");

export interface GalleryImage {
    src: string;
    cat: string;
}

export function getGalleryImages(): Record<string, string[]> {
    if (!fs.existsSync(galleryDirectory)) return {};

    const groupedImages: Record<string, string[]> = {};

    // 1. Read everything inside public/Gallery
    const items = fs.readdirSync(galleryDirectory);

    items.forEach((item) => {
        const itemPath = path.join(galleryDirectory, item);
        const isDirectory = fs.statSync(itemPath).isDirectory();

        if (isDirectory) {
            // The folder name becomes our Event Category (e.g., "Rover Workshop" from "Rover-Workshop")
            // Replacing hyphens/underscores with spaces to make it look clean on the website
            const category = item.replace(/[-_]/g, " ");

            // 2. Read all files inside this specific event folder
            const fileNames = fs.readdirSync(itemPath);

            fileNames.forEach((fileName) => {
                const ext = path.extname(fileName).toLowerCase();
                // Check if it's a valid image format
                if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                    return;
                }

                // Path that the browser will use to render the image
                const srcPath = `/Gallery/${item}/${fileName}`;

                if (!groupedImages[category]) {
                    groupedImages[category] = [];
                }

                groupedImages[category].push(srcPath);
            });
        }
    });

    return groupedImages;
}