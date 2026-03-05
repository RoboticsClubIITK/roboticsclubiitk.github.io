import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const href = props.href || "";

    // 1. YouTube Video Embed Detection
    // Matches: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
    const youtubeVideoRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const videoMatch = href.match(youtubeVideoRegex);

    if (videoMatch && videoMatch[1]) {
        const videoId = videoMatch[1];
        return (
            <div className="my-6 w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        );
    }

    // 2. YouTube Playlist Embed Detection
    // Matches: youtube.com/playlist?list=ID
    const youtubePlaylistRegex = /youtube\.com\/playlist\?.*list=([^"&?\/\s]+)/i;
    const playlistMatch = href.match(youtubePlaylistRegex);

    if (playlistMatch && playlistMatch[1]) {
        const playlistId = playlistMatch[1];
        return (
            <div className="my-6 w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                    title="YouTube playlist player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        );
    }

    // 3. External Links Validation
    const isExternal = href.startsWith("http");

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium relative group"
                {...props}
            >
                {props.children}
                <ExternalLink className="h-3 w-3 inline-block ml-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
        );
    }

    // 4. Internal Links
    return (
        <Link href={href} className="text-primary hover:text-primary/80 transition-colors font-medium">
            {props.children}
        </Link>
    );
}
