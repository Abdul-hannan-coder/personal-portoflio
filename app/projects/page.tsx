import ProjectsGallery from '@/components/ui/ProjectsGallery';
import { portfolio } from '@/lib/portfolio';

export const metadata = {
    title: `${portfolio.projects?.title} | ${portfolio.personal?.name?.trim()}`,
    description: portfolio.projects?.subtitle,
};

export default function ProjectsPage() {
    return <ProjectsGallery />;
}
