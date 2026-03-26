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
  title: "PhD Candidate",
  institution: "INRIA",
  // Note that links work in the description
  description:
    "I'm a PhD candidate at INRIA MIND working on distributed data compression using machine learning.",
  email: "hippolyte.verninas [at] inria.fr",
  // imageUrl: "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "etyl",
  linkedinUsername: "hippolyte-verninas",
  twitterUsername: "hippolytever",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://inria.fr",
  // altName: "",
  // secretDescription: "I like dogs.",
};
