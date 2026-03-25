export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2026—Present",
    institution: "INRIA",
    degree: "Ph.D. in Computer Science",
    advisor: "Thomas Moreau & Hadrien Hendrikx",
  },
  {
    year: "2024—2025",
    institution: "Imperial College London",
    degree: "MSc in Advanced Computing",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2022—2025",
    institution: "Télécom Paris",
    degree: "Engineering Degree in Computer Science",
  }
];
