import { Images } from "lucide-react";

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
    gallery: {
        images:string[],
        videos:string[]
    };
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
        techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React Router", "React Hook Form", "Day.js", "Vite", "Rest APIs"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive",
            limitations: "As a frontend-only application, all data is persisted via browser LocalStorage. This means your personal expense records and configurations are currently confined to the specific device being used.",
            futureImprovements: [
                "Integrate a backend database to support persistent user accounts",
                "Enable cross-device data synchronization for seamless access anywhere"
            ]
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
        gallery: {
            images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452007/qaww38dwk3dprwedeaot.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/fuiomhy0uwcgrt98qk1g.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452006/wkjg8hngehen9povi97e.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/i9bfphfez8shyon8y7oc.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452007/dz59buzkv5m9kkno8qw8.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452285/zkzfngraf3r2a0lxh8kw.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452284/jwdytxt8bkskqhqzu7tc.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/jsqytd2glmi6txctpwup.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/kflxyvkp7xb3jeccvpbt.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/y0jbazbphb4ljznkubwz.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/mikwyl4f2n9xbdmzkaia.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/b9nrq0lhhgcbb1nbkmia.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/hgabqq1hbny9gx2gmidh.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/s9rnwpkx5aqy9dubnqtm.png"],
            videos:["https://res.cloudinary.com/dllocncsk/video/upload/v1784467528/Splitly-2_swyrej.mp4",'https://res.cloudinary.com/dllocncsk/video/upload/v1784467518/Splitly-6_kkhxh8.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467521/Splitly-3_uxpfk3.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467529/Splitly-5_hgd09k.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467515/Splitly-7_gyjtbq.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467527/Splitly-4_ch2hg9.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467518/Splitly-1_ub6odm.mp4']
        },
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
        gallery: {
           images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452053/otgar9ik3rkf2wfvhopw.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452052/cmhfj6lzz5atfmx9tzri.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452051/qy63redjkn14jxplqelu.png",'https://res.cloudinary.com/dllocncsk/image/upload/v1784452051/fctanxbkanbm0knimzjy.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452050/bj1nvvhbrcn0qnl4a9kh.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452049/ds9wvxsibvrzdzeutbqc.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452049/vstxgca5qcc7nzptas1i.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452048/dwrfudjkux3svpqdziyy.png'],
            videos:['https://res.cloudinary.com/dllocncsk/video/upload/v1784467921/pulse-1_twhr9x.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467886/pulse-2_klmolb.mp4']
        }, features: [
            "Custom global media playback engine",
            "Dynamic shuffle and repeat algorithms",
            "Categorical recommendation engine",
            "Persistent playback state management"
        ],
        logoUrl: "/images/Pulse-music.png"
    },
    {
        id: "aura-ecommerce",
        title: "Aura E-Commerce Simulator",
        pitch: "A sophisticated e-commerce engine built with Vanilla JS, featuring custom cart logic and dynamic order tracking.",
        overview: "A high-performance client-side shopping application engineered to handle complex variant matching, state management, and real-time delivery estimation without external frameworks.",
        logicArchitecture: "Engineered a robust deep-comparison cart algorithm in native JavaScript to manage item variants, preventing duplicates and ensuring accurate state synchronization. Utilized Day.js for complex date manipulation to drive an automated delivery tracking system.",
        techStack: ["Vanilla JavaScript (ES6+)", "HTML5", "CSS3", "Day.js"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Aura-E-Commerce-Simulator",
        demoUrl: "https://aura-awazii.netlify.app/",
        challenges: [
            {
                problem: "Managing state for multi-variant products sharing the same base ID.",
                solution: "Implemented a deep-comparison algorithm that evaluates object properties (ID + variant options) to uniquely identify and update cart entries."
            },
            {
                problem: "Simulating dynamic, time-based order fulfillment tracking.",
                solution: "Integrated Day.js to compute real-time delivery windows and automated progress bar states based on the current user session date."
            }
        ],
        gallery: {
             images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452114/yprqk5xpe0koqulbhzif.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452113/zvoq7h3erfxtby2qaitu.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452112/dhrll5tilia6frwa2p8q.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452111/zkhnnbe9hkv3vzx9c2eq.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452110/wra02xsuvtbd4xhr9ogp.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452111/svncizrygwc0snnmqya2.png",'https://res.cloudinary.com/dllocncsk/image/upload/v1784452109/jxqly8tl9d4w23q3emln.png'],
            videos:['https://res.cloudinary.com/dllocncsk/video/upload/v1784467935/Aura-1_ojgnun.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784467933/Aura-2_aeic48.mp4']
        },
        features: [
            "Deep-comparison cart variant matching",
            "Asynchronous delivery estimation engine",
            "Dynamic order fulfillment progress tracking",
            "Persistent local storage for state synchronization"
        ],
        logoUrl: "/images/aura.png"
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
        gallery: {
            images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452325/iyezuptiecthpr40dsat.png",'https://res.cloudinary.com/dllocncsk/image/upload/v1784452324/c3sufofnqiql6bbu8nfv.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452321/mjxz1mhjeznpd66rgpf5.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452322/hg8evxc3azevkokbynuv.png'],
            videos:['https://res.cloudinary.com/dllocncsk/video/upload/v1784468018/netflix_ui_demo_ddcp0o.mp4']
        },
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
        gallery: {
             images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452160/h4uvyj4kawl33kfbfy7p.png",'https://res.cloudinary.com/dllocncsk/image/upload/v1784452158/goxdzcg1mbeqh2akkhxs.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452159/c9cwvpqoqm39ccwg9ejg.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452158/owrwv6njkyvbdkcervof.png'],
            videos:['https://res.cloudinary.com/dllocncsk/video/upload/v1784468047/Tail-task-1_kjsqon.mp4','https://res.cloudinary.com/dllocncsk/video/upload/v1784468050/tail-task-2_ai2mgi.mp4']
        },
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
        gallery: {
             images:["https://res.cloudinary.com/dllocncsk/image/upload/v1784452205/ugpddmvwosfdut6wvfza.png","https://res.cloudinary.com/dllocncsk/image/upload/v1784452206/dkbsbymetnxfh7ulejlo.png",'https://res.cloudinary.com/dllocncsk/image/upload/v1784452204/oqpsoegi0s7njcvx03jc.png','https://res.cloudinary.com/dllocncsk/image/upload/v1784452203/pkwsuyzvjuioxpand3d2.png'],
            videos:["https://res.cloudinary.com/dllocncsk/video/upload/v1784463739/CaliberCustoms-1_a6b6vt.mp4",'https://res.cloudinary.com/dllocncsk/video/upload/v1784463748/Caliber-customs-2_ecvu9v.mp4']
        },
        features: [
            "Intelligent WhatsApp conversion routing",
            "Dynamic template-based order generation",
            "Serverless catalog maintenance system",
            "Real-time on-click user interaction tracking"
        ],
        logoUrl: "/images/CaliberCustoms.png"
    }
];
