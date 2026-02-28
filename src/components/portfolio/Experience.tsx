import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: (string | JSX.Element)[];
  skills: string[];
};

const ExpandedExperienceCard = ({ exp }: { exp: ExperienceItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg text-[#1d1d1f] dark:text-slate-100 font-semibold">
              {exp.company}
            </CardTitle>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-100 liquid-glass-tag px-3 py-1.5 rounded-full shrink-0">
              {exp.duration}
            </span>
          </div>
          <p className="text-sm font-medium text-[#0071e3] dark:text-sky-300">{exp.position}</p>
          <p className="text-xs text-[#86868b] dark:text-slate-300">{exp.location}</p>
          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline mt-2 w-fit">
              {open ? "View less" : "View details"}
              {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
        </div>
      </CardHeader>
      <CollapsibleContent>
        <CardContent className="pt-0">
          <ul className="space-y-4 mb-4">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-[#6e6e73] dark:text-slate-200 text-sm">
                <span className="text-[#0071e3] dark:text-sky-300 mt-1.5 text-xs shrink-0">●</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-lg text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  );
};

const experiences: ExperienceItem[] = [
  {
    company: "Goldman Sachs",
    position: "Software Engineering Analyst",
    duration: "July 2023 - Present",
    location: "Hyderabad, India",
    achievements: [
      <>
        Led a team of 5 to develop a service simulator featuring 20+ mocked external endpoints.
        <br />
        Impact: This initiative increased lower-environment automated <strong>test coverage by ~30%</strong>, significantly reducing
        dependency on third-party API availability during development and testing.
      </>,
      <>
        System performance optimization: Re-designed a loans data dashboard solution using server-side pagination and API
        optimization.
        <br />
        Impact: Reduced data <strong>load latency by 81.25% (8s to 1.5s)</strong> for datasets exceeding 20,000 loan records.
      </>,
      <>
        Implemented a document generation engine using SpEL and Word templates, supporting 15+ dynamic document types and{" "}
        <strong>eliminated manual template configuration effort</strong>.
        <br />
        Impact: Enabled users to generate loan documents and term sheets on demand without manual creation for each client.
      </>,
      <>
        Collaborated with Private Bank lending teams across 3+ workstreams to translate requirements into deliverables,
        ensuring <strong>requirement traceability</strong> and higher delivery precision.
      </>,
      <>
        Completed a Spring Batch proof-of-concept that benchmarked throughput from{" "}
        <strong>50k to 500k records per batch cycle</strong>, validating its suitability for future large-scale batch processing.
      </>,
      "Automated REST APIs and performed integration testing using Java, Postman, JBehave and Serenity BDD framework.",
      <>
        Developed and deployed Java-based microservices supporting <strong>Marcus business</strong> workflows.
      </>
    ],
    skills: ["React", "TypeScript", "Java 21", "Spring Framework", "REST APIs", "Postman", "JBehave", "Serenity BDD", "Java Microservices"]
  },
  {
    company: "Bain and Company",
    position: "Technology Solutions Group - Intern",
    duration: "Jan 2023 - Jun 2023",
    location: "Gurugram, India",
    achievements: [
      <>
        Engineered scalable test infrastructure using Selenium and Katalon, <strong>optimizing regression cycles by 40%</strong>
        and hardening system reliability through expanded coverage.
      </>,
      "Conducted deep-dive system audits across production releases, identifying and resolving 20 high-impact architectural flaws to ensure seamless end-user experiences.",
      <>
        Benchmarked <strong>system performance</strong> under high-concurrency loads (5,000+ users) using JMeter,
        architecting optimizations that eliminated bottlenecks and fortified system stability.
      </>,
      <>
        Streamlined the delivery lifecycle by integrating <strong>automated validation into CI/CD</strong> pipelines,
        accelerating release cycles by 5 hours through continuous integration.
      </>
    ],
    skills: ["Katalon Studio", "JMeter", "CI/CD", "Test Automation", "Zephyr", "Selenium"]
  },
  {
    company: "Widhya",
    position: "Machine Learning Intern",
    duration: "Feb 2021 - Mar 2021",
    location: "Remote",
    achievements: [
      "Collaborated on all phases of machine learning model development, from building to deployment and evaluation.",
      "Utilized Microsoft Azure and Python libraries, including pandas and matplotlib, to enhance data analysis.",
      "Engaged in projects focused on quantitative modelling and machine learning predictions to drive insights."
    ],
    skills: ["Pandas", "Microsoft Azure Basics", "Machine Learning", "Matplotlib"]
  },
  {
    company: "Desi ChalChitra",
    position: "Frontend Developer Intern",
    duration: "Jul 2020 - Dec 2020",
    location: "Delhi, India",
    achievements: [
      "Developed responsive web designs for 32 platforms, enhancing user experience across devices.",
      "Translated UI/UX design mockups into functional code, bringing visual elements to life.",
      "Collaborated with the founder to introduce engaging blogs, contributing to a 49% growth in company visibility."
    ],
    skills: ["Frontend Development", "Responsive Design", "UI/UX", "WordPress", "Domain Hosting"]
  },
  {
    company: "BNK Alloys",
    position: "UI/UX Design Intern",
    duration: "Feb 2020 - Apr 2020",
    location: "Contract | Delhi, India",
    achievements: [
      "Developed wireframes and prototypes using AdobeXD, transforming concepts into functional digital products.",
      "Planned site designs, functionality, and navigation to meet project requirements effectively.",
      "Created visually appealing brochures and cards enhancing brand communication."
    ],
    skills: ["Adobe XD", "Figma", "Illustrator", "Wireframing", "Prototyping"]
  }
];
const Experience = () => {
  const isMobile = useIsMobile();

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-[#6e6e73] dark:text-slate-200 max-w-2xl mx-auto">
            Building Scalable Software Solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70"
            >
              {isMobile ? (
                <ExpandedExperienceCard exp={exp} />
              ) : (
                <>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <CardTitle className="text-xl text-[#1d1d1f] dark:text-slate-100 font-semibold">
                          {exp.position}
                        </CardTitle>
                        <p className="text-lg font-medium text-[#0071e3] dark:text-sky-300 mt-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-[#86868b] dark:text-slate-300 mt-0.5">{exp.location}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-100 liquid-glass-tag px-4 py-2 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#6e6e73] dark:text-slate-200">
                          <span className="text-[#0071e3] dark:text-sky-300 mt-1.5 text-xs">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-xl text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



