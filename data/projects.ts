import React from 'react';
import { Layers, Code2, Globe, MessageSquare, Monitor, Zap, Shield, Layout, Smartphone, Users, Activity } from 'lucide-react';

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
        title: "Facebook PostSiva - AI-Powered Content Creation and Scheduling",
        category: "SaaS",
        isFeatured: true,
        description: "AI-powered platform enabling users to create and schedule Facebook page posts with intelligent content generation, AI enhancement, and automated scheduling features.",
        longDescription: "Facebook PostSiva is a comprehensive AI-powered platform designed to revolutionize social media management for Facebook pages. The platform leverages advanced AI algorithms to generate engaging content based on user preferences, current trends, and audience behavior patterns. Users can create content from scratch, enhance existing posts with AI suggestions, generate custom images, and schedule posts for optimal engagement times. The intuitive interface seamlessly integrates with Facebook API, providing a powerful all-in-one solution for content creators, marketers, and businesses looking to maximize their social media presence and engagement rates.",
        image: "/facebook/Thumbnail.jpeg",
        gallery: [
            {
                type: 'youtube',
                videoId: "noEVR5r4YMs",
                poster: "/facebook/Thumbnail.jpeg"
            },
            "/facebook/profile.jpeg",
            "/facebook/create-post.jpeg",
            "/facebook/schedule.jpeg",
            "/facebook/storage.jpeg"
        ],
        objectives: [
            "Develop an AI-powered content creation tool for Facebook posts with multiple generation modes",
            "Implement intelligent scheduling features for optimal post timing and engagement",
            "Create an intuitive user interface for easy content input, management, and calendar visualization",
            "Integrate seamlessly with Facebook API for automated post scheduling and performance tracking"
        ],
        tags: ["SAAS", "Featured", "AI", "Social Media"],
        slug: "facebook-postsiva",
        icon: React.createElement(MessageSquare, { className: "w-5 h-5" }),
        stats: [
            { label: "Users", value: "10k+", icon: Users },
            { label: "Posts", value: "1M+", icon: MessageSquare },
            { label: "Uptime", value: "99.9%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "FastAPI, OpenAI Agent SDK" },
            { name: "AI/ML", value: "Gemini Models, GPT-4" },
            { name: "Database", value: "MySQL, Redis" },
            { name: "DevOps", value: "Docker, CI/CD, Hostinger" }
        ],
        liveUrl: "https://facebook.postsiva.com/",
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
        longDescription: "This project focused on building a complete content automation system for professionals growing their presence on LinkedIn and X (Twitter). The platform combines a SaaS dashboard with backend automations so users can research competitors, generate high-quality posts, and create supporting lead magnets in one workflow. I built the frontend experience in Next.js and TypeScript, developed n8n automations for competitor analysis, and integrated AI-driven content generation to produce content tailored to each user's niche, positioning, and audience.",
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
        tags: [
            "AI Content Creation",
            "Social Media Management",
            "Scheduling",
            "LinkedIn",
            "X (Twitter)",
            "Competitor Analysis",
            "Image Generation",
            "Content Enhancement"
        ],
        slug: "social-ai-automation",
        icon: React.createElement(Code2, { className: "w-5 h-5" }),
        stats: [
            { label: "Rating", value: "5/5", icon: Activity },
            { label: "Channels", value: "LinkedIn + X", icon: Globe },
            { label: "Automation", value: "AI-driven", icon: Zap }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, TypeScript" },
            { name: "Automation", value: "n8n" },
            { name: "AI", value: "Content Generation" },
            { name: "Integrations", value: "LinkedIn API, X (Twitter) API" }
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
        description: "This project involved setting up a comprehensive marketing funnel and community on the Gohighlevel platform for a private client. The goal was to create an effective lead generation system and build a thriving community around the client's brand. The project included designing and implementing various automations to streamline marketing efforts and enhance customer engagement.",
        longDescription: "The project began with a thorough analysis of the client's business goals and target audience to design an effective marketing funnel. The funnel was structured to capture leads through various touchpoints, including landing pages, forms, and email campaigns. The community platform was set up to foster engagement and build a loyal customer base, featuring discussion forums, resource sharing, and exclusive content. Automations were implemented to streamline lead nurturing, follow-ups, and customer interactions, resulting in improved marketing efficiency and enhanced customer experience.",
        image: "https://i.ibb.co/chKhZ2Cr/screencapture-listcatcher-2026-02-17-22-48-21.png",
        gallery: [
            "https://i.ibb.co/chKhZ2Cr/screencapture-listcatcher-2026-02-17-22-48-21.png",
            "https://i.ibb.co/mVXHL25Z/screencapture-listcatcher-book-appointment-2026-02-17-22-48-52.png"
        ],
        objectives: [
            "Design and implement a marketing funnel using Gohighlevel to capture and nurture leads.",
            "Set up a community platform to engage with customers and build brand loyalty.",
            "Create automations to streamline marketing processes and improve efficiency.",
            "Integrate the funnel and community with existing marketing tools for seamless operation."
        ],
        tags: [
            "Gohighlevel",
            "Marketing Automation",
            "Funnel Setup",
            "Community Building",
            "Lead Generation"
        ],
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
        domain: "Private Clients",
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
        longDescription: "The LinkedIn Automation Platform is a streamlined frontend application designed to help professionals and businesses create engaging LinkedIn content effortlessly. The platform leverages advanced AI algorithms to generate compelling post drafts tailored to your industry, audience, and objectives. Users can instantly see suggested relevant hashtags for better reach and engagement, preview how their website links will appear in posts, and refine content before publishing. While this is a frontend-only platform without backend automation capabilities, it significantly reduces the time spent crafting the perfect LinkedIn post by providing intelligent suggestions and previews. The clean, intuitive interface makes it easy for anyone to create professional, engaging LinkedIn content that drives visibility and engagement.",
        image: "/linkedin/hero-section.png",
        gallery: [
            {
                type: 'video',
                src: "/linkedin/linkedin-video.mp4",
                poster: "/linkedin/hero-section.png"
            },
            "/linkedin/profile.png",
            "/linkedin/create-post.png",
            "/linkedin/schedule.png",
            "/linkedin/storage.png"
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
            { label: "Posts", value: "50K+", icon: MessageSquare },
            { label: "Users", value: "5K+", icon: Users },
            { label: "Engagement", value: "+45%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "FastAPI, OpenAI Agent SDK" },
            { name: "AI", value: "Gemini Models, GPT-4" },
            { name: "Database", value: "MySQL, Redis" },
            { name: "DevOps", value: "Docker, CI/CD, Hostinger" }
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
        longDescription: "FronixTech is a cutting-edge platform that engineers full virtual ecosystems, transforming traditional business concepts into living, interactive digital realities. The platform specializes in creating custom 3D spaces for global events, immersive brand showrooms, and scalable metaverse ecosystems. With expertise in VR/AR experience creation, FronixTech enables businesses to transcend geographical limits and physical constraints, building communities inside branded digital worlds. The platform has successfully created over 30,000 digital worlds with an impressive 82% retention rate, serving 120+ active project partners. FronixTech represents the infrastructure for the next generation of business, where events have no geographical limits, showrooms have no physical constraints, and communities form inside immersive branded experiences.",
        image: "/fronix/Thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/fronix/fronix-video.mp4",
                poster: "/fronix/Thumbnail.png"
            },
            "/fronix/Dashboard.png",
            "/fronix/Analytic.png",
            "/fronix/client-portfolio.png",
            "/fronix/team.png",
            "/fronix/setting.png",
        ],
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
            { label: "Worlds", value: "30K+", icon: Globe },
            { label: "Partners", value: "120+", icon: Users },
            { label: "Retention", value: "82%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS, Three.js" },
            { name: "Backend", value: "FastAPI, Node.js" },
            { name: "3D/VR", value: "Unity, Unreal Engine, WebXR" },
            { name: "AI", value: "Gemini Models, Custom AI" },
            { name: "DevOps", value: "Docker, CI/CD, Hostinger" }
        ],
        liveUrl: "https://fronix-tech.vercel.app/",
        domain: "Virtual Reality & Metaverse Development",
        duration: "Feb 1 - Feb 16, 2026"
    },
    {
        title: "Finescope – The Future of Smart Financial Management",
        category: "FinTech",
        isFeatured: true,
        description: "A modern FinTech SaaS platform — real-time analytics, AI-powered insights, advanced reporting, and scalable financial intelligence for startups and next-gen businesses.",
        longDescription: `The future of smart financial management is Finescope. This platform is live and built to give businesses real-time financial intelligence and powerful insights without the complications. Finescope helps startups and teams easily see their financial health, follow growth, find opportunities, and make better decisions fast.

With Finescope you get a clean dashboard experience. There are no distractions. You get clarity to track revenue, spending, and performance as it happens. Finescope is more than just a tool—it’s a new standard for financial intelligence and analytics, driven by smart technology and simple design.

Choose Finescope to manage your business with confidence and unlock smarter ways to grow. This is financial intelligence made accessible for everyone.`, 
        image: "/finescope/first-thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/finescope/finescope-landing-page.mp4",
                poster: "/finescope/first-thumbnail.png"
            },
            {
                type: 'video',
                src: "/finescope/dashboard-finescope.mp4",
                poster: "/finescope/second-thumbnail.png"
            },
            "/finescope/first-thumbnail.png",
            "/finescope/second-thumbnail.png",
        ],
        objectives: [
            "Analyze financial performance in real-time",
            "Track revenue and spending instantly",
            "Monitor growth trends with precision",
            "Generate advanced financial reports effortlessly",
            "Make data-driven strategic decisions",
            "Unlock AI-powered financial intelligence for businesses"
        ],
        tags: [
            "Finescope", "FinTech", "SaaS", "Startup", "BusinessGrowth",
            "FinancialManagement", "DashboardDesign", "DataAnalytics",
            "Entrepreneurship", "AI", "TechStartup", "DigitalTransformation",
            "ProductDesign", "WebDevelopment", "Innovation", "Featured"
        ],
        slug: "finescope-dashboard",
        icon: React.createElement(Layout, { className: "w-5 h-5" }),
        stats: [
            { label: "Live Users", value: "Businesses Globally", icon: Users },
            { label: "AI Reports", value: "Advanced", icon: Zap },
            { label: "Performance", value: "Real-time", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS, Custom Dashboard UI" },
            { name: "Backend", value: "Node.js, AI APIs" },
            { name: "Analytics", value: "Real-Time Data Engines" },
            { name: "Deployment", value: "Vercel, CI/CD" },
            { name: "AI", value: "Predictive Analytics, Insights" }
        ],
        liveUrl: "https://fine-scope.vercel.app/",
        domain: "Financial Intelligence & SaaS Dashboard",
        duration: "Live — Feb 2026"
    },
    {
        title: "ShipX – Smart Shipping Made Simple",
        category: "Logistics & SaaS",
        isFeatured: true,
        description: "Revolutionary logistics platform: real-time tracking, smart analytics, cost-optimized delivery, and a seamless shipping dashboard experience for businesses of all sizes.",
        longDescription: `ShipX makes smart shipping simple. Our modern logistics platform gives you everything you need to track shipments in real time, manage deliveries efficiently, and keep your business in complete control.

Get live visibility and powerful analytics for all your shipping operations in one easy-to-use dashboard. ShipX helps you optimize routes for cost and speed, manage all your shipments, and access 24/7 support—whether you’re a small business or scaling up fast.

Why choose ShipX?

• Real-time shipment tracking  
• Smart analytics and dashboards  
• Cost-saving, optimized deliveries  
• Easy shipment management  
• Modern, clean design  
• Built for every scale`,
        image: "/shipx/first-thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/shipx/shipx.mp4",
                poster: "/shipx/first-thumbnail.png"
            },
            {
                type: 'video',
                src: "/shipx/dashboar-shipx.mp4",
                poster: "/shipx/second-thumbnail.png"
            },
            "/shipx/first-thumbnail.png",
            "/shipx/second-thumbnail.png",
        ],
        objectives: [
            "Enable real-time shipment tracking and notifications",
            "Provide businesses with smart logistics analytics",
            "Optimize delivery routes for cost efficiency",
            "Offer a seamless shipping dashboard and management tools",
            "Guarantee on-time deliveries and 24/7 support",
            "Empower businesses of all sizes to scale shipping operations"
        ],
        tags: [
            "ShipX", "Logistics", "SaaS", "Shipping", "SupplyChain",
            "RealTimeTracking", "Dashboard", "BusinessTools",
            "Ecommerce", "Analytics", "ModernSaaS", "ShippingPlatform",
            "Operations", "DeliveryOptimization", "Featured"
        ],
        slug: "shipx-smart-shipping",
        icon: React.createElement(Layout, { className: "w-5 h-5" }),
        stats: [
            { label: "Shipments Tracked", value: "Thousands+", icon: Users },
            { label: "Analytics Dashboard", value: "Live", icon: Zap },
            { label: "Performance", value: "Real-time", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS, Modern Dashboard UI" },
            { name: "Backend", value: "Node.js, Smart APIs" },
            { name: "Analytics", value: "Real-Time Data & Dashboards" },
            { name: "Deployment", value: "Vercel, CI/CD" }
        ],
        liveUrl: "https://shipx-jet.vercel.app/",
        domain: "Logistics & Smart Shipping SaaS Platform",
        duration: "Live — Feb 2026"
    },
    {
        title: "NexaFlow - Smart Analytics SaaS Platform",
        category: "SaaS",
        isFeatured: true,
        description: "AI-powered analytics platform providing real-time insights, customizable dashboards, and automated visualizations for smarter business decisions.",
        longDescription: "NexaFlow is an advanced Smart Analytics SaaS platform designed to empower businesses with actionable insights through intelligent data analysis and real-time visualization. By leveraging state-of-the-art AI algorithms, NexaFlow transforms complex data streams into intuitive, interactive dashboards, enabling organizations to monitor performance, identify trends, and uncover growth opportunities with ease. The platform features automated reporting, predictive analytics, and fully adaptive widgets, all within a responsive, elegant interface. Whether you're optimizing operations or driving strategic growth, NexaFlow streamlines analytics workflows and delivers clear, data-driven outcomes.",
        image: "/smart-analytic/second-thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/smart-analytic/video1.mp4",
                poster: "/smart-analytic/first-thumbnail.png"
            },
            {
                type: 'video',
                src: "/smart-analytic/video2.mp4",
                poster: "/smart-analytic/second-thumbnail.png"
            },
            "/smart-analytic/nexa-flow-dashboard.png",
            "/smart-analytic/nexa-flow-project.png",
            "/smart-analytic/second-thumbnail.png"
        ],
        objectives: [
            "Deliver real-time analytics with interactive, customizable dashboards",
            "Empower organizations with AI-powered insights and predictive data analysis",
            "Automate reporting and streamline data-driven decision making",
            "Provide enterprise-grade scalability and seamless, responsive UX"
        ],
        tags: ["SaaS", "Analytics", "AI", "Dashboard", "Featured"],
        slug: "nexaflow-smart-analytics",
        icon: React.createElement(Monitor, { className: "w-5 h-5" }),
        stats: [
            { label: "Clients", value: "50+", icon: Users },
            { label: "Dashboards", value: "20+", icon: Layout },
            { label: "AI Insights", value: "Real-time", icon: Zap }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "Node.js, AI Services" },
            { name: "Deployment", value: "Vercel" }
        ],
        liveUrl: "https://nexa-flow-flame.vercel.app/",
        domain: "Smart Analytics SaaS",
        duration: "Completed - Feb 2026"
    },
    {
        title: "ClariNova AI — Build Faster. Scale Smarter",
        category: "SaaS",
        isFeatured: true,
        description: "ClariNova AI supercharges development: streamline workflows, deploy AI features rapidly, and scale smarter with an all-in-one, robust SaaS platform.",
        longDescription: "ClariNova AI empowers teams and businesses to accelerate software development cycles by integrating powerful AI-driven tools, automation, and scalable infrastructure. The platform enables rapid prototyping and deployment of custom AI features, automates repetitive workflows, and delivers actionable insights for smarter product scaling and management. With a modern UI, seamless integrations, and robust security, ClariNova AI gives organizations the flexibility and intelligence they need to build, launch, and grow innovative products faster in today’s competitive digital landscape.",
        image: "/clarinova/first-thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/clarinova/video1.mp4",
                poster: "/clarinova/first-thumbnail.png"
            },
            {
                type: 'video',
                src: "/clarinova/video2.mp4",
                poster: "/clarinova/second-thumbnail.png"
            },
            "/clarinova/first-thumbnail.png",
            "/clarinova/second-thumbnail.png"
        ],
        objectives: [
            "Accelerate development and deployment cycles with integrated AI tooling",
            "Streamline team and business workflows for improved productivity",
            "Enable rapid integration of custom AI features and automation",
            "Facilitate smart scaling with operational insights and robust infrastructure"
        ],
        tags: ["AI", "SaaS", "Automation", "Productivity", "Platform", "Featured"],
        slug: "clarinova-ai-build-faster-scale-smarter",
        icon: React.createElement(Zap, { className: "w-5 h-5" }),
        stats: [
            { label: "Users Supported", value: "10k+", icon: Users },
            { label: "AI Workflows", value: "30+", icon: Layers },
            { label: "Integrations", value: "50+", icon: Code2 }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "Node.js, Python, AI Services" },
            { name: "Deployment", value: "Vercel" }
        ],
        liveUrl: "https://clarinova-ai.vercel.app/",
        domain: "AI-Powered SaaS Platform",
        duration: "Completed - Feb 2026"
    },
    {
        title: "Your Gateway to the Crypto World — Chainex",
        category: "Crypto Exchange",
        isFeatured: true,
        description: "Best-in-class crypto platform for seamless trading — Chainex connects you to the global world of digital assets through a secure, modern, and user-friendly experience.",
        longDescription: "Chainex delivers a cutting-edge experience for cryptocurrency users, from beginners to experts. With a sleek interface, powerful trading dashboard, and instant accessibility, Chainex redefines what it means to interact with digital assets. Enjoy real-time market insights, secure transactions, and intuitive tools to manage your portfolio with confidence. Chainex's platform ensures high performance and reliability, complete with robust authentication and a rich set of features—making it the ultimate place to explore, invest, and grow in the crypto world. All this, wrapped in beautiful design and fluid navigation, empowers you to unlock your crypto journey with ease and trust.",
        image: "/chainex/thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/chainex/chainex.mp4",
                poster: "/chainex/thumbnail.png"
            },
            "/chainex/dashboard.png",
            "/chainex/hero.png",
            "/chainex/1.png"
        ],
        objectives: [
            "Deliver a secure, intuitive gateway for trading and managing cryptocurrencies",
            "Create a seamless onboarding experience for both new and advanced users",
            "Present clear market information and portfolio management in a beautiful UI",
            "Enable effortless transactions, strong security, and robust performance"
        ],
        tags: ["Crypto", "Exchange", "Platform", "Featured"],
        slug: "chainex-crypto-platform",
        icon: React.createElement(Code2, { className: "w-5 h-5" }),
        stats: [
            { label: "Active Users", value: "5K+", icon: Users },
            { label: "Listed Tokens", value: "50+", icon: Layout },
            { label: "Security", value: "Best-in-class", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "Node.js, WebSockets" },
            { name: "Security", value: "JWT, 2FA" },
            { name: "Deployment", value: "Vercel" }
        ],
        liveUrl: "https://chainex-xi.vercel.app/",
        domain: "Crypto Exchange Platform",
        duration: "Completed - Feb 2026"
    },
    {
        title: "Developer Learning Platform",
        category: "EdTech",
        isFeatured: true,
        description: "Modern developer learning platform with authentication system, clean UI/UX, and AI-powered learning experiences for real-world development workflows.",
        longDescription: "One Projects is an innovative Developer Learning Platform designed for modern developers seeking to enhance their skills through practical, real-world development workflows. The platform focuses on clean and intuitive UI/UX, scalable and maintainable architecture, and AI-powered learning experiences that adapt to individual learning styles and goals. Currently featuring a fully functional authentication system, the platform represents the first major milestone in a comprehensive learning ecosystem. Built in public with transparency and continuous improvement, One Projects demonstrates best practices in modern web development, including Next.js app router patterns, FastAPI backend architecture, and responsive design principles. The platform aims to provide developers with hands-on learning experiences, project-based tutorials, and AI-assisted code reviews and suggestions. This is more than just a learning platform—it's a community-driven initiative to help developers grow through consistent building, sharing, and collaborative learning.",
        image: "/platform/Thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/platform/video.mp4",
                poster: "/platform/Thumbnail.png"
            },
            "/platform/4.png",
            "/platform/2.png",
            "/platform/1.png",
            "/platform/3.png"
        ],
        objectives: [
            "Build a platform focused on clean, intuitive UI/UX for optimal learning experience",
            "Implement real-world development workflows and best practices in platform architecture",
            "Create scalable and maintainable codebase demonstrating modern development patterns",
            "Integrate AI-powered learning experiences to personalize and enhance skill development"
        ],
        tags: ["EdTech", "Platform", "AI", "Featured"],
        slug: "one-projects-learning",
        icon: React.createElement(Code2, { className: "w-5 h-5" }),
        stats: [
            { label: "Users", value: "1K+", icon: Users },
            { label: "Courses", value: "15+", icon: Layout },
            { label: "Completion", value: "78%", icon: Activity }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Backend", value: "FastAPI" },
            { name: "AI", value: "Gemini Models, OpenAI Agent SDK" },
            { name: "Auth", value: "NextAuth, JWT" },
            { name: "DevOps", value: "Docker, CI/CD, Hostinger" }
        ],
        liveUrl: "https://dev-learning-platform.vercel.app/",
        domain: "Educational Technology & Developer Learning",
        duration: "Ongoing Development - Started Dec 2025"
    },
    {
        title: "FinanceFlow - Financial Intelligence Dashboard",
        category: "FinTech",
        isFeatured: true,
        description: "Premium dark-themed financial analytics dashboard with clean KPIs, interactive charts, and enterprise-ready layout for professional financial products.",
        longDescription: "FinanceFlow is a sophisticated financial analytics dashboard, purpose-built to deliver premium financial intelligence and an elegant user experience. The platform features a sleek dark UI with a finance-centric ethos, making complex data both accessible and visually appealing. Users benefit from crisp KPI cards (balance, income, expenses, cash flow), interactive charts, and clear category views powered by modern frontend technologies. Emphasis is placed on clarity, usability, and a strong visual hierarchy to empower financial professionals with at-a-glance insights. The enterprise-ready layout is fully responsive and crafted for demanding fintech use cases, demonstrating just how effective design elevates trust and product value.",
        image: "/finance/Thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/finance/finance-video.mp4",
                poster: "/finance/Thumbnail.png"
            },
            "/finance/Dashoard.png",
            "/finance/Setting.png",
            "/finance/Transaction.png",
            "/finance/Budget.png",
        ],
        objectives: [
            "Design a premium dark-themed dashboard UI optimized for financial data visualization",
            "Implement clear KPI displays for balance, income, expenses, and cash flow metrics",
            "Create interactive charts and category breakdowns for comprehensive financial analysis",
            "Deliver an enterprise-ready, fully responsive layout for professional financial products"
        ],
        tags: ["FinTech", "Dashboard", "UI/UX", "Featured"],
        slug: "financeflow-dashboard",
        icon: React.createElement(Layout, { className: "w-5 h-5" }),
        stats: [
            { label: "KPIs", value: "15+", icon: Activity },
            { label: "Charts", value: "8+", icon: Layout },
            { label: "Performance", value: "A+", icon: Zap }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Charts", value: "Chart.js, Recharts" },
            { name: "UI", value: "Custom Design System" },
            { name: "Deployment", value: "Vercel, CI/CD" }
        ],
        liveUrl: "https://finance-flow-ruby.vercel.app/",
        domain: "Financial Analytics & Dashboard UI",
        duration: "Completed - Feb 2026"
    },
    {
        title: "UI Design Portfolio - Modern Component Showcase",
        category: "UI/UX",
        isFeatured: true,
        description: "Clean and modern UI portfolio showcasing design sense, layout skills, and component structure with pixel-perfect layouts and real-world product aesthetics.",
        longDescription: "This UI Design Portfolio is a carefully crafted showcase project created to demonstrate professional design capabilities, modern layout techniques, and component-based architecture. The project emphasizes clean layouts, modern color combinations, user-friendly design principles, and responsive structure that adapts seamlessly across all devices. Every component is designed with attention to detail, featuring pixel-perfect layouts that reflect real-world product quality and usability standards. The portfolio showcases expertise in UI/UX design principles, modern web UI concepts, and the ability to create professional landing pages, dashboards, and SaaS interfaces. The project demonstrates that good UI design is not just about visual appeal, but about clarity, usability, and creating intuitive user experiences. This portfolio serves as a testament to the ability to design professional, production-ready interfaces for modern web applications.",
        image: "/portfolio-image/Thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/portfolio-image/video.mp4",
                poster: "/portfolio-image/Thumbnail.png"
            },
            "/portfolio-image/shadow (1).png",
            "/portfolio-image/shadow (2).png"
        ],
        objectives: [
            "Showcase modern UI/UX design principles and component-based architecture",
            "Demonstrate clean layouts with modern color combinations and typography",
            "Create pixel-perfect, responsive designs that work across all devices",
            "Highlight ability to design professional landing pages, dashboards, and SaaS UI"
        ],
        tags: ["UI/UX", "Design", "Portfolio", "Featured"],
        slug: "ui-design-portfolio",
        icon: React.createElement(Layout, { className: "w-5 h-5" }),
        stats: [
            { label: "Components", value: "25+", icon: Layout },
            { label: "Pages", value: "12+", icon: Globe },
            { label: "Responsive", value: "100%", icon: Smartphone }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Design", value: "Figma, Custom Components" },
            { name: "Deployment", value: "Vercel" }
        ],
        domain: "UI/UX Design & Portfolio",
        duration: "Completed - Dec 2025"
    },
    {
        title: "Crypto Platform Landing Page - UI Concept",
        category: "FinTech",
        isFeatured: false,
        description: "Clean and modern landing page UI for crypto-based platform showcasing clarity, trust, and smooth layout optimized for crypto-focused audiences.",
        longDescription: "This Crypto Platform Landing Page is a meticulously designed UI/UX showcase created to demonstrate expertise in fintech and crypto interface design. The landing page features a modern and minimal design philosophy with a clear value proposition that immediately communicates the platform's benefits to visitors. The smooth layout is specifically optimized for crypto-focused audiences, incorporating visual elements that build trust and credibility in the cryptocurrency space. Every design decision prioritizes clarity and user trust, essential elements for financial and crypto platforms where users need confidence in the service. The clean interface uses strategic whitespace, modern typography, and a carefully selected color palette to create a professional, trustworthy appearance. While this is a UI concept rather than a live product, it demonstrates the ability to create compelling landing pages for fintech, crypto, and SaaS products that convert visitors into users through superior design and user experience.",
        image: "/crypto/Thumbnail.png",
        gallery: [
            {
                type: 'video',
                src: "/crypto/video.mp4",
                poster: "/crypto/Thumbnail.png"
            }
        ],
        objectives: [
            "Design modern and minimal landing page optimized for crypto audiences",
            "Create clear value proposition that builds trust and credibility",
            "Implement smooth layout with strategic use of whitespace and typography",
            "Showcase expertise in fintech and crypto UI/UX design concepts"
        ],
        tags: ["Crypto", "Landing Page", "UI/UX", "FinTech"],
        slug: "crypto-landing-page",
        icon: React.createElement(Globe, { className: "w-5 h-5" }),
        stats: [
            { label: "Sections", value: "8+", icon: Layout },
            { label: "CTAs", value: "5+", icon: Zap },
            { label: "Mobile", value: "100%", icon: Smartphone }
        ],
        techStack: [
            { name: "Frontend", value: "Next.js, Tailwind CSS" },
            { name: "Animations", value: "Framer Motion" },
            { name: "Deployment", value: "Vercel" }
        ],
        liveUrl: "https://crypto-coin-puce-pi.vercel.app/",
        domain: "Cryptocurrency & FinTech UI Design",
        duration: "UI Concept - Jan 2026"
    }
];
