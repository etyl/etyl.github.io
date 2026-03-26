import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

interface ProfileLink {
  href: string;
  label: string;
  Icon: LucideIcon;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  const profileLinks: ProfileLink[] = [
    {
      href: `mailto:${aboutMe.email}`,
      label: "Email",
      Icon: Mail,
    },
    ...(aboutMe.googleScholarUrl
      ? [
          {
            href: aboutMe.googleScholarUrl,
            label: "Google Scholar",
            Icon: GraduationCap,
          },
        ]
      : []),
    ...(aboutMe.twitterUsername
      ? [
          {
            href: `https://twitter.com/${aboutMe.twitterUsername}`,
            label: "Twitter",
            Icon: Twitter,
          },
        ]
      : []),
    ...(aboutMe.githubUsername
      ? [
          {
            href: `https://github.com/${aboutMe.githubUsername}`,
            label: "GitHub",
            Icon: Github,
          },
        ]
      : []),
    ...(aboutMe.linkedinUsername
      ? [
          {
            href: `https://www.linkedin.com/in/${aboutMe.linkedinUsername}`,
            label: "LinkedIn",
            Icon: Linkedin,
          },
        ]
      : []),
    ...(aboutMe.blogUrl
      ? [
          {
            href: aboutMe.blogUrl,
            label: "Blog",
            Icon: ArrowUpRight,
          },
        ]
      : []),
    ...(aboutMe.cvUrl
      ? [
          {
            href: aboutMe.cvUrl,
            label: "CV",
            Icon: FileText,
          },
        ]
      : []),
  ];

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        {profileLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-4">
            {profileLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
