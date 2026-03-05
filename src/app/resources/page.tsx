import { getResourcePosts } from "@/lib/resources";
import ClientPage from "./ClientPage";

export default function ResourcesPage() {
    const roadmaps = getResourcePosts();
    return <ClientPage roadmaps={roadmaps} />;
}
