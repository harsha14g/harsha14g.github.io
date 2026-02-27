import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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

const About = () => {
  const isMobile = useIsMobile();
  const skills = {
    "Currently Exploring": [
      "Cloud: AWS (EC2, Lambda, SQS), Document DB, AWS Migration",
      "AI: Semantic Search, LLMs (OpenAI, BERT), RAG, Agentic AI"
    ],
    "System Design & Fundamentals": [
      "Object-oriented Programming", "Low-level design", "Data Structures and Algorithms", "Microservice Architecture"
    ],
    "Languages": ["Java 21", "C++", "TypeScript", "JavaScript"],
    "Frameworks & Libraries": [
      "React", "SpringBoot", "Redux", "Spring Batch", "Node.js", "MobX", "FastAPI", "GraphQL"
    ],
    "Data & Databases": ["MongoDB", "MySQL", "Elasticsearch", "RDBMS"],
    "Tools & DevOps": [
      "Docker", "Kubernetes", "CI/CD", "Hashicorp Vault", "Git"
    ],
    "Testing & QA": [
      "JMeter", "Katalon Studio", "Serenity BDD", "Postman"
    ],
    "Professional Skills": [ 
      "Agile/Scrum", "Cross-team Collaboration", "Peer Mentoring"
    ]
};

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="space-y-12">
          <div className="space-y-6 p-6 sm:p-8">
            <p className="text-[#6e6e73] dark:text-slate-200 leading-relaxed text-lg">
              As a software engineer with three years of experience, I'm still surprised by how satisfying it feels to solve a
              tough problem in my code. It really does feel like working through puzzles, just not the kind most people
              picture. Building a feature or writing a script to accomplish a task comes with challenges at every level. Some
              are big-picture problems, like figuring out how a change fits into the overall system design. Others are more
              focused, like tracing the root cause of a subtle bug or optimizing a piece of logic.
            </p>
            <p className="text-[#6e6e73] dark:text-slate-200 leading-relaxed text-lg">
              Whenever I crack one of those problems, there's a small rush of satisfaction. Being able to turn ideas into
              something functional using just a text editor and a compiler, and applying concepts I've picked up from
              experience and reading - continues to deepen my interest in software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70 h-full"
              >
                {isMobile ? (
                  <Collapsible defaultOpen={false}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-[#1d1d1f] dark:text-slate-100 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-300">
                          {category}
                        </h4>
                        <CollapsibleTrigger asChild>
                          <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline">
                            View skills
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {skillList.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-lg text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </CardContent>
                  </Collapsible>
                ) : (
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-[#1d1d1f] dark:text-slate-100 mb-3 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 liquid-glass-tag text-slate-600 dark:text-slate-100 rounded-xl text-sm font-medium transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
