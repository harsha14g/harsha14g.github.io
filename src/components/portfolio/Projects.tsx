import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, ChevronDown } from "lucide-react";

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

type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  status?: string;
  type?: string;
  url: string;
};

const Projects = () => {
  const isMobile = useIsMobile();

  const projects: Project[] = [
    {
      title: "Incident Management System",
      period: "2026",
      description:
        "Engineering teams often face recurring incidents but lack an effective way to learn from past resolutions. This project builds an AI-powered incident knowledge system that ingests reports, generates structured summaries, and enables semantic search over historical incidents. It uses Spring Boot (Java 17), MongoDB with vector embeddings, Gemini API for AI processing, and a React + TypeScript frontend, deployable to AWS.",
      tech: ["Spring Boot", "Java 17", "MongoDB", "Gemini API", "Semantic Search", "React", "TypeScript", "AWS"],
      status: "Ongoing",
      type: "",
      url: "https://github.com/harsha14g/Incident-Postmortem-System/tree/harsha-main",
    },
    {
      title: "Revamping Healthcare with Web3.0",
      period: "2023",
      description:
        "Designed and developed a decentralized organ transplant matching engine leveraging Ethereum smart contracts to automate secure donor-recipient pairing and ensure EMR traceability via an immutable blockchain. I engineered the multi-tiered dashboard system to manage complex authentication and cross-functional approval workflows, ensuring high-integrity data access control and system-wide visibility.",
      tech: ["Blockchain","Ethereum", "Smart Contracts", "Solidity", "Metamask", "Ganache"],
      status: "Publication",
      type: "",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4381964",
    },
    {
      title: "Rotaract Website",
      period: "2022",
      description:
        "Developed a community service platform built with React and WordPress to help more people find ways to give back. It's been a rewarding project to scale, so far, it has hit over 200k lifetime views and successfully connected 500+ volunteers to meaningful causes.",
      tech: ["React", "WordPress", "Community Platform", "GoDaddy"],
      status: "Live",
      type: "",
      url: "https://rachyderabad3150.netlify.app/",
    },
    {
      title: "Snapchat Lenses",
      period: "2022",
      description:
        "I trained a facial recognition ML model and used Lens Studio to build AR lenses that went live on Snapchat, racking up 195k+ views and reaching over 156k users. It was a fun way to bridge machine learning and interactive design, seeing a project go from a local build to a viral digital experience.",
      tech: ["Machine Learning", "Facial Recognition", "Lens Studio", "AR"],
      status: "Published",
      type: "",
      url: "https://github.com/harsha14gupta/Snapchat-Lenses",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[68rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-[#6e6e73] dark:text-slate-200 max-w-2xl mx-auto">Here are some of my projects. I've worked on a variety of things, from AI-powered systems to decentralized applications and AR experiences.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70"
            >
              {isMobile ? (
                <Collapsible defaultOpen={false}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-base text-[#1d1d1f] dark:text-slate-100 font-semibold">
                          {project.title}
                        </CardTitle>
                        {project.status && (
                          <span className="text-xs font-medium px-2.5 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-full shrink-0">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-[#86868b] dark:text-slate-300">
                        <span>{project.period}</span>
                        {project.type && (
                          <span className="text-[#0071e3] dark:text-sky-300 font-medium">{project.type}</span>
                        )}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline w-fit"
                        >
                          Visit <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline w-fit">
                          View details
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                  </CardHeader>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-[#6e6e73] dark:text-slate-200 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[#1d1d1f] dark:text-slate-100 font-semibold">
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#0071e3] dark:text-sky-300 transition-colors inline-flex items-center gap-1.5 group"
                            >
                              {project.title}
                              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            project.title
                          )}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 mt-2">
                          <span className="text-sm text-[#86868b] dark:text-slate-300">{project.period}</span>
                          {project.type && (
                            <span className="text-sm font-medium text-[#0071e3] dark:text-sky-300">{project.type}</span>
                          )}
                        </div>
                      </div>
                      {project.status && (
                        <span className="text-xs font-medium px-3 py-1.5 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-full">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6e6e73] dark:text-slate-200 mb-4">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline mb-4"
                      >
                        Visit project <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-xl text-xs font-medium"
                        >
                          {tech}
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

export default Projects;

