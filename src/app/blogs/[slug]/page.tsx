import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getBlogPost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-12 flex flex-col items-center w-full">
            {/* Hero Header */}
            <div className="container px-4 md:px-6 mb-12 mx-auto flex flex-col items-center">
                <div className="w-full max-w-3xl flex justify-start mb-8">
                    <Link href="/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-cta transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all blogs
                    </Link>
                </div>

                <div className="space-y-4 text-center max-w-3xl mx-auto w-full">
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground w-full">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {post.title}
                    </h1>
                </div>
            </div>

            {/* Featured Image */}
            {post.image && (
                <div className="container px-4 md:px-6 mb-12 mx-auto flex justify-center">
                    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1200}
                            height={675}
                            className="w-full h-auto object-contain rounded-xl border border-border/50"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                <div className="w-full prose prose-invert prose-lg max-w-3xl mx-auto text-justify prose-headings:text-left prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-cta hover:prose-a:text-cta/80 prose-code:text-cta prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50">
                    <MDXRemote source={post.content} />
                </div>

                <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border/50 flex justify-center">
                    <Button asChild variant="outline" className="gap-2">
                        <Link href="/blogs">
                            <ArrowLeft className="h-4 w-4" /> Read More Articles
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
