export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SmartAttend",
    description:
      "A GPS attendance platform for modern campuses—landing page plus mobile app with dynamic QR check-in, geofencing, and a web dashboard for lecturers and admins.",
    link: "www.smartattend.co",
    tags: ["Landing Page", "Mobile App", "GPS"],
    featured: true,
  },
  {
    title: "KlarElle",
    description:
      "An elegant e-commerce store for occasion dresses and evening gowns, built for a refined shopping experience.",
    link: "www.klarelle.store",
    tags: ["E-commerce", "Fashion", "Store"],
    featured: true,
  },
  {
    title: "Shopora",
    description:
      "An all-in-one e-commerce platform for modern sellers—bring your own payment gateway, keep 100% of revenue, and automate operations.",
    link: "shopora.space",
    tags: ["E-commerce", "SaaS", "Platform"],
    featured: true,
  },
  {
    title: "Grade Guard",
    description:
      "A comprehensive grading and scanning platform designed for seamless academic and vendor performance tracking.",
    link: "grade-guard-flame.vercel.app",
    tags: ["React", "Typescript", "Scanning"],
  },
  {
    title: "Journee Suites",
    description:
      "A luxury boutique stay showcase featuring an immersive 360° virtual tour and premium architectural storytelling.",
    link: "journee-suites.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "360° Tour"],
    featured: true,
  },
  {
    title: "Okissibiri Technology",
    description:
      "A modern technology solutions website delivering innovation and digital services.",
    link: "okissibiri-technology.vercel.app",
    tags: ["Next.js", "Vercel", "Website"],
  },
  {
    title: "UCMAS Management System",
    description:
      "A robust administrative portal for managing student records, grading, and operational workflows with precision.",
    link: "ucmas-cape-coast-management-system.vercel.app",
    tags: ["React", "Admin Portal", "Workflow"],
  },
  {
    title: "Dev with Mercedes Portfolio",
    description:
      "A premium digital archive showcasing the fusion of high-performance engineering and architectural design.",
    link: "chelles-portfolio.vercel.app",
    tags: ["React", "Motion", "Premium UI"],
  },
  {
    title: "Guan Web",
    description:
      "A cultural heritage portal designed to preserve and showcase the linguistic and historical legacy of the Guan people.",
    link: "guan-web.vercel.app",
    tags: ["React", "Motion", "Architecture"],
  },
  {
    title: "Sip Bite App",
    description:
      "A comprehensive food and beverage discovery platform with seamless ordering and discovery features.",
    link: "sip-bite-app.vercel.app",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Bridge View Pharmacy",
    description:
      "Modern pharmaceutical portal focused on accessibility, prescription management, and healthcare education.",
    link: "bridge-view-pharmacy.vercel.app",
    tags: ["Next.js", "Firebase", "Design"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort((a, b) => a.localeCompare(b));
