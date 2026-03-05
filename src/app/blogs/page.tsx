import { getBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogsPage() {
    const posts = getBlogPosts();

    return (
        <div className="min-h-screen pt-24 pb-12 w-full flex justify-center">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Club <span className="text-cta">Insights</span>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Stories, technical deep-dives, and experiences from our past coordinators and alumni.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground">No blogs found yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
