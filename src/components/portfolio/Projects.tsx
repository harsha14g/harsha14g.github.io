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

const Projects = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: "Lorem Ipsum Project Alpha",
      period: "Lorem 2026",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
      status: "Lorem",
      type: "Ipsum",
      url: "www.google.com"
    },
    {
      title: "Lorem Ipsum Project Beta",
      period: "Ipsum 2026",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tech: ["Consectetur", "Adipiscing", "Elit", "Tempor"],
      status: "Dolor",
      type: "Sit",
      url: "www.google.com"
    },
    {
      title: "Lorem Ipsum Project Gamma",
      period: "Dolor 2025",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tech: ["Incididunt", "Labore", "Magna", "Aliqua"],
      status: "Amet",
      type: "Lorem",
      url: "www.google.com"
    },
    {
      title: "Lorem Ipsum Project Delta",
      period: "Sit 2025",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tech: ["Excepteur", "Occaecat", "Cupidatat", "Proident"],
      status: "Tempor",
      type: "Dolor",
      url: "www.google.com"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[68rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-[#6e6e73] dark:text-slate-200 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet
          </p>
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
                        <span className="text-xs font-medium px-2.5 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-full shrink-0">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-[#86868b] dark:text-slate-300">
                        <span>{project.period}</span>
                        <span className="text-[#0071e3] dark:text-sky-300 font-medium">{project.type}</span>
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
                          <span className="text-sm font-medium text-[#0071e3] dark:text-sky-300">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-3 py-1.5 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-full">
                        {project.status}
                      </span>
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


