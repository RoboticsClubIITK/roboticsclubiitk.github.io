import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { ArrowRight, Calendar, User } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blogs/${post.slug}`} className="group block h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-xl bg-card/50 border border-border/50 transition-all duration-300 hover:border-cta/50 hover:bg-card hover:shadow-lg hover:shadow-cta/5">
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-background">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-cta/10">
                            <span className="text-4xl">📝</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                        </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cta line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="mb-4 text-muted-foreground line-clamp-3 text-sm flex-1">
                        {post.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-cta">
                        Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
