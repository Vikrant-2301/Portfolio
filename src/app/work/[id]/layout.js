import { architecturalProjects } from "@/lib/data";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = architecturalProjects.find((p) => p.id === id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default function ProjectLayout({ children }) {
    return <>{children}</>;
}
