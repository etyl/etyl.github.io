export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2027",
    conference: "Under review at ICLR",
    title: "LATEC: Learned Axial Tensor Compression for High-Dimensional Scientific Data",
    authors: "Hippolyte Verninas, Hadrien Hendrikx, Thomas Moreau",
    paperUrl: "/papers/latec.pdf",
    tldr: "We introduce LATEC, an error-bounded compressor with a dimension-agnostic learned GNN predictor. Pretrained on synthetic 2D and 4D fields, a single model compresses scientific data from 3D to 5D while keeping pointwise error guarantees, achieving the best average compression ratio and the best ratio on 9 of 13 scientific fields.",
  },
  {
    year: "2026",
    conference: "CVPR",
    title: "Parallelised Differentiable Straightest Geodesics for 3D Meshes",
    authors: "Hippolyte Verninas, Caner Korkmaz, Stefanos Zafeiriou, Tolga Birdal, Simone Foti",
    paperUrl: "https://arxiv.org/pdf/2603.15780",
    codeUrl: "https://github.com/circle-group/DSG-Applications",
    // bibtex: "https://arxiv.org/abs/2603.15780.bib",
    tldr: "We propose a novel method for differentiating straightest geodesics on 3D meshes, enabling new applications in geometry processing and computer vision. Building on this approach, we develop new convolutional layers for deep learning on meshes, introduce a method for flow matching on meshes, and design a second-order optimiser tailored to mesh-based representations.",
    // imageUrl: "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  }
];
