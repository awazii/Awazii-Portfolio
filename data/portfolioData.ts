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
        images: string[],
        videos: string[]
    };
    features?: string[];
    logoUrl?: string;
}

export const portfolioData: ProjectItem[] = [
    {
        id: "splitly",
        title: "Splitly",
        pitch: "Admin-driven expense tracking and settlement platform with proof-backed transactions and real-time balance calculations.",
        overview: "A relational frontend system where an admin manages friends and groups (like a trip group), logs shared expenses with proof, and tracks who owes whom. Every expense and payback updates a live global net balance plus per-friend net balances, with dedicated dashboards, analytics, a temporary splitter for one-off calculations, and a full activity, search, and moderation system.",
        logicArchitecture: "Engineered a normalized Redux Toolkit state to manage relational data across an admin, friends, groups, and expenses. Developed a live synchronization engine that recomputes each friend's net balance and the overall global net balance on every expense, edit, or payback. Built an expense engine that enforces a minimum of one participant per expense and attaches proof documentation to both the expense and its settling transaction, so contributions and repayments are independently verifiable. Implemented a temporary splitter module that lets the admin add up to 5 ad-hoc, non-persisted friends to instantly calculate and settle a one-off expense without creating real friends or groups, fully resettable per use. Added a moderation layer allowing friends to be banned from being added to future expenses or groups while still remaining able to repay existing debts. Implemented a time-aware analytics engine that dynamically aggregates daily expenditure over the last 7 days, compares current spending against prior days, and renders multi-layered trend lines across a dedicated live graphs page. Structured the app around a main dashboard, individual per-friend dashboards, and per-group dashboards, backed by multipage expense-creation forms, a recent activity feed logging all app actions, group-count tracking, and a global search and filter system.",
        techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React Router", "React Hook Form", "Day.js", "Vite", "Rest APIs"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive",
            limitations: "As a frontend-only application, all data is persisted via browser LocalStorage. This means all admin records — friends, groups, expenses, balances, and activity history — are currently confined to the specific device being used.",
            futureImprovements: [
                "Integrate a backend database to support persistent, multi-admin user accounts",
                "Enable cross-device data synchronization for seamless access anywhere",
                "Add real-time notifications for new expenses, settlements, and bans"
            ]
        },
        githubUrl: "https://github.com/awazii/Splitly",
        demoUrl: "https://awazii-splitly.netlify.app/",
        challenges: [
            {
                problem: "Managing complex relationships between an admin, friends, groups, and shared expenses without creating duplicated or inconsistent data.",
                solution: "Designed a normalized Redux Toolkit state architecture where friends, groups, and expenses reference each other by IDs, making updates predictable and scalable across every dashboard."
            },
            {
                problem: "Calculating balances accurately after every expense while supporting multiple participants, partial contributions, and later paybacks.",
                solution: "Built reusable balance calculation utilities that recompute both individual net balances and the global net balance dynamically whenever expenses are added, edited, removed, or settled."
            },
            {
                problem: "Preventing disputes over who actually paid what and who actually paid back what.",
                solution: "Required proof attachments on both the original expense and the settling transaction, so every claim in the balance history is independently backed by evidence."
            },
            {
                problem: "Letting users quickly split a one-off expense without forcing them to permanently create friends or groups just for a single calculation.",
                solution: "Built a standalone Temporary Splitter supporting up to 5 ad-hoc participants with instant settlement math, fully resettable and isolated from persisted app data."
            },
            {
                problem: "Restricting problematic friends from future activity without blocking them from clearing debts they already owe.",
                solution: "Implemented a ban system that excludes a friend from being added to new expenses or groups while still allowing them to repay existing balances."
            }
        ],
        gallery: {
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452007/qaww38dwk3dprwedeaot.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/fuiomhy0uwcgrt98qk1g.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452006/wkjg8hngehen9povi97e.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/i9bfphfez8shyon8y7oc.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452007/dz59buzkv5m9kkno8qw8.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452285/zkzfngraf3r2a0lxh8kw.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452284/jwdytxt8bkskqhqzu7tc.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/jsqytd2glmi6txctpwup.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/kflxyvkp7xb3jeccvpbt.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452005/y0jbazbphb4ljznkubwz.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/mikwyl4f2n9xbdmzkaia.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/b9nrq0lhhgcbb1nbkmia.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/hgabqq1hbny9gx2gmidh.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452004/s9rnwpkx5aqy9dubnqtm.png"],
            videos: ["https://res.cloudinary.com/dllocncsk/video/upload/v1784467528/Splitly-2_swyrej.mp4", 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467518/Splitly-6_kkhxh8.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467521/Splitly-3_uxpfk3.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467529/Splitly-5_hgd09k.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467515/Splitly-7_gyjtbq.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467527/Splitly-4_ch2hg9.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467518/Splitly-1_ub6odm.mp4']
        },
        features: [
            "Admin-driven friend and group management with per-group expense tracking",
            "Normalized Redux state for complex data relationships",
            "Real-time mathematical engine for individual and global net balance settlements",
            "Proof attachments on both expenses and repayment transactions to prevent disputes",
            "Main dashboard, individual per-friend dashboards, and per-group dashboards",
            "Multipage forms for creating and managing expenses",
            "Daily expense tracker with a rolling 7-day view",
            "Dedicated live data graphs page for daily and weekly spending trends",
            "Temporary Splitter for one-off expenses with up to 5 ad-hoc friends and resettable settlements",
            "Global search and filter system",
            "Profile update system",
            "Ban system that blocks a friend from new expenses/groups while still allowing debt repayment",
            "Group count tracking and a recent activity feed logging all app actions",
            "Fully responsive across devices"
        ],
        logoUrl: "/images/splitly.png"
    },
    {
        id: "pulse-music",
        title: "Pulse Music",
        pitch: "Spotify-inspired music streaming replica with a real media engine and album/artist browsing.",
        overview: "A browser-native music streaming platform replica with a UI closely modeled on Spotify, powered by a single structured JSON dataset assembled from the Spotify API, Wikipedia API, and Cloudinary-hosted audio files, covering most-listened tracks, daily mixes, recently played history, and dedicated album and artist pages.",
        logicArchitecture: "Architected a custom global media engine entirely in Vanilla JavaScript, replicating Spotify's core playback logic. Managed dynamic track queues, song detail views, shuffle sequencing, multi-tier loop states, volume scaling and muting, and dynamically calculated categorical recommendation groupings like 'Recently Played,' 'Daily Mixes,' and 'Most Listened.' Built a data layer that consolidates track, artist, and album metadata pulled from the Spotify API and artist bios from the Wikipedia API into a single unified JSON structure, with actual playable audio served via Cloudinary, then used that structure to render dedicated album pages and artist pages alongside the core player.",
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
                    "Synchronizing playback state across multiple UI components — player bar, queue, playlist, album page, and artist page — using only Vanilla JavaScript.",
                solution:
                    "Created a centralized play state object that keeps the media player, queue, song details, and every page in sync on play, pause, mute, repeat, and shuffle."
            },
            {
                problem:
                    "Implementing shuffle, repeat, recently played, daily mixes, and most-listened tracking without a frontend framework.",
                solution:
                    "Developed custom algorithms using localStorage and structured JSON data to simulate modern streaming platform behavior."
            },
            {
                problem:
                    "Sourcing realistic, consistent music metadata and playable audio without a backend.",
                solution:
                    "Consolidated data from the Spotify API (tracks, artists, albums) and Wikipedia API (artist bios) into one unified JSON file, with Cloudinary used to host and serve the actual audio files."
            }
        ],
        gallery: {
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452053/otgar9ik3rkf2wfvhopw.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452052/cmhfj6lzz5atfmx9tzri.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452051/qy63redjkn14jxplqelu.png", 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452051/fctanxbkanbm0knimzjy.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452050/bj1nvvhbrcn0qnl4a9kh.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452049/ds9wvxsibvrzdzeutbqc.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452049/vstxgca5qcc7nzptas1i.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452048/dwrfudjkux3svpqdziyy.png'],
            videos: ['https://res.cloudinary.com/dllocncsk/video/upload/v1784467921/pulse-1_twhr9x.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467886/pulse-2_klmolb.mp4']
        }, features: [
            "Spotify-style UI with full media player controls: play, pause, mute, repeat, shuffle",
            "Custom global media playback engine with live queue and song detail view",
            "Dynamic shuffle and repeat algorithms",
            "Categorical recommendation engine: Most Listened, Daily Mixes, Recently Played",
            "Dedicated artist pages",
            "Unified music dataset built from the Spotify API and Wikipedia API, with Cloudinary-hosted audio",
            "Persistent playback state management"
        ],
        logoUrl: "/images/Pulse-music.png"
    },
    {
        id: "aura-ecommerce",
        title: "Aura E-Commerce Simulator",
        pitch: "A sophisticated e-commerce engine built with Vanilla JS, featuring OOP-based cart logic, size-aware variant handling, and callback-driven order tracking.",
        overview: "A high-performance client-side shopping simulation engineered to handle ID-based item identification, size-separated variants for clothes and shoes, tiered delivery pricing, and real-time cart and order tracking without external frameworks, named Aura.",
        logicArchitecture: "Engineered a robust ID-based cart system using OOP principles and polymorphism in native JavaScript, where each item is uniquely identified and clothing/shoe items are separated by size, allowing multiple distinct quantities of the same product across different sizes (e.g. 4 units of size 42, 3 units of size 43) to be tracked independently within the cart. Built a live-updating price engine that recalculates the full cart total in real time as items, sizes, or quantities change. Implemented 3 distinct delivery types at different price points, selectable per product, and used callback functions to drive an automated order tracking system so each product's fulfillment status updates according to the specific delivery option chosen for it. Utilized Day.js for date manipulation to compute delivery windows and progress states.",
        techStack: ["Vanilla JavaScript (ES6+)", "HTML5", "CSS3", "Day.js"],
        metadata: {
            status: "Completed",
            responsiveness: "Fully Responsive"
        },
        githubUrl: "https://github.com/awazii/Aura-E-Commerce-Simulator",
        demoUrl: "https://aura-awazii.netlify.app/",
        challenges: [
            {
                problem: "Managing state for multi-variant products sharing the same base ID, especially clothes and shoes split across multiple sizes with independent quantities.",
                solution: "Implemented an OOP-based, deep-comparison cart algorithm that evaluates ID + variant options (including size) to uniquely identify, separate, and update cart entries, using polymorphism to handle different product types consistently."
            },
            {
                problem: "Keeping cart totals accurate and instantly reflective of changes across multiple items, sizes, and delivery choices.",
                solution: "Built a live price recalculation system that updates the full cart total in real time on every add, remove, or quantity/size change."
            },
            {
                problem: "Letting each product in an order follow its own delivery speed and price tier, then tracking fulfillment accordingly.",
                solution: "Implemented 3 separate delivery types at different price points selectable per product, and used callback functions to trigger and update each product's own order tracking based on the delivery option selected for it."
            },
            {
                problem: "Simulating dynamic, time-based order fulfillment tracking.",
                solution: "Integrated Day.js to compute real-time delivery windows and automated progress bar states based on the current user session date."
            }
        ],
        gallery: {
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452114/yprqk5xpe0koqulbhzif.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452113/zvoq7h3erfxtby2qaitu.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452112/dhrll5tilia6frwa2p8q.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452111/zkhnnbe9hkv3vzx9c2eq.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452110/wra02xsuvtbd4xhr9ogp.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452111/svncizrygwc0snnmqya2.png", 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452109/jxqly8tl9d4w23q3emln.png'],
            videos: ['https://res.cloudinary.com/dllocncsk/video/upload/v1784467935/Aura-1_ojgnun.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784467933/Aura-2_aeic48.mp4']
        },
        features: [
            "ID-based cart item system with OOP and polymorphism for handling different product types",
            "Size-separated variant tracking for clothes and shoes with independent quantities per size",
            "Live cart price recalculation across items, sizes, and delivery choices",
            "3 delivery types at different price tiers, selectable per product",
            "Callback-driven order tracking synced to each product's chosen delivery option",
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
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452325/iyezuptiecthpr40dsat.png", 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452324/c3sufofnqiql6bbu8nfv.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452321/mjxz1mhjeznpd66rgpf5.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452322/hg8evxc3azevkokbynuv.png'],
            videos: ['https://res.cloudinary.com/dllocncsk/video/upload/v1784468018/netflix_ui_demo_ddcp0o.mp4']
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
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452160/h4uvyj4kawl33kfbfy7p.png", 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452158/goxdzcg1mbeqh2akkhxs.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452159/c9cwvpqoqm39ccwg9ejg.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452158/owrwv6njkyvbdkcervof.png'],
            videos: ['https://res.cloudinary.com/dllocncsk/video/upload/v1784468047/Tail-task-1_kjsqon.mp4', 'https://res.cloudinary.com/dllocncsk/video/upload/v1784468050/tail-task-2_ai2mgi.mp4']
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
            images: ["https://res.cloudinary.com/dllocncsk/image/upload/v1784452205/ugpddmvwosfdut6wvfza.png", "https://res.cloudinary.com/dllocncsk/image/upload/v1784452206/dkbsbymetnxfh7ulejlo.png", 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452204/oqpsoegi0s7njcvx03jc.png', 'https://res.cloudinary.com/dllocncsk/image/upload/v1784452203/pkwsuyzvjuioxpand3d2.png'],
            videos: ["https://res.cloudinary.com/dllocncsk/video/upload/v1784463739/CaliberCustoms-1_a6b6vt.mp4", 'https://res.cloudinary.com/dllocncsk/video/upload/v1784463748/Caliber-customs-2_ecvu9v.mp4']
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
