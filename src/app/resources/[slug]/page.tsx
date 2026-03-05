import { getResourcePost, getResourcePosts } from "@/lib/resources";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/mdx/CustomLink";

export async function generateStaticParams() {
    const posts = getResourcePosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getResourcePost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-12 flex flex-col items-center w-full">
            {/* Hero Header */}
            <div className="container px-4 md:px-6 mb-12 mx-auto flex flex-col items-center">
                <div className="w-full max-w-3xl flex justify-start mb-8">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="h-4 w-4" /> View All Roadmaps
                    </Link>
                </div>

                <div className="space-y-4 text-center max-w-3xl mx-auto w-full">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        {post.title}
                    </h1>
                    <p className="text-muted-foreground">
                        {post.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                <div className="w-full prose prose-invert prose-lg max-w-3xl mx-auto text-justify prose-headings:text-left prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-6 prose-li:my-2">
                    <MDXRemote source={post.content} components={{ a: CustomLink }} />
                </div>

                <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border/50 flex justify-center">
                    <Button asChild variant="outline" className="gap-2">
                        <Link href="/resources">
                            <ArrowLeft className="h-4 w-4" /> View All Roadmaps
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
