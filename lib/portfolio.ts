import {
  Activity,
  Bot,
  Cpu,
  Globe,
  Layers,
  Layout,
  LayoutDashboard,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import portfolioJson from "@/portfolio.json";

export type ProjectMedia =
  | string
  | { type: "youtube"; videoId: string; poster: string }
  | { type: "video"; src: string; poster: string };

export interface PortfolioProject {
  title: string;
  category: string;
  isFeatured: boolean;
  description: string;
  longDescription: string;
  image: string;
  gallery: ProjectMedia[];
  tags: string[];
  slug: string;
  stats: { label: string; value: string; icon: any }[];
  techStack: { name: string; value: string }[];
  liveUrl?: string;
  client?: string;
  domain?: string;
  duration?: string;
  objectives?: string[];
  feedback?: {
    content: string;
    author: string;
  };
}

export const portfolio = portfolioJson;

const youtubeIdFromUrl = (url: string): string | null => {
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch?.[1]) return embedMatch[1];

  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch?.[1]) return shortMatch[1];

  return null;
};

const toTechStack = (technologies: string[] = []): { name: string; value: string }[] => {
  return technologies.slice(0, 8).map((tech, index) => ({
    name: `Technology ${index + 1}`,
    value: tech,
  }));
};

const toStats = (item: any): { label: string; value: string; icon: any }[] => {
  const stats = [] as { label: string; value: string; icon: any }[];

  if (typeof item.rating === "number") {
    stats.push({ label: "Rating", value: `${item.rating}/5`, icon: Activity });
  }

  if (item.platform) {
    stats.push({ label: "Platform", value: item.platform, icon: Layout });
  }

  if (item.date || item.duration) {
    stats.push({ label: "Status", value: item.date || item.duration, icon: Globe });
  }

  return stats.slice(0, 3);
};

const toGallery = (item: any): ProjectMedia[] => {
  const images = Array.isArray(item.image) ? item.image.filter(Boolean) : [];
  const gallery: ProjectMedia[] = [...images];
  const poster = images[0] || "/thumbnails/listcatcher_yellow.png";

  if (typeof item.video === "string" && item.video.trim()) {
    const youtubeId = youtubeIdFromUrl(item.video);
    if (youtubeId) {
      gallery.unshift({ type: "youtube", videoId: youtubeId, poster });
    } else if (item.video.endsWith(".mp4")) {
      gallery.unshift({ type: "video", src: item.video, poster });
    }
  }

  return gallery.length > 0 ? gallery : [poster];
};

const rawProjects = [
  ...(portfolio.projects?.items || []),
  ...(portfolio.projects?.archivedItems || []),
];

export const projects: PortfolioProject[] = rawProjects.map((item: any) => {
  const images = Array.isArray(item.image) ? item.image : [];

  return {
    title: item.title,
    category: item.category || item.platform || "Project",
    isFeatured: Boolean(item.featured),
    description: item.description || "",
    longDescription: item.detailedDescription || item.description || "",
    image: images[0] || "/thumbnails/listcatcher_yellow.png",
    gallery: toGallery(item),
    tags: item.tags || [],
    slug: item.slug,
    stats: toStats(item),
    techStack: toTechStack(item.technologies),
    liveUrl: item.liveUrl || undefined,
    client: item.client?.name || undefined,
    domain: item.domain || undefined,
    duration: item.duration || item.date || undefined,
    objectives: item.objectives || [],
    feedback: item.client?.feedback
      ? { content: item.client.feedback, author: item.client.name }
      : undefined,
  };
});

export const featuredProjects = projects.filter((project) => project.isFeatured);

export const navLinks = (portfolio.navigation || []).map((item: any) => ({
  name: item.label,
  href: item.href === "/contact" ? "/#contact" : item.href,
}));

export const socialLinks = (portfolio.social || []).map((item: any) => {
  const href = item.icon === "email" && !item.href.startsWith("mailto:")
    ? `mailto:${item.href.trim()}`
    : item.href.trim();

  return {
    name: item.name,
    href,
    icon: item.icon,
  };
});

const timelineSkills = (portfolio.timeline || [])
  .flatMap((item: any) => item.skills || [])
  .map((skill: string) => skill.trim())
  .filter(Boolean);

export const heroTechStack = Array.from(new Set(timelineSkills)).slice(0, 10);

const wheelIcons = [Bot, Workflow, LayoutDashboard, Zap, TrendingUp, Activity, Cpu, Layers];
const wheelTopClasses = ["lg:top-[140px]", "lg:top-[260px]", "lg:top-[380px]", "lg:top-[500px]"];

const wheelTitles = Array.from(new Set(timelineSkills)).slice(0, 8);

export const featureWheelLeft = wheelTitles.slice(0, 4).map((title, index) => ({
  icon: wheelIcons[index],
  title,
  top: wheelTopClasses[index],
}));

export const featureWheelRight = wheelTitles.slice(4, 8).map((title, index) => ({
  icon: wheelIcons[index + 4],
  title,
  top: wheelTopClasses[index],
}));

const timelineItems = portfolio.timeline || [];

export const featureCards = timelineItems.slice(0, 3).map((item: any) => ({
  title: item.title,
  description: (item.description || [])[0] || "",
}));

export const featurePageCards = timelineItems.slice(0, 6).map((item: any, index: number) => ({
  title: item.title,
  description: (item.description || [])[0] || "",
  delay: 0.1 * (index + 1),
}));

export const faqItems = [
  {
    id: "1",
    question: "What kind of projects do you build?",
    answer: `I build ${projects.length}+ projects across ${Array.from(new Set(projects.map((p) => p.category))).slice(0, 4).join(", ")} and more.`,
  },
  {
    id: "2",
    question: "What is your core professional focus?",
    answer: portfolio.personal?.title || "Full stack web and automation engineering.",
  },
  {
    id: "3",
    question: "Which technologies do you work with most?",
    answer: heroTechStack.slice(0, 8).join(", "),
  },
  {
    id: "4",
    question: "Do you handle end-to-end delivery?",
    answer: (timelineItems[0]?.description || []).join(" "),
  },
  {
    id: "5",
    question: "How can we start a collaboration?",
    answer: "Use the contact section on this site or connect through LinkedIn/Email from the social links.",
  },
  {
    id: "6",
    question: "Where are you based?",
    answer: timelineItems[0]?.location || "Remote",
  },
];
