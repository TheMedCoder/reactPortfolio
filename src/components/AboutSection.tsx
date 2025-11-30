import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    { title: "Medical practitioner" },
    { title: "Website Development" },
    { title: "Mini Apps Development" },
];

const stats = [
    { value: "4", symbol: "+", label: "Completed\nProjects" },
    { value: "95", symbol: "%", label: "Client\nsatisfaction" },
    { value: "1", symbol: "+", label: "Year of\nexperience" },
];

export default function AboutSection() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-24 pt-6 pb-18 md:py-24 xl:py-48 justify-around"
            id="about"
        >
            {/* Left Side */}
            <div className="pl-8 relative" data-aos="fade-right">
                <div className="absolute -left-2.5 top-10 bottom-1/4 w-1 bg-sky-500 animate-pulse"></div>

                {services.map((service, i) => (
                    <div key={i} className="relative mb-12">
                        <div className="absolute -left-12 top-6 w-4 h-4 bg-sky-500 rounded-full animate-pulse"></div>

                        <div className="flex items-center gap-4 group">
                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 transition-all group-hover:border-sky-500 text-slate-300">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {i === 0 ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-activity-icon lucide-activity"
                                            x="0"
                                            y="0"
                                        >
                                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                                        </svg>
                                    ) : i === 1 ? (
                                        <>
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1.5" />
                                            <line x1="8" y1="21" x2="16" y2="21" strokeWidth="1.5" />
                                            <line x1="12" y1="17" x2="12" y2="21" strokeWidth="1.5" />
                                        </>
                                    ) : (
                                        <>
                                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="1.5" />
                                            <line x1="12" y1="18" x2="12" y2="18" strokeWidth="1.5" />
                                        </>
                                    )}
                                </svg>
                            </div>
                            <h3 className="text-xl text-slate-200 font-light transition-colors group-hover:text-sky-500">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side */}
            <div>
                <h1 className="text-6xl font-bold text-white mb-6">About me</h1>

                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    <span className="font-bold text-sky-400">From doctor to developer</span> — I
                    turned my passion for systems and problem-solving into code. As{" "}
                    <span className="font-bold text-slate-300">
                        a proud graduate from Iraq Tech School
                    </span>
                    , I now build clean, structured apps with modern sophisticated front and
                    back-end technologies, driven by the same precision I once used in
                    medicine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-start justify-center mb-3">
                                <span className="text-5xl font-bold text-white">{stat.value}</span>
                                <span className="text-3xl font-bold text-sky-500 ml-1">
                                    {stat.symbol}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm whitespace-pre-line leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
