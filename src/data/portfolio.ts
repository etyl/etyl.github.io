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
    description: "Main contributer on DiGeo, a python library for differentiable geometry processing, enabling seamless integration of geometric algorithms into deep learning pipelines.",
    technologies: ["Python", "PyTorch", "CUDA"],
    projectUrl: "https://digeo.readthedocs.io/",
    imageUrl: "/img/digeo.svg",
    codeUrl: "https://github.com/circle-group/DiGeo",
  },
  {
    title: "Benchopt",
    description: "Contributor on Benchopt, a python benchmarking framework for machine learning.",
    technologies: ["Python"],
    projectUrl: "https://benchopt.github.io/",
    imageUrl: "/img/logo_benchopt.png",
    codeUrl: "https://github.com/benchopt/benchopt",
  },
];
