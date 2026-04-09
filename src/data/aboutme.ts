export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Hippolyte Verninas",
  title: "PhD Student",
  institution: "INRIA",
  // Note that links work in the description
  description:
    "PhD student at INRIA MIND & INRIA THOTH working on physics-informed distributed data compression using deep learning.",
  email: "hippolyte.verninas@inria.fr",
  imageUrl: "/img/photo_profile.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=Z_uHjI8AAAAJ",
  githubUsername: "etyl",
  linkedinUsername: "hippolyte-verninas",
  twitterUsername: "hippolytever",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://inria.fr",
  // altName: "",
  // secretDescription: "I like dogs.",
};
