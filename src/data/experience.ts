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
    date: "2024-2025",
    title: "Research Engineer",
    company: "INRIA",
    // description: "Worked on improving robustness of large language models to distribution shifts",
    advisor: "Thomas Moreau",
    companyUrl: "https://inria.fr",
  },
  {
    date: "Summer 2023",
    title: "Research Intern",
    company: "CEA",
    // description: "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    advisor: "Pascal Tremblin",
    companyUrl: "https://cea.fr",
  },
];
