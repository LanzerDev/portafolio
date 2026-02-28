'use client';

import { useLanguage } from '../i18n/LanguageContext';
import GlassCard from './animations/GlassCard';
import {
    SiNextdotjs, SiReact, SiAngular, SiHtml5, SiCss3, SiJavascript,
    SiTailwindcss, SiMui, SiBootstrap, SiSupabase, SiExpress,
    SiPython, SiFlask, SiSpring, SiPhp, SiSharp, SiCplusplus,
    SiPostgresql, SiMongodb, SiGit, SiGithub, SiGitlab, SiGithubactions, SiJquery
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface ExperienceItemType {
    date: string;
    title: string;
    company: string;
    location?: string;
    description: string;
    achievements?: string[];
    techStack?: string[];
}

// Tech icons mapping (matching Skills.tsx)
const techIcons: Record<string, { icon: IconType; color: string }> = {
    'Next.js': { icon: SiNextdotjs, color: '#ffffff' },
    'React': { icon: SiReact, color: '#61DAFB' },
    'Angular': { icon: SiAngular, color: '#DD0031' },
    'HTML5': { icon: SiHtml5, color: '#E34F26' },
    'CSS3': { icon: SiCss3, color: '#1572B6' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'TailwindCSS': { icon: SiTailwindcss, color: '#06B6D4' },
    'Material UI': { icon: SiMui, color: '#007FFF' },
    'Bootstrap': { icon: SiBootstrap, color: '#7952B3' },
    'Supabase': { icon: SiSupabase, color: '#3FCF8E' },
    'Express.js': { icon: SiExpress, color: '#ffffff' },
    'Python': { icon: SiPython, color: '#3776AB' },
    'Flask': { icon: SiFlask, color: '#ffffff' },
    'Java': { icon: FaJava, color: '#ED8B00' },
    'Spring Boot': { icon: SiSpring, color: '#6DB33F' },
    'PHP': { icon: SiPhp, color: '#777BB4' },
    'C#': { icon: SiSharp, color: '#239120' },
    'C++': { icon: SiCplusplus, color: '#00599C' },
    'SQL': { icon: FaDatabase, color: '#336791' },
    'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Git': { icon: SiGit, color: '#F05032' },
    'GitHub': { icon: SiGithub, color: '#ffffff' },
    'GitLab': { icon: SiGitlab, color: '#FC6D26' },
    'CI/CD': { icon: SiGithubactions, color: '#2088FF' },
    'jQuery': { icon: SiJquery, color: '#0769AD' },
};

export default function ExperienceSection() {
    const { t } = useLanguage();
    const experiences = t.experience as ExperienceItemType[];

    const getTechIcon = (tech: string) => {
        const techData = techIcons[tech];
        if (techData) {
            const IconComponent = techData.icon;
            return <IconComponent className="w-3 h-3" style={{ color: techData.color }} />;
        }
        return null;
    };

    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 hidden md:block" />

            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    /* Eliminado el motion.div externo wrapper — GlassCard ya tiene
                       su propio whileInView. Elimina la doble capa de Framer Motion */
                    <div
                        key={idx}
                        className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
                    >
                        {/* Timeline dot */}
                        <div className={`absolute top-6 w-4 h-4 rounded-full bg-primary-500 glow-primary hidden md:block ${idx % 2 === 0 ? 'right-0 translate-x-1/2 mr-[-8px]' : 'left-0 -translate-x-1/2 ml-[-8px]'}`} />

                        {/* GlassCard maneja la animación de entrada — no necesita wrapper motion extra */}
                        <GlassCard delay={idx * 0.07}>
                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-primary-400 font-medium">{exp.company}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm text-gray-400">{exp.date}</span>
                                    {exp.location && (
                                        <p className="text-xs text-gray-500">{exp.location}</p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-4">{exp.description}</p>

                            {/* Achievements */}
                            {exp.achievements && exp.achievements.length > 0 && (
                                <ul className="space-y-2 mb-4">
                                    {exp.achievements.map((achievement, aIdx) => (
                                        <li key={aIdx} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="text-primary-400 mt-1">▸</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech Stack */}
                            {exp.techStack && exp.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                    {exp.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="tech-badge text-xs flex items-center gap-1.5">
                                            {getTechIcon(tech)}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
