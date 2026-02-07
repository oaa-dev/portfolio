export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  highlights?: string[];
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  isPrivate?: boolean;
  featured?: boolean;
  links?: { label: string; url: string }[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "John Christian Oraa",
  title: "PHP Web Developer",
  roles: ["PHP Web Developer", "Laravel Specialist", "API Developer", "Backend Engineer", "AI-Assisted Developer", "Fullstack Developer"],
  tagline: "I build scalable, efficient, and user-friendly web applications with a focus on clean backend architecture.",
  aboutHeading: "Turning complex requirements into clean, reliable backend systems",
  yearsExperience: "5+",
  brandTag: "<JCO />",
  footerTagline: "Building scalable, efficient web applications with PHP and modern backend technologies.",
  email: "johnoraa24@gmail.com",
  location: "City of Cabuyao, Laguna 4025",
  bio: `I'm a PHP web developer with over 5+ years of hands-on experience shipping production systems across e-commerce, gaming, government, and enterprise environments. My core stack is Laravel backed by MySQL, Redis, and RabbitMQ — building clean API architectures that hold up under real-world traffic.

From maintaining a gaming BackOffice handling live player wallets and transactions, to automating reports at a semiconductor company, to building scholarship and disaster management tools for local government — I've worked on systems where reliability isn't optional. Each project sharpened my eye for writing code that's testable, well-documented, and built to last.

I thrive in collaborative teams, working closely with frontend developers and designers to deliver optimized endpoints and seamless user experiences.`,
  social: {
    github: "https://github.com/betrnk-jc",
    linkedin: "https://www.linkedin.com/in/john-christian-oraa-2b56b11b3/",
  },
  resumeUrl: "/resume.pdf",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 95, icon: "php" },
      { name: "Laravel", level: 92, icon: "laravel" },
      { name: "CodeIgniter", level: 85, icon: "codeigniter" },
      { name: "API Development", level: 90, icon: "api" },
      { name: "MySQL", level: 90, icon: "mysql" },
      { name: "Redis", level: 80, icon: "redis" },
      { name: "Unit Testing", level: 82, icon: "testing" },
      { name: "Swagger / API Docs", level: 85, icon: "swagger" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS / Next.js", level: 75, icon: "react" },
      { name: "HTML / CSS", level: 88, icon: "html" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "jQuery / AJAX", level: 85, icon: "jquery" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 88, icon: "git" },
      { name: "Docker", level: 78, icon: "docker" },
      { name: "RabbitMQ", level: 75, icon: "rabbitmq" },
      { name: "WebSocket", level: 78, icon: "websocket" },
      { name: "Postman", level: 85, icon: "postman" },
      { name: "Jira", level: 82, icon: "jira" },
      { name: "C#", level: 70, icon: "csharp" },
    ],
  },
  {
    title: "AI & Productivity",
    skills: [
      { name: "Claude AI", level: 85, icon: "ai" },
      { name: "Augment", level: 80, icon: "ai" },
      { name: "ChatGPT", level: 80, icon: "ai" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Bticket E-Commerce System",
    description:
      "A full-featured e-commerce platform with efficient, well-documented, and testable backend architecture built for Betrnk Tours Inc.",
    longDescription:
      "Bticket is a full-featured e-commerce platform built for Betrnk Tours Inc. The system handles product catalog management, order processing, payment integration, and customer account management. Includes a dedicated merchant admin panel (B-Merchant) for vendor management. Built with a focus on clean API architecture, comprehensive test coverage, and thorough Swagger documentation to enable seamless frontend-backend integration.",
    image: "/projects/ecommerce.jpg",
    highlights: [
      "Customer-facing storefront at b-ticket.ph",
      "Merchant admin panel (B-Merchant) for vendor management",
      "RESTful API architecture with Swagger documentation",
      "Redis caching for optimized product catalog performance",
      "RabbitMQ for asynchronous order processing and notifications",
      "Comprehensive PHPUnit test coverage",
    ],
    technologies: ["Laravel", "MySQL", "Redis", "RabbitMQ", "API"],
    github: "https://github.com",
    demo: "https://b-ticket.ph/en",
    category: "Backend",
    isPrivate: true,
    featured: true,
    links: [
      { label: "Bticket", url: "https://b-ticket.ph/" },
      { label: "B-Merchant", url: "https://b-merchant.ph/en" },
    ],
  },
  {
    id: 2,
    title: "Gaming BackOffice System",
    description:
      "BackOffice platform for the gaming industry including player wallet management, transaction history, coupons, reports, and CMS for the frontend site.",
    longDescription:
      "A comprehensive BackOffice platform for the gaming industry, maintained and developed over 2+ years. The system manages player wallets and real-time transactions, coupon distribution, detailed reporting, and a CMS powering the customer-facing website. On-call technical support was provided for both players and internal employees.",
    image: "/projects/gaming.jpg",
    highlights: [
      "Real-time player wallet and transaction management",
      "Coupon management and distribution system",
      "Customizable reporting dashboard",
      "CMS for the customer-facing frontend site",
      "On-call technical support for players and employees",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
    featured: true,
  },
  {
    id: 3,
    title: "E-Learning System",
    description:
      "Online learning platform enabling course management, student enrollment, and interactive content delivery for educational institutions.",
    longDescription:
      "An online learning platform built for Mood Learning, enabling educational institutions to manage courses, handle student enrollment, and deliver interactive content. The system supports multiple user roles (admin, instructor, student) with tailored dashboards for each.",
    image: "/projects/elearning.jpg",
    highlights: [
      "Course management with multimedia content support",
      "Student enrollment and progress tracking",
      "Role-based dashboards for admins, instructors, and students",
      "Interactive content delivery system",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
  },
  {
    id: 4,
    title: "Report Automation System",
    description:
      "Customizable report system allowing users to generate, display, and export reports with automated generation and optimized database queries.",
    longDescription:
      "A customizable report automation system built at Integrated Micro Electronics Inc. Users can configure, generate, display, and export reports across various formats. The system automated previously manual report generation processes and included optimized database queries for faster data retrieval. User-friendly documentation and training were provided to international employees.",
    image: "/projects/reports.jpg",
    highlights: [
      "Configurable report templates with multiple export formats",
      "Automated scheduled report generation",
      "Optimized database queries for faster data retrieval",
      "User-friendly documentation and training for international teams",
    ],
    technologies: ["PHP", "MySQL", "C#", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Backend",
    isPrivate: true,
  },
  {
    id: 5,
    title: "Scholarship Management System",
    description:
      "Government scholarship management platform with online application processing, automated record-keeping, and scholarship tracking for Cabuyao City.",
    longDescription:
      "Version 2 of the Scholarship Management System for the City Government of Cabuyao. The platform handles online scholarship applications, automated record-keeping, eligibility verification, and end-to-end scholarship tracking for the municipality's education programs.",
    image: "/projects/scholarship.jpg",
    screenshots: ["/portfolio-1.png"],
    highlights: [
      "Online scholarship application and processing",
      "Automated record-keeping and eligibility verification",
      "End-to-end scholarship tracking dashboard",
      "Built for the City Government of Cabuyao",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
    featured: true,
  },
  {
    id: 6,
    title: "Disaster Risk & COVID Tracker",
    description:
      "Disaster Risk Reduction and Management System along with a COVID tracker for vaccinated individuals and cases for the City Government of Cabuyao.",
    longDescription:
      "A dual-purpose system for the City Government of Cabuyao combining Disaster Risk Reduction and Management (DRRM) capabilities with a COVID-19 tracker. The DRRM module manages disaster preparedness, incident reporting, and resource allocation. The COVID tracker monitors vaccination records, active cases, and recovery data for the municipality.",
    image: "/projects/disaster.jpg",
    screenshots: ["/portfolio-5.png"],
    highlights: [
      "Disaster preparedness and incident reporting module",
      "Resource allocation and management for emergencies",
      "COVID-19 vaccination tracking and case monitoring",
      "Real-time dashboard for municipal health data",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
    featured: true,
  },
  {
    id: 7,
    title: "HOMS Hotel Management System",
    description:
      "Hotel reservation and operations management system handling bookings, room management, and guest services.",
    longDescription:
      "A hotel operations management system (HOMS) built to streamline hotel reservations, room inventory, guest check-in/check-out, and day-to-day operations. The system provides an intuitive interface for front-desk staff and management to handle bookings and monitor room availability in real time.",
    image: "/projects/homs.jpg",
    screenshots: ["/portfolio-6.png"],
    highlights: [
      "Room booking and reservation management",
      "Real-time room availability tracking",
      "Guest check-in/check-out workflow",
      "Operations dashboard for hotel management",
    ],
    technologies: ["Laravel", "AJAX", "jQuery", "HTML", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
  },
  {
    id: 8,
    title: "Online Health Declaration System",
    description:
      "Digital health declaration platform for streamlined health screening and compliance tracking.",
    longDescription:
      "An online health declaration system that digitizes health screening forms for institutions and organizations. Users submit health declarations electronically, enabling faster processing, automated compliance checks, and centralized record-keeping.",
    image: "/projects/health.jpg",
    screenshots: ["/portfolio-3.png"],
    highlights: [
      "Digital health declaration form submission",
      "Automated compliance and screening checks",
      "Centralized health record management",
      "Streamlined processing for institutions",
    ],
    technologies: ["Laravel", "AJAX", "jQuery", "HTML", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
  },
  {
    id: 9,
    title: "POS System",
    description:
      "Point of Sale system for managing sales transactions, inventory, and daily business operations.",
    longDescription:
      "A Point of Sale (POS) system designed to handle sales transactions, inventory tracking, and daily business operations. The system provides a fast, user-friendly interface for cashiers and includes management tools for stock monitoring and sales reporting.",
    image: "/projects/pos.jpg",
    screenshots: ["/portfolio-2.png"],
    highlights: [
      "Fast and intuitive sales transaction interface",
      "Real-time inventory tracking",
      "Sales reporting and analytics",
      "User role management for cashiers and managers",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    isPrivate: true,
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Backend Engineer (PHP / API Developer)",
    company: "Betrnk Tours Inc.",
    period: "March 2025 - Present",
    description: [
      "Develop E-commerce system for company",
      "Utilized Laravel, MySQL, Redis, RabbitMQ to create efficient, well-documented, and testable backend architecture",
      "Write unit tests to ensure code reliability and maintainability",
      "Document APIs using Swagger for clear frontend-backend integration",
      "Collaborate with Frontend developer and UI/UX Designer to deliver optimized API endpoints",
      "Leverage AI tools (Claude AI, Augment) to accelerate development workflows",
    ],
    technologies: ["Laravel", "MySQL", "Redis", "RabbitMQ", "Swagger", "PHPUnit"],
  },
  {
    id: 2,
    role: "Software Engineer (Mid PHP Developer)",
    company: "EK Consulting and Management Services Inc.",
    period: "July 2022 - January 2025",
    description: [
      "Maintained and developed BackOffice processes for the gaming industry",
      "Built player wallet, transaction history, coupons management, reports, and CMS for frontend site",
      "Provided technical support (on-call) for both players and employees",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "JavaScript"],
  },
  {
    id: 3,
    role: "Freelance PHP Developer",
    company: "Mood Learning / BlitzDev IT Consultancy",
    period: "2022 - 2023",
    description: [
      "Built E-Learning System for Mood Learning",
      "Developed Agricultural system, CMS, Hotel Reservation Management System, and Online Health Declaration System",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    id: 4,
    role: "Data Analytics and Automation Assistant",
    company: "Integrated Micro Electronics Inc.",
    period: "March 2021 - July 2022",
    description: [
      "Created a customizable report system that allows users to generate, display, and export reports",
      "Automated report generation processes",
      "Enhanced database queries to optimize performance, ensuring faster data retrieval",
      "Provided user-friendly documentation, training and technical support to foreign employees",
    ],
    technologies: ["PHP", "MySQL", "C#", "JavaScript"],
  },
  {
    id: 5,
    role: "PHP Developer (Laravel)",
    company: "City Government of Cabuyao",
    period: "August 2020 - January 2021",
    description: [
      "Built Scholarship Management System V2",
      "Developed Disaster Risk Reduction and Management System",
      "Created Cabuyao COVID Tracker for vaccinated individuals and cases",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
];

export const techStackIcons = [
  "PHP",
  "Laravel",
  "MySQL",
  "Redis",
  "RabbitMQ",
  "Next.js",
  "JavaScript",
  "Docker",
  "Git",
  "Swagger",
  "Jira",
  "Claude AI",
];
