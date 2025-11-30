import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface CVModalProps {
  show: boolean;
  onClose: () => void;
  pdfPath: string;
}

const CVModal = ({ show, onClose, pdfPath }: CVModalProps) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">My CV</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          <iframe
            src={"src/assets/SajjadAhmedCV.pdf"}
            className="w-full h-full"
            title="CV PDF"
          />
        </div>
      </div>
    </div>
  );
};

// Main Hero Component
export default function HeroSection() {
  const [skills] = useState([
    { name: "HTML", icon: "devicon:html5" },
    { name: "CSS", icon: "devicon:css3" },
    { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Svelte", icon: "logos:svelte-icon" },
    { name: "Vue", icon: "logos:vue" },
    { name: "React", icon: "logos:react" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "SQL", icon: "devicon:mysql" },
    { name: "C#", icon: "devicon:csharp" },
    { name: ".NET", icon: "devicon:dotnetcore" },
  ]);

  const [showCVModal, setShowCVModal] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const basePath = '/';

  // Title animation with GSAP
  useGSAP(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      const chars = text.split('');
      titleRef.current.innerHTML = chars.map((char: string) =>
        `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      const charElements = titleRef.current.querySelectorAll('span');
      gsap.from(charElements, {
        opacity: 0,
        y: 10,
        stagger: 0.09,
        duration: 1,
        ease: "power3.out",
      });
    }
    // Welcome animation trigger
    setTimeout(() => setWelcomeVisible(true), 100);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Duplicate skills for seamless marquee
  const marqueeSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <main className="mb-16 xl:mb-0 bg-gray-950 text-white mt-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24 px-6 md:px-12 lg:px-24 md:pt-20">
        {/* Left Content */}
        <div className="flex-1 space-y-8 pt-12">
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              <div className="flex">
                <div
                  className={`transition-all duration-1000 ${welcomeVisible ? 'translate-x-0 opacity-100' : '-translate-x-48 opacity-0'
                    }`}
                >
                  Welcome
                </div>
                <span className="text-sky-500 animate-bounce-dot drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                  .
                </span>
              </div>
            </h1>
            <div className="flex items-center gap-4 mb-4 xl:mb-8 relative">
              <div className="hidden lg:block h-1 bg-sky-500 absolute left-0 -translate-x-full w-screen drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              <div
                className="h-1 w-20 md:w-10 xl:w-20 bg-sky-500 relative drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-fade-right"
              />
              <p className="text-2xl md:text-3xl text-gray-300">I'm Sajjad</p>
            </div>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-8">
              Software Developer
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 md:mb-0">
            <button
              onClick={scrollToContact}
              className="group relative overflow-hidden rounded p-0.5 focus:outline-none hover:scale-102 active:scale-95 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform"
            >
              <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#4FA3E0_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-slate-950 px-8 py-3 font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 relative z-10">
                Get in Touch
              </span>
            </button>

            <button
              onClick={() => setShowCVModal(true)}
              className="px-8 py-4 border-2 border-sky-500 hover:bg-sky-500/10 text-white font-semibold rounded transition-colors cursor-pointer"
            >
              View CV
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative overflow-visible">


            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-10 z-0 animate-spin-slow-reverse"
              style={{
                background: 'conic-gradient(from 0deg, #38bdf8, #818cf8, #f472b6, #38bdf8)'
              }}
            />

            {/* Circle background */}
            <div className="absolute -inset-5 lg:-inset-6 xl:-inset-6 bottom-1 w-72 h-72 md:w-82 md:h-82 xl:w-105 xl:h-105 rounded-full border-6 border-sky-500/80 drop-shadow-blue-400 drop-shadow-lg z-0 animate-[spin_1.5s_infinite_linear]" />

            {/* Image in front */}
            <img
              src="src/assets/Sajjad_Ahmed.png"
              alt="Sajjad"
              className="relative w-64 h-auto md:w-72 xl:w-96 md:h-auto object-cover z-10 drop-shadow-xl max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="xl:py-4 bg-slate-800 overflow-hidden flex relative z-10">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-800 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-800 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-8 py-4 animate-scroll whitespace-nowrap hover:pause">
          {marqueeSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center justify-center min-w-[60px] md:min-w-20"
            >
              <span
                className="tracking-wide hover:text-sky-300 transition-all cursor-default hover:scale-110"
                title={skill.name}
              >
                <Icon icon={skill.icon} className="w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400/80 animate-pulse-slow drop-shadow-[0_0_16px_rgba(56,189,248,0.6)]" />
      </div>

      {/* CV Modal */}
      <CVModal
        show={showCVModal}
        onClose={() => setShowCVModal(false)}
        pdfPath={`${basePath}SajjadAhmedCV.pdf`}
      />

      {/* Modal and animation styles should be moved to a CSS/SCSS file or use Tailwind classes. Removed <style jsx> for compatibility. */}
    </main>
  );
}