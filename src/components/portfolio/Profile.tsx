import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const goToAbout = () => navigate("/about");

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative profile-hero-stage"
    >
      <div className="profile-atmosphere" aria-hidden="true">
        <div className="profile-orb profile-orb--a" />
        <div className="profile-orb profile-orb--b" />
        <div className="profile-orb profile-orb--c" />
        <div className="profile-grid" />
      </div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="pt-5 sm:pt-6 mb-4 opacity-0 animate-fade-in-up delay-100 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:mb-6">
          <img
            id="character-source"
            src="/harsha_profile.jpg"
            alt="Harsha Gupta"
            className="w-[138px] h-[138px] sm:w-[161px] sm:h-[161px] rounded-full object-cover object-center flex-shrink-0 border-4 border-white/85 dark:border-slate-700/80 shadow-[0_12px_34px_-14px_rgba(30,64,175,0.35)] dark:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.75)]"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1d1d1f] dark:text-white tracking-tight opacity-0 animate-fade-in-up delay-200 transition-none">
            Harsha Gupta
          </h1>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#86868b] dark:text-white font-normal mb-8 opacity-0 animate-fade-in-up delay-300 transition-none">
          Software Engineer
        </h2>
        <div className="text-lg sm:text-xl text-[#6e6e73] dark:text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-400">
          <p className="md:whitespace-nowrap">
            Engineering resilient enterprise solutions with Java 21, Spring Boot, TypeScript, and React.
          </p>
          <p>
            Actively exploring AWS for cloud-native scaling and the integration of AI agents.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={goToAbout}
            size="lg"
            className="cyberpunk-cta px-8 py-3 text-base font-medium bg-[#1d1d1f] hover:bg-[#424245] dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 text-white rounded-full transition-all duration-300"
          >
            Explore My Work
          </Button>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 text-[#1d1d1f] dark:text-slate-100 transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="https://github.com/harsha14g" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 text-[#1d1d1f] dark:text-slate-100 transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="https://www.linkedin.com/in/gupta-harsha/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 text-[#1d1d1f] dark:text-slate-100 transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="mailto:harsha14gupta@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
