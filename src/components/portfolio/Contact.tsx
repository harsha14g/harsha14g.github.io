import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import type { SVGProps } from "react";

const MediumIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <ellipse cx="5.5" cy="12" rx="3.2" ry="6.2" />
    <ellipse cx="12.7" cy="12" rx="3" ry="5.8" />
    <ellipse cx="18.9" cy="12" rx="1.8" ry="4.4" />
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: MediumIcon,
      label: "Medium",
      value: "medium.com/@harshagupta14",
      href: "https://medium.com/@harshagupta14"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8585965006",
      href: "tel:+918585965006"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gupta-harsha/",
      href: "https://www.linkedin.com/in/gupta-harsha/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/harsha14g",
      href: "https://github.com/harsha14g"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-slate-100 mb-4 tracking-tight">
            Get In Touch
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="contact-icon-chip p-3 bg-slate-100 dark:bg-slate-800/80 rounded-full group-hover:bg-slate-200/80 dark:group-hover:bg-slate-700/80 transition-colors">
                      <Icon className="contact-icon h-6 w-6 text-[#1d1d1f] dark:text-slate-100" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#1d1d1f] dark:text-slate-100">{contact.label}</p>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#0071e3] dark:text-sky-300 hover:underline break-all text-sm"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <ExternalLink className="contact-external-icon h-4 w-4 text-[#86868b] dark:text-slate-300 group-hover:text-[#1d1d1f] dark:group-hover:text-slate-100 transition-colors flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block liquid-glass card-hover rounded-2xl border-white/70 dark:border-slate-700/70">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-slate-100 mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-[#6e6e73] dark:text-slate-200 mb-6 max-w-md mx-auto">
                Always open to exploring new initiatives or exchanging insights on the evolving tech landscape, would love to hear from you!
              </p>
              <Button
                size="lg"
                className="cyberpunk-cta px-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed] dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 text-white font-medium transition-all duration-300"
                asChild
              >
                <a href="mailto:harsha14gupta@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send a Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-[#86868b] dark:text-slate-300">
            © 2026 Harsha Gupta. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
