'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { m } from 'framer-motion';
import GlassCard from './animations/GlassCard';
import { FaGraduationCap, FaLaptopCode, FaBookOpen } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const educationIcons: { icon: IconType; color: string }[] = [
    { icon: FaGraduationCap, color: '#8b5cf6' },
    { icon: FaLaptopCode, color: '#06b6d4' },
    { icon: FaBookOpen, color: '#f59e0b' },
];

export default function Education() {
    const { t } = useLanguage();
    const education = t.education;

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {education.map((item, idx) => {
                const IconComponent = educationIcons[idx]?.icon || FaBookOpen;
                const iconColor = educationIcons[idx]?.color || '#8b5cf6';

                return (
                    /* Eliminado motion.div outer wrapper — GlassCard maneja la animación */
                    <GlassCard key={idx} delay={idx * 0.1} className="h-full">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <IconComponent className="text-4xl" style={{ color: iconColor }} />
                            <h3 className="text-lg font-bold gradient-text">
                                {item.title}
                            </h3>
                            <p className="text-primary-400 font-medium">
                                {item.institution}
                            </p>
                            <p className="text-sm text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    </GlassCard>
                );
            })}
        </div>
    );
}
