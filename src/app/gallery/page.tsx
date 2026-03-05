import { getGalleryImages } from "@/lib/gallery";
import ClientPage from "./ClientPage";

export default function GalleryPage() {
    // Read the grouped images dynamically during the build
    const galleryData = getGalleryImages();
    return <ClientPage galleryData={galleryData} />;
}
