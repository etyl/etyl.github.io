"use client";

import { useMemo, useState } from "react";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

type SectionFilter = Section | "about";

const sectionLabels: Record<SectionFilter, string> = {
  about: "About",
  [Section.News]: "News",
  [Section.Education]: "Education",
  [Section.Publication]: "Publications",
  [Section.Experience]: "Experience",
  [Section.Portfolio]: "Portfolio",
};

export default function Home() {
  const availableSections = useMemo(() => {
    const sections: SectionFilter[] = [];

    if (aboutMe.description) {
      sections.push("about");
    }

    sectionOrder.forEach((sectionName) => {
      switch (sectionName) {
        case Section.News:
          if (newsData.length > 0) sections.push(sectionName);
          break;
        case Section.Education:
          if (educationData.length > 0) sections.push(sectionName);
          break;
        case Section.Publication:
          if (publicationData.length > 0) sections.push(sectionName);
          break;
        case Section.Experience:
          if (experienceData.length > 0) sections.push(sectionName);
          break;
        case Section.Portfolio:
          if (portfolioData.length > 0) sections.push(sectionName);
          break;
        default:
          break;
      }
    });

    return sections;
  }, []);

  const [selectedSection, setSelectedSection] = useState<SectionFilter>(
    availableSections[0] ?? "about"
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection
                aboutMe={aboutMe}
                sectionMenu={{
                  sections: availableSections,
                  selectedSection,
                  sectionLabels,
                  onSelectSection: (section) =>
                    setSelectedSection(section as SectionFilter),
                }}
              />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {selectedSection === "about" && aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {selectedSection === Section.News && newsData.length > 0 && (
              <section>
                <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                  News
                </h2>
                <div className="space-y-12">
                  {newsData.map((news, index) => (
                    <div key={index}>
                      <NewsEntry news={news} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {selectedSection === Section.Education &&
              educationData.length > 0 && (
                <section>
                  <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                    Education
                  </h2>
                  <div className="space-y-12">
                    {educationData.map((education, index) => (
                      <EducationEntry key={index} education={education} />
                    ))}
                  </div>
                </section>
              )}

            {selectedSection === Section.Publication &&
              publicationData.length > 0 && (
                <section>
                  <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                    Publications
                  </h2>
                  <div className="space-y-12">
                    {publicationData.map((publication, index) => (
                      <div key={index}>
                        <PublicationEntry publication={publication} />
                        {index < publicationData.length - 1 && (
                          <div className="h-px bg-zinc-200 my-8" />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {selectedSection === Section.Experience &&
              experienceData.length > 0 && (
                <section>
                  <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                    Experience
                  </h2>
                  <div className="space-y-12">
                    {experienceData.map((experience, index) => (
                      <ExperienceEntry key={index} experience={experience} />
                    ))}
                  </div>
                </section>
              )}

            {selectedSection === Section.Portfolio && portfolioData.length > 0 && (
              <section>
                <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                  Portfolio
                </h2>
                <div className="space-y-12">
                  {portfolioData.map((portfolio, index) => (
                    <PortfolioEntry key={index} portfolio={portfolio} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
