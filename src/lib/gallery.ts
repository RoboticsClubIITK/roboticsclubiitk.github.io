import fs from "fs";
import path from "path";

const galleryDirectory = path.join(process.cwd(), "public/Gallery");

export interface GalleryImage {
    src: string;
    cat: string;
}

export function getGalleryImages(): Record<string, string[]> {
    if (!fs.existsSync(galleryDirectory)) return {};

    const fileNames = fs.readdirSync(galleryDirectory);
    const groupedImages: Record<string, string[]> = {};

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    fileNames.forEach((fileName) => {
        // Skip non-image files like .DS_Store or .mp4 for now
        const ext = path.extname(fileName).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            return;
        }

        const srcPath = `/Gallery/${fileName}`;
        let category = "Events"; // Default category

        // WhatsApp images format: IMG-YYYYMMDD-WAXXXX.jpg
        const match = fileName.match(/IMG-(\d{4})(\d{2})(\d{2})-WA/);

        if (match) {
            const year = match[1];
            const monthIndex = parseInt(match[2], 10) - 1;

            if (monthIndex >= 0 && monthIndex < 12) {
                category = `${monthNames[monthIndex]} ${year}`;
            }
        }

        if (!groupedImages[category]) {
            groupedImages[category] = [];
        }

        groupedImages[category].push(srcPath);
    });

    return groupedImages;
}
