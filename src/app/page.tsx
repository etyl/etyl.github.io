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
  [Section.Education]: "Experience & Education",
  [Section.Publication]: "Publications",
  [Section.Experience]: "Experience",
  [Section.Portfolio]: "Projects",
};

export default function Home() {
  const latestPublication = publicationData[0];
  const latestProject = portfolioData[0];

  const availableSections = useMemo(() => {
    const sections: SectionFilter[] = [];
    const hasEducationOrExperience =
      educationData.length > 0 || experienceData.length > 0;

    if (aboutMe.description) {
      sections.push("about");
    }

    sectionOrder.forEach((sectionName) => {
      switch (sectionName) {
        case Section.News:
          if (newsData.length > 0) sections.push(sectionName);
          break;
        case Section.Education:
          if (hasEducationOrExperience) sections.push(sectionName);
          break;
        case Section.Publication:
          if (publicationData.length > 0) sections.push(sectionName);
          break;
        case Section.Experience:
          // Merged into the Education page as a combined section.
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
            {selectedSection === "about" && (
              <section>
                {aboutMe.description && (
                  <p
                    className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                  />
                )}

                {(latestPublication || latestProject) && (
                  <div>
                    <h2 className="font-serif text-l mb-8 tracking-wide uppercase mt-16 space-y-16">
                      Recent Work
                    </h2>
                    <div>
                      {latestPublication && (
                        <div>
                          <PublicationEntry publication={latestPublication} />
                        </div>
                      )}
                      <br />
                      <br />
                      {latestProject && (
                        <div>
                          <PortfolioEntry portfolio={latestProject} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
              (educationData.length > 0 || experienceData.length > 0) && (
                <section>
                  <div className="space-y-20">
                    {experienceData.length > 0 && (
                      <div>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry key={index} experience={experience} />
                          ))}
                        </div>
                      </div>
                    )}

                    {educationData.length > 0 && (
                      <div>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </div>
                    )}
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

            {selectedSection === Section.Portfolio && portfolioData.length > 0 && (
              <section>
                <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                  Projects
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
