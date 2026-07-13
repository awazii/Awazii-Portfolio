export interface SkillCategory {
    category: string;
    items: string[];
}
export const skillsData: SkillCategory[] = [
    {
        category: "Frontend Architecture",
        items: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Framer Motion"
        ]
    },
    {
        category: "State & Logic",
        items: [
            "Redux Toolkit",
            "Redux Persist",
            "React Router",
            "React Hook Form"
        ]
    },
    {
        category: "Tools & Ecosystem",
        items: [
            "Git",
            "GitHub",
            "VS Code",
            "Vite",
            "npm",
        ]
    },
    {
        category: "Professional Skills",
        items: [
            "Complex Problem Solving",
            "Logic Architecture",
            "Iterative Development",
            "Minimalist Design Approach",
            "Client Communication"
        ]
    }
];

export interface ProjectMetadata {
    status: string;
    responsiveness: "Fully Responsive" | "Desktop-First" | "Mobile Improvements Planned";
    limitations?: string;
    futureImprovements?: string[];
    lessonsLearned?: string;
}
interface Challenge {
    problem: string;
    solution: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    pitch: string;
    overview: string;
    logicArchitecture: string;
    techStack: string[];
    metadata: ProjectMetadata;
    githubUrl: string;
    demoUrl: string;
    challenges?: Challenge[];
    gallery?: string[];
    features?: string[]; 
    logoUrl?: string;
}

export const portfolioData: ProjectItem[] = [
    {
    id: "splitly",
    title: "Splitly",
    pitch: "Logic-driven expense tracking and settlement dashboard with real-time balance calculations.",
    overview: "A relational frontend system for tracking shared expenses, generating individual balances, and settling up directly within group histories.",
    logicArchitecture: "Engineered a normalized Redux Toolkit state to manage relational data across groups, friends, and expenses. Developed a live synchronization engine that computes real-time balance shifts upon every CRUD operation. Implemented a time-aware analytics engine that dynamically aggregates daily expenditure patterns, compares current spending against yesterday's metrics, and renders multi-layered trend lines for weekly expense visualization.",
    techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React Router", "React Hook Form","Day.js","Vite","Rest APIs"],
    metadata: {
        status: "V1 Completed",
        responsiveness: "Desktop-First",
        limitations: "The current UI layout is heavily optimized for desktop viewports to facilitate rendering complex multi-column analytic tables and financial charts.",
        futureImprovements: ["Refactor layout with mobile-first grid components", "Integrate persistent backend storage layer"]
    },
    githubUrl: "https://github.com/awazii/Splitly",
    demoUrl: "https://awazii-splitly.netlify.app/",
    challenges: [
        {
            problem: "Managing complex relationships between friends, groups, and shared expenses without creating duplicated or inconsistent data.",
            solution: "Designed a normalized Redux Toolkit state architecture where users, groups, and expenses reference each other by IDs, making updates predictable and scalable."
        },
        {
            problem: "Calculating balances accurately after every expense while supporting multiple participants.",
            solution: "Built reusable balance calculation utilities that recompute settlements dynamically whenever expenses are added, edited, or removed."
        }
    ],
    gallery: [
        "",
        "",
        ""
    ],
    features: [
        "Normalized Redux state for complex data relationships",
        "Real-time mathematical engine for balance settlements",
        "Live group, friend, and expense data visualization",
        "Time-aware analytics tracking daily vs. weekly spending trends"
    ],
    logoUrl: "/images/splitly.png"
},
    {
        id: "pulse-music",
        title: "Pulse Music",
        pitch: "High-fidelity media player with complex audio state management and dynamic queues.",
        overview: "A browser-native music streaming platform replica utilizing static JSON metadata structures to simulate premium audio features.",
        logicArchitecture: "Architected a custom global media engine entirely in Vanilla JavaScript. Managed dynamic track queues, shuffle sequencing, multi-tier loop states, volume scaling, and dynamically calculated categorical recommendation groupings like 'Recently Played' and 'Daily Mixes.'",
        techStack: ["Vanilla JS", "HTML5", "CSS3", "REST APIs"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Pulse-music",
        demoUrl: "https://pulse-awazii.netlify.app/",
        challenges: [
            {
                problem:
                    "Synchronizing playback state across multiple UI components using only Vanilla JavaScript.",
                solution:
                    "Created a centralized play state object that keeps the media player, queue, playlist, and controls synchronized."
            },
            {
                problem:
                    "Implementing shuffle, repeat, recently played, and daily mixes without a frontend framework.",
                solution:
                    "Developed custom algorithms using localStorage and structured JSON data to simulate modern streaming platform behavior."
            }
        ],
          gallery: [
        "",
        "",
        ""
    ],features: [
            "Custom global media playback engine",
            "Dynamic shuffle and repeat algorithms",
            "Categorical recommendation engine",
            "Persistent playback state management"
        ],
        logoUrl: "/images/Pulse-music.png"
    },
    {
        id: "amazon-clone",
        title: "Amazon Engine",
        pitch: "Vanilla JS e-commerce simulator with an advanced cart algorithm and time-based tracking.",
        overview: "A client-side transactional shopping experience featuring unique variant matching and asynchronous order fulfillment simulation.",
        logicArchitecture: "Developed a deep-comparison cart algorithm in raw JS that differentiates item quantities by attributes (e.g., matching item id + size variant) to prevent duplicate line listings. Leveraged Day.js to map delivery selections into automated, active progress updates.",
        techStack: ["Vanilla JS", "HTML5", "CSS3", "Day.js"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Amazon",
        demoUrl: "https://amazon-awais.netlify.app/",
        challenges: [
            {
                problem:
                    "Preventing duplicate cart entries when products share the same ID but have different variants.",
                solution:
                    "Implemented deep comparison logic that combines product ID with selected options before updating cart quantities."
            },
            {
                problem:
                    "Tracking estimated deliveries for multiple orders.",
                solution:
                    "Used Day.js to calculate delivery dates dynamically and update order progress based on the current date."
            }
        ],
          gallery: [
        "",
        "",
        ""
    ],features: [
            "Deep-comparison cart variant matching",
            "Asynchronous delivery estimation engine",
            "Dynamic order fulfillment progress tracking",
            "Persistent local storage for cart synchronization"
        ],
        logoUrl: "/images/amazon-logo.png"
    },
    {
        id: "netflix-ui",
        title: "Netflix Architecture",
        pitch: "Pixel-perfect, fully responsive structural clone of the Netflix interface.",
        overview: "A granular layout construction focused completely on structural accuracy and asset layer configurations.",
        logicArchitecture: "Created a pure CSS styling architecture using compound Flexbox tracks and structural CSS grids. Managed image asset layering, fluid aspect ratios, absolute component alignment, and smooth track-pad horizontal scroll structures without external packages.",
        techStack: ["HTML5", "CSS3"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Web-development-Frontend/tree/main/Css%20projects/part%2016",
        demoUrl: "#",
        challenges: [
            {
                problem:
                    "Recreating Netflix's responsive layout while maintaining consistent spacing across screen sizes.",
                solution:
                    "Combined CSS Grid and Flexbox with responsive breakpoints to closely match the original interface."
            },
            {
                problem:
                    "Maintaining smooth horizontal scrolling for content rows.",
                solution:
                    "Implemented overflow-based scrolling with optimized image sizing and layout stability."
            }
        ],
          gallery: [
        "",
        "",
        ""
    ],
    features: [
            "Structural accuracy using CSS Grid and Flexbox",
            "Optimized horizontal content scrolling",
            "Fluid asset layering and responsiveness",
            "Performance-tuned image rendering pipelines"
        ],
        logoUrl: "/images/netflix.png"
    },
    {
        id: "tailtask",
        title: "Tailtask",
        pitch: "Smart task management UI with dynamic progress tracking and time-aware daily resets.",
        overview: "A lightweight productivity dashboard that cleanly branches short-term daily activities from persistent custom objectives.",
        logicArchitecture: "Designed a clean React application state tracking complete vs pending records. Formulated a calculated derived state metric that maps operational values straight to a dynamic progress indicator, matching a custom system theme system.",
        techStack: ["React", "Tailwind CSS"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Tail-Task",
        demoUrl: "https://tail-task.netlify.app/",
        challenges: [
            {
                problem:
                    "Keeping task progress synchronized with the UI after every action.",
                solution:
                    "Managed application state using React hooks and calculated completion percentages from derived state."
            },
            {
                problem:
                    "Separating daily tasks from long-term objectives.",
                solution:
                    "Designed independent state structures for recurring daily tasks and persistent custom goals."
            }
        ],
          gallery: [
        "",
        "",
        ""
    ],
    features: [
            "Time-aware daily task resetting",
            "Dynamic progress percentage calculation",
            "Independent state structures for custom objectives",
            "Responsive minimalist dashboard interface"
        ],
        logoUrl: "/images/Tailtask.png"
    },
    {
        id: "calibercustom",
        title: "CaliberCustom",
        pitch: "Deployed client product catalog featuring an intelligent WhatsApp checkout routing system.",
        overview: "A serverless storefront asset engineered to bridge standard client interaction directly with immediate customer conversion pathways.",
        logicArchitecture: "Built a customized production storefront catalog utilizing dynamic URL string building. Collected user selection parameters on-click and mapped those values directly into fully structured, template-filled WhatsApp purchase orders.",
        techStack: ["Vanilla JS", "HTML5", "CSS3"],
        metadata: {
            status: "Production Live",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/CALIBER-Custom",
        demoUrl: "https://calibercustom.netlify.app/",
        challenges: [
            {
                problem:
                    "Reducing friction between product selection and customer contact.",
                solution:
                    "Generated dynamic WhatsApp messages containing selected products so customers could place orders instantly."
            },
            {
                problem:
                    "Keeping the catalog easy to maintain without a backend.",
                solution:
                    "Built reusable product structures and generated UI dynamically from centralized data."
            }
        ],
          gallery: [
        "",
        "",
        ""
    ],
    features: [
            "Intelligent WhatsApp conversion routing",
            "Dynamic template-based order generation",
            "Serverless catalog maintenance system",
            "Real-time on-click user interaction tracking"
        ],
        logoUrl: "/images/CaliberCustoms.png" 
    }
];
