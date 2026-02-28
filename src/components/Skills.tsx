'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { m, type Variants } from 'framer-motion';
import {
    SiNextdotjs, SiReact, SiAngular, SiHtml5, SiCss3, SiJavascript,
    SiTailwindcss, SiMui, SiBootstrap, SiSupabase, SiExpress,
    SiPython, SiFlask, SiSpring, SiPhp, SiSharp, SiCplusplus,
    SiPostgresql, SiMongodb, SiGit, SiGithub, SiGitlab, SiGithubactions
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandDiscord } from 'react-icons/tb';
import type { IconType } from 'react-icons';

const skillIcons: Record<string, { icon: IconType; color: string }> = {
    nextjs: { icon: SiNextdotjs, color: '#ffffff' },
    react: { icon: SiReact, color: '#61DAFB' },
    angular: { icon: SiAngular, color: '#DD0031' },
    html: { icon: SiHtml5, color: '#E34F26' },
    css: { icon: SiCss3, color: '#1572B6' },
    javascript: { icon: SiJavascript, color: '#F7DF1E' },
    tailwind: { icon: SiTailwindcss, color: '#06B6D4' },
    mui: { icon: SiMui, color: '#007FFF' },
    bootstrap: { icon: SiBootstrap, color: '#7952B3' },
    supabase: { icon: SiSupabase, color: '#3FCF8E' },
    express: { icon: SiExpress, color: '#ffffff' },
    python: { icon: SiPython, color: '#3776AB' },
    flask: { icon: SiFlask, color: '#ffffff' },
    java: { icon: FaJava, color: '#ED8B00' },
    spring: { icon: SiSpring, color: '#6DB33F' },
    php: { icon: SiPhp, color: '#777BB4' },
    csharp: { icon: SiSharp, color: '#239120' },
    cpp: { icon: SiCplusplus, color: '#00599C' },
    sql: { icon: FaDatabase, color: '#336791' },
    postgres: { icon: SiPostgresql, color: '#336791' },
    mongo: { icon: SiMongodb, color: '#47A248' },
    git: { icon: SiGit, color: '#F05032' },
    github: { icon: SiGithub, color: '#ffffff' },
    gitlab: { icon: SiGitlab, color: '#FC6D26' },
    cicd: { icon: SiGithubactions, color: '#2088FF' },
    scrum: { icon: TbBrandDiscord, color: '#6DB33F' },
};

const categoryLabels: Record<string, { en: string; es: string }> = {
    frontend: { en: 'Frontend', es: 'Frontend' },
    backend: { en: 'Backend', es: 'Backend' },
    database: { en: 'Databases', es: 'Bases de Datos' },
    tools: { en: 'Tools & Methods', es: 'Herramientas y Métodos' },
};

// Variants tipados correctamente para FM 12
const categoryVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
};

export default function Skills() {
    const { lang, t } = useLanguage();
    const skills = t.skills;

    const grouped = skills.reduce((acc, skill) => {
        const cat = skill.category;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const categoryOrder = ['frontend', 'backend', 'database', 'tools'];

    return (
        <div className="space-y-8">
            {categoryOrder.map((category, catIdx) => (
                <m.div
                    key={category}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: catIdx * 0.08, duration: 0.4, ease: 'easeOut' }}
                >
                    <h3 className="text-lg font-semibold text-primary-400 mb-4">
                        {categoryLabels[category]?.[lang] || category}
                    </h3>
                    <m.div
                        className="flex flex-wrap gap-3"
                        variants={categoryVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-20px' }}
                    >
                        {grouped[category]?.map((skill) => {
                            const skillData = skillIcons[skill.icon];
                            const IconComponent = skillData?.icon;
                            const iconColor = skillData?.color || '#8b5cf6';

                            return (
                                <m.div
                                    key={skill.name}
                                    variants={badgeVariants}
                                    /* whileHover eliminado — CSS .tech-badge:hover maneja el hover */
                                    className="tech-badge"
                                    style={{ borderColor: `${iconColor}40` }}
                                >
                                    {IconComponent ? (
                                        <IconComponent className="w-4 h-4" style={{ color: iconColor }} />
                                    ) : (
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: iconColor }}
                                        />
                                    )}
                                    {skill.name}
                                </m.div>
                            );
                        })}
                    </m.div>
                </m.div>
            ))}
        </div>
    );
}
