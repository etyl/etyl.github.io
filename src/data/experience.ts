export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2026 - Present",
    company: "INRIA (MIND & THOTH)",
    title: "PhD in Computer Science",
    description: "Physics-informed deep learning for scientific data compression.",
    advisor: "Thomas Moreau & Hadrien Hendrikx",
  },
  {
    date: "Sep 2025 - Present",
    title: "Research Engineer",
    company: "INRIA (MIND)",
    description: "Engineer on Benchopt, a python benchmarking framework for machine learning.",
    advisor: "Thomas Moreau",
  },
  {
    date: "Summer 2023",
    title: "Research Intern",
    company: "CEA (MdlS)",
    description: "Hydrodynamic simulation compression using quantum computing inspired algorithms.",
    advisor: "Pascal Tremblin",
  },
];
