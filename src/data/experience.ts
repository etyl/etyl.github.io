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
    description: "Engineer on Benchopt, a python benchmarking framework for machine learning.",
    advisor: "Thomas Moreau",
    companyUrl: "https://inria.fr",
  },
  {
    date: "Summer 2023",
    title: "Research Intern",
    company: "CEA",
    description: "Internship at the Maison de la Simulation where I worked on hydrodynamic simulation using quantum computing inspired algorithms.",
    advisor: "Pascal Tremblin",
    companyUrl: "https://cea.fr",
  },
];
