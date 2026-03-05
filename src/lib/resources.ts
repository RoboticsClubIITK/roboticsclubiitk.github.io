import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/resources");

export interface ResourcePost {
    slug: string;
    title: string;
    image?: string;
    description: string;
    content: string;
    tags?: string[];
}

export function getResourcePosts(): ResourcePost[] {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory).filter(fn => fn.endsWith('.md'));
    const allPosts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as any),
        };
    });

    // Sort alphabetically by title
    return allPosts.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
}

export function getResourcePost(slug: string): ResourcePost | undefined {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return undefined;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...(data as any),
    };
}
