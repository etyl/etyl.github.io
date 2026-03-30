export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "DiGeo",
    description: "",
    technologies: ["Python", "PyTorch", "CUDA"],
    projectUrl: "https://digeo.readthedocs.io/",
    imageUrl: "/img/digeo.svg",
    codeUrl: "https://github.com/circle-group/DiGeo",
  },
];
