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

const achievements = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
];

const Achievements = () => {
  const isMobile = useIsMobile();

  return (
    <section id="achievements" className="pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            Achievements
          </h2>
          <p className="text-[#6e6e73] dark:text-slate-200 max-w-2xl mx-auto">
            Highlights and milestones
          </p>
        </div>

        <div className="space-y-6">
          <Card className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70">
            {isMobile ? (
              <Collapsible defaultOpen={false}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-slate-100">Achievements & Education</h3>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] dark:text-sky-300 hover:underline">
                        View details
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                </CardContent>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-6">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#0071e3] dark:text-sky-300 mt-1 text-sm shrink-0">&#10022;</span>
                          <span className="text-[#6e6e73] dark:text-slate-200 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/70">
                      <h4 className="font-semibold text-[#1d1d1f] dark:text-slate-100 mb-2">Education</h4>
                      <p className="text-[#0071e3] dark:text-sky-300 font-medium">Guru Gobind Singh Indraprastha University</p>
                      <p className="text-sm text-[#6e6e73] dark:text-slate-200 mt-1">
                        Bachelor of Technology in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-[#6e6e73] dark:text-slate-200">CGPA: 9.5/10 | Rank: 14</p>
                      <p className="text-xs text-[#86868b] dark:text-slate-300 mt-2">Delhi, India</p>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0071e3] dark:text-sky-300 mt-1 text-sm">&#10022;</span>
                      <span className="text-[#6e6e73] dark:text-slate-200">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/70">
                  <h4 className="font-semibold text-[#1d1d1f] dark:text-slate-100 mb-2">Education</h4>
                  <p className="text-[#0071e3] dark:text-sky-300 font-medium">Guru Gobind Singh Indraprastha University</p>
                  <p className="text-sm text-[#6e6e73] dark:text-slate-200 mt-1">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <p className="text-sm text-[#6e6e73] dark:text-slate-200">CGPA: 9.5/10 | Rank: 14</p>
                  <p className="text-xs text-[#86868b] dark:text-slate-300 mt-2">Delhi, India</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;


