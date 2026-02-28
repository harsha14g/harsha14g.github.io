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
  { text: "Gen AI academy APAC Edition by Google", ongoing: true },
  { text: "Foundations of User Experience (UX) Design by Google", ongoing: false },
  { text: "Search Engine Optimization (SEO) on Udemy", ongoing: false },
];

const Education = () => {
  const isMobile = useIsMobile();

  return (
    <section id="education" className="pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">Education</h2>
          <p className="text-[#6e6e73] dark:text-slate-200 max-w-2xl mx-auto">
            'Cause learning never stops, right? Here’s a snapshot of my academic journey and educational background.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70">
            {isMobile ? (
              <Collapsible defaultOpen={false}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-slate-100">Education</h3>
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
                          <span className="text-[#6e6e73] dark:text-slate-200 text-sm">
                            {achievement.text}
                            {achievement.ongoing && (
                              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 ml-2 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                                Ongoing
                              </span>
                            )}
                          </span>
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
                      <p className="text-[#0071e3] dark:text-sky-300 font-medium mt-4">Queen Mary's School, Northend</p>
                      <p className="text-sm text-[#6e6e73] dark:text-slate-200 mt-1">AISSCE</p>
                      <p className="text-sm text-[#6e6e73] dark:text-slate-200">Grade: 93%</p>
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
                      <span className="text-[#6e6e73] dark:text-slate-200">
                        {achievement.text}
                        {achievement.ongoing && (
                          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 ml-2 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                            Ongoing
                          </span>
                        )}
                      </span>
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
                  <p className="text-[#0071e3] dark:text-sky-300 font-medium mt-4">Queen Mary's School, Northend</p>
                  <p className="text-sm text-[#6e6e73] dark:text-slate-200 mt-1">AISSCE</p>
                  <p className="text-sm text-[#6e6e73] dark:text-slate-200">Grade: 93%</p>
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

export default Education;

