import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    image?: string;
    description: string;
    content: string;
}

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);
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

    return allPosts.sort((a, b) => {
        const parseDate = (dateStr: string) => {
            const parts = dateStr.split("-");
            // If it's DD-MM-YYYY
            if (parts.length === 3 && parts[0].length === 2 && parts[2].length === 4) {
                return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
            }
            return new Date(dateStr).getTime();
        };
        return parseDate(a.date) > parseDate(b.date) ? -1 : 1;
    });
}

export function getBlogPost(slug: string): BlogPost | undefined {
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
