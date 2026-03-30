import React from 'react';
import { Layers, Code2, Globe, MessageSquare, Monitor, Zap, Shield, Layout, Smartphone, Users, Activity, Brain } from 'lucide-react';

export interface Project {
    title: string;
    category: string;
    isFeatured: boolean;
    description: string;
    longDescription: string;
    image: string;
    gallery: (string | { type: 'youtube'; videoId: string; poster: string } | { type: 'video'; src: string; poster: string })[];
    tags: string[];
    slug: string;
    icon: React.ReactNode;
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

export const projects: Project[] = [
    {
        title: "Stop Losing the Leads HQ - Lead Automation Funnel",
        category: "Sales Automation & Lead Management Funnel",
        isFeatured: true,
        description: "Multi-stage sales funnel with lead capture, automated routing, AI-powered follow-up workflows, and CRM integration built on GHL with Loveable frontend components.",
        longDescription: "A complete lead generation and management funnel built with Loveable (UI/component design) and GoHighLevel (GHL) automation platform. Features include: landing page with lead capture forms, real-time form submission handling, automated lead distribution workflows, AI-powered response automation, lead scoring system, follow-up sequence automation, database integration, and conversion tracking. Implementation includes responsive design, form validation, webhook integration, and multi-stage funnel automation sequences.",
        image: "/stopfindingleads/thumbnail.png",
        gallery: [
            "/stopfindingleads/thumbnail.png",
            "/stopfindingleads/funnel1.png"
        ],
        objectives: [
            "Build responsive multi-page landing funnel with form capture and validation",
            "Implement real-time lead data routing to GHL CRM system via API/webhooks",
            "Create automated workflow sequences for lead nurturing and follow-up",
            "Integrate AI automation for instant lead response and categorization",
            "Set up conversion tracking and analytics pipeline",
            "Develop quiz/assessment logic with branching conditional workflows"
        ],
        tags: ["GoHighLevel", "lead-routing", "automation-workflow", "form-submission", "crm-integration", "conversational-ai", "landing-page", "sales-funnel", "SaaS"],
        slug: "stop-losing-leads-hq",
        icon: React.createElement(Zap, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "5/5", icon: Activity },
            { label: "Lead Routing", value: "Automated", icon: Users },
            { label: "Workflows", value: "Multi-stage", icon: Layers }
        ],
        techStack: [
            { name: "Platform", value: "GoHighLevel (GHL)" },
            { name: "Frontend", value: "Loveable" },
            { name: "Integration", value: "API/Webhooks" },
            { name: "Automation", value: "Workflow Sequences" },
            { name: "Response", value: "AI/Automation Engine" }
        ],
        liveUrl: "https://stoplosingleadshq.com/",
        client: "Stop Losing Leads HQ",
        domain: "stoplosingleadshq.com",
        duration: "Live",
        feedback: {
            content: "Outstanding work building out the entire funnel structure and automating the complex lead routing logic.",
            author: "Stop Losing Leads HQ"
        }
    },
    {
        title: "Laptop Station AI Assistant",
        category: "AI Customer Support & Sales",
        isFeatured: true,
        description: "An AI-powered sales and support assistant embedded into the Laptop Station e-commerce store, handling the full customer lifecycle without human involvement.",
        longDescription: "The Laptop Station AI Assistant is an always-on, autonomous agent that provides 24/7 customer support and sales guidance for laptopstation.co.uk. Built with n8n and powered by GPT-4o-mini (with a GPT-5-mini fallback), it seamlessly integrates with Shopify's GraphQL and REST APIs. The assistant actively searches strictly in-stock inventory based on customer budgets and preferences, generates direct multi-item cart links, and provides live tracking updates for existing orders. It maintains conversational memory, handles edge cases gracefully without exposing API errors, and ensures completely human-free end-to-end shopping journeys.",
        image: "/shopify-chatbot-laptopstation/Whisk_6db2c33c62d55d390e44c907bdf04d13dr.jpeg",
        gallery: [
            "/shopify-chatbot-laptopstation/Whisk_6db2c33c62d55d390e44c907bdf04d13dr.jpeg",
            "/shopify-chatbot-laptopstation/Whisk_a2afcc52f16c15e91c34305d70dce612dr.jpeg",
            "/shopify-chatbot-laptopstation/screencapture-laptopstation-chatbot-vercel-app-2026-03-28-10_31_01.png",
            "/shopify-chatbot-laptopstation/screencapture-n8n-clariana-co-uk-workflow-lhGicziiE3X2VK3G-2026-03-28-10_33_00.png"
        ],
        objectives: [
            "Provide 24/7 automated sales assistance and product discovery using natural language",
            "Search real-time inventory via Shopify GraphQL to only recommend in-stock products",
            "Enable frictionless checkout by dynamically generating direct cart URLs for single or multiple items",
            "Deliver instant post-purchase order tracking through Shopify REST API integration",
            "Maintain high reliability with automated LLM fallback (GPT-4o-mini to GPT-5-mini)"
        ],
        tags: ["AI Agent", "Customer Support", "Sales Automation", "n8n", "Shopify", "GPT-4o-mini"],
        slug: "laptop-station-ai-assistant",
        icon: React.createElement(Brain, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "5/5", icon: Activity },
            { label: "Availability", value: "24/7", icon: Zap },
            { label: "Integrations", value: "Shopify + n8n", icon: Code2 }
        ],
        techStack: [
            { name: "Automation", value: "n8n" },
            { name: "AI", value: "GPT-4o-mini, GPT-5-mini" },
            { name: "Integration", value: "Shopify GraphQL, REST API" },
            { name: "Backend", value: "Webhooks" }
        ],
        liveUrl: "https://laptopstation-chatbot.vercel.app/",
        client: "Laptop Station (UK)",
        domain: "E-commerce & AI Automation",
        duration: "Live",
        feedback: {
            content: "The AI assistant seamlessly handles our customer lifecycle from discovery to checkout, acting like a true 24/7 sales agent.",
            author: "Laptop Station (UK)"
        }
    },
    {
        title: "Facebook Postsiva - AI-Powered Content Creation and Scheduling",
        category: "SAAS Platform for Social Media Management",
        isFeatured: true,
        description: "It allow users to create and schedule Facebook page posts using AI-powered content generation and scheduling features. The platform provides an intuitive interface for users to input their content preferences and schedule posts for optimal engagement.",
        longDescription: "Facebook Postsiva is an AI-powered platform designed to help users create and schedule engaging content for their Facebook pages. The platform leverages advanced AI algorithms to generate content based on user preferences and trends, ensuring maximum engagement. Users can easily schedule posts, manage their content calendar, and track performance metrics. The intuitive interface and seamless integration with Facebook API make it a powerful tool for social media management. It also offers AI enhancement, image generation, and content creation from scratch to help users create engaging and relevant content.",
        image: "https://i.ibb.co/tTmWPZLp/Whats-App-Image-2026-02-13-at-10-39-27-PM-3.jpg",
        gallery: [
            "https://i.ibb.co/tTmWPZLp/Whats-App-Image-2026-02-13-at-10-39-27-PM-3.jpg",
            "https://i.ibb.co/4RSYfKrX/Whats-App-Image-2026-02-13-at-10-39-39-PM-1.jpg",
            "https://i.ibb.co/WN4jrFw3/Whats-App-Image-2026-02-13-at-10-39-27-PM-5.jpg",
            "https://i.ibb.co/1WNdHXC/Whats-App-Image-2026-02-13-at-10-39-27-PM-4.jpg",
            "https://i.ibb.co/Tx76B784/Whats-App-Image-2026-02-13-at-10-39-39-PM.jpg",
            "https://i.ibb.co/0yKsnP99/Whats-App-Image-2026-02-13-at-10-39-27-PM-2.jpg",
            "https://i.ibb.co/PsYn3pn0/Whats-App-Image-2026-02-13-at-10-39-27-PM.jpg",
            "https://i.ibb.co/8g6qCCV1/Whats-App-Image-2026-02-13-at-10-39-27-PM-1.jpg"
        ],
        objectives: [
            "Develop an AI-powered content creation tool for Facebook posts.",
            "Implement scheduling features for optimal post timing.",
            "Create an intuitive user interface for easy content input and management.",
            "Integrate with Facebook API for seamless post scheduling and management."
        ],
        tags: ["AI Content Creation", "Social Media Management", "Scheduling", "Facebook", "SAAS"],
        slug: "facebook-postsiva",
        icon: React.createElement(MessageSquare, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "5/5", icon: Activity },
            { label: "Posts Created", value: "1M+", icon: MessageSquare },
            { label: "Status", value: "Live", icon: Zap }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "FastAPI" },
            { name: "AI", value: "Gemini Models, GPT-4" },
            { name: "Database", value: "MySQL, Redis" },
            { name: "Deployment", value: "Vercel, CI/CD" }
        ],
        liveUrl: "https://postsiva.facebook.com",
        client: "LinkedIn Client (United States, New York)",
        domain: "SAAS Platform for Social Media Management",
        duration: "May 28, 2025 - Feb 9, 2026",
        feedback: {
            content: "Great freelancer! Always a pleasure working with him",
            author: "LinkedIn Client"
        }
    },
    {
        title: "Social Content AI Automation",
        category: "AI Content Automation",
        isFeatured: false,
        description: "Built an AI-powered content automation platform for LinkedIn and X (Twitter) that helps users generate posts, analyze competitors, and create lead magnets from a single dashboard.",
        longDescription: "This project focused on building a complete content automation system for professionals growing their presence on LinkedIn and X (Twitter). The platform combines a SaaS dashboard with backend automations so users can research competitors, generate high-quality posts, and create supporting lead magnets in one workflow. Built the frontend experience in Next.js and TypeScript, developed n8n automations for competitor analysis, and integrated AI-driven content generation to produce content tailored to each user's niche, positioning, and audience.",
        image: "/project1.png",
        gallery: [
            "/project1.png"
        ],
        objectives: [
            "Built a full SaaS dashboard with Next.js and TypeScript for managing posts, tracking competitors, analyzing content performance, and generating new ideas.",
            "Developed an n8n automation workflow to identify high-performing content formats, hooks, and engagement patterns through competitor analysis.",
            "Implemented AI-powered generation for LinkedIn posts and X threads tailored to the user's positioning, niche, and target audience.",
            "Automated lead magnet creation for assets such as checklists, frameworks, guides, and templates aligned with each content topic."
        ],
        tags: ["AI Content Creation", "Social Media Management", "Scheduling", "LinkedIn", "X (Twitter)", "Competitor Analysis", "Image generation", "Content Enhancement", "AI"],
        slug: "social-ai-automation",
        icon: React.createElement(Code2, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "5/5", icon: Activity },
            { label: "Platforms", value: "LinkedIn + X", icon: Globe },
            { label: "Automation", value: "AI-driven", icon: Zap }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, TypeScript" },
            { name: "Automation", value: "n8n" },
            { name: "AI", value: "Content Generation" },
            { name: "Integrations", value: "LinkedIn API, X API" }
        ],
        liveUrl: "https://content-posting-bice.vercel.app/",
        client: "Private Client (France, Paris)",
        domain: "AI Powered Linkedin and X (Twitter) Content Automation System",
        duration: "March 15, 2025 - April 30, 2025",
        feedback: {
            content: "Excellent work! The funnel and community setup exceeded our expectations, and the automations have significantly improved our marketing efforts. Highly recommend!",
            author: "Private Client"
        }
    },
    {
        title: "Gohighlevel Funnel & Automations",
        category: "Gohighlevel Platform for Marketing Automation",
        isFeatured: false,
        description: "This project involved setting up a comprehensive marketing funnel and community on the Gohighlevel platform for a private client. The goal was to create an effective lead generation system and build a thriving community around the client's brand.",
        longDescription: "The project began with a thorough analysis of the client's business goals and target audience to design an effective marketing funnel. The funnel was structured to capture leads through various touchpoints, including landing pages, forms, and email campaigns. The community platform was set up to foster engagement and build a loyal customer base, featuring discussion forums, resource sharing, and exclusive content. Automations were implemented to streamline lead nurturing, follow-ups, and customer interactions, resulting in improved marketing efficiency and enhanced customer experience.",
        image: "/thumbnails/listcatcher_yellow.png",
        gallery: [
            "/thumbnails/listcatcher_yellow.png",
            "https://i.ibb.co/chKhZ2Cr/screencapture-listcatcher-2026-02-17-22-48-21.png",
            "https://i.ibb.co/mVXHL25Z/screencapture-listcatcher-book-appointment-2026-02-17-22-48-52.png"
        ],
        objectives: [
            "Design and implement a marketing funnel using Gohighlevel to capture and nurture leads.",
            "Set up a community platform to engage with customers and build brand loyalty.",
            "Create automations to streamline marketing processes and improve efficiency.",
            "Integrate the funnel and community with existing marketing tools for seamless operation."
        ],
        tags: ["Gohighlevel", "Marketing Automation", "Funnel Setup", "Community Building", "Lead Generation"],
        slug: "gohighlevel",
        icon: React.createElement(Layers, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "4.5/5", icon: Activity },
            { label: "Focus", value: "Funnels + Community", icon: Users },
            { label: "Automation", value: "End-to-end", icon: Zap }
        ],
        techStack: [
            { name: "Platform", value: "Gohighlevel" },
            { name: "Specialization", value: "Marketing Automation" },
            { name: "Build", value: "Funnels, Community, Lead Flows" }
        ],
        liveUrl: "https://listcatcher.com",
        client: "Private Client (United States, California)",
        domain: "Gohighlevel Platform for Marketing Automation",
        duration: "March 15, 2025 - April 30, 2025",
        feedback: {
            content: "Excellent work! The funnel and community setup exceeded our expectations, and the automations have significantly improved our marketing efforts. Highly recommend!",
            author: "Private Client"
        }
    },
    {
        title: "LinkedIn Automation Platform - AI Post Generation",
        category: "SaaS",
        isFeatured: true,
        description: "Frontend platform for generating high-quality LinkedIn post drafts with AI-powered content creation, hashtag suggestions, and website link previews.",
        longDescription: "The LinkedIn Automation Platform is a streamlined frontend application designed to help professionals and businesses create engaging LinkedIn content effortlessly. The platform leverages advanced AI algorithms to generate compelling post drafts tailored to your industry, audience, and objectives. Users can instantly see suggested relevant hashtags for better reach and engagement, preview how their website links will appear in posts, and refine content before publishing. The clean, intuitive interface makes it easy for anyone to create professional, engaging LinkedIn content that drives visibility and engagement.",
        image: "/linkedin/hero-section.png",
        gallery: [
            "/linkedin/hero-section.png"
        ],
        objectives: [
            "Generate AI-powered engaging post drafts tailored to user preferences and industry",
            "Provide relevant hashtag suggestions to maximize post reach and engagement",
            "Enable website link preview functionality for better post visualization",
            "Create an intuitive frontend interface for seamless content creation workflow"
        ],
        tags: ["Frontend", "AI", "LinkedIn", "SaaS", "Featured", "Automation"],
        slug: "linkedin-automation",
        icon: React.createElement(Code2, { className: "w-5 h-5" }),
        stats: [
            { label: "Posts Generated", value: "50K+", icon: MessageSquare },
            { label: "Active Users", value: "5K+", icon: Users },
            { label: "Engagement", value: "+45%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "FastAPI, OpenAI Agent SDK" },
            { name: "AI", value: "Gemini Models, GPT-4" },
            { name: "Database", value: "MySQL, Redis" },
            { name: "Deployment", value: "Docker, CI/CD, Hostinger" }
        ],
        liveUrl: "https://linkedin-ui-lemon.vercel.app/",
        domain: "Social Media Automation Platform",
        duration: "Jan 11 - Feb 16, 2026"
    },
    {
        title: "FronixTech - Virtual Worlds & Metaverse Development Platform",
        category: "Metaverse",
        isFeatured: true,
        description: "Comprehensive platform for building immersive virtual environments, metaverse ecosystems, and VR/AR experiences that transform brands into interactive digital realities.",
        longDescription: "FronixTech is a cutting-edge platform that engineers full virtual ecosystems, transforming traditional business concepts into living, interactive digital realities. The platform specializes in creating custom 3D spaces for global events, immersive brand showrooms, and scalable metaverse ecosystems. With expertise in VR/AR experience creation, FronixTech enables businesses to transcend geographical limits and physical constraints, building communities inside branded digital worlds. The platform has successfully created over 30,000 digital worlds with an impressive 82% retention rate, serving 120+ active project partners.",
        image: "/fronix/Thumbnail.png",
        gallery: ["/fronix/Thumbnail.png"],
        objectives: [
            "Design and develop custom 3D virtual environments for global events and brand experiences",
            "Build scalable metaverse ecosystems that position brands in tomorrow's digital economy",
            "Create interactive VR/AR applications for marketing, training, and user engagement",
            "Deliver immersive experiences with high user satisfaction and retention rates"
        ],
        tags: ["Metaverse", "VR/AR", "3D", "Featured", "SaaS", "Automation"],
        slug: "fronixtech-metaverse",
        icon: React.createElement(Globe, { className: "w-5 h-5" }),
        stats: [
            { label: "Worlds Created", value: "30K+", icon: Globe },
            { label: "Partners", value: "120+", icon: Users },
            { label: "Retention", value: "82%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS, Three.js" },
            { name: "Backend", value: "FastAPI, Node.js" },
            { name: "3D/VR", value: "Unity, Unreal Engine, WebXR" },
            { name: "AI", value: "Gemini Models" },
            { name: "Deployment", value: "Docker, CI/CD, Hostinger" }
        ],
        liveUrl: "https://fronix-tech.vercel.app/",
        domain: "Virtual Reality & Metaverse Development",
        duration: "Feb 1 - Feb 16, 2026"
    }
];
