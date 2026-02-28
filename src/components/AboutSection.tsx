'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { m, type Variants } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92, rotate: 3 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 3,
        transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
    },
};

export default function AboutSection() {
    const { t } = useLanguage();
    const { about } = t;

    return (
        <article className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content — usa StaggerContainer para consolidar 6 motion.p en 1 orchestrator */}
            <StaggerContainer className="flex-1 space-y-4">
                <StaggerItem>
                    <p className="text-lg text-gray-300">
                        {about.intro}{' '}
                        <span className="text-primary-400 font-semibold">{about.passion}</span>{' '}
                        {about.hobbies}
                    </p>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-gray-400">{about.journey}</p>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-gray-400">
                        {about.experience}{' '}
                        <span className="text-primary-400 font-semibold">{about.strength}</span>{' '}
                        {about.strengthContinued}
                    </p>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-gray-400">{about.workStyle}</p>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-gray-400">{about.achievement}</p>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-lg">
                        <span className="text-primary-400 font-semibold">{about.current}</span>{' '}
                        <span className="text-gray-300">{about.currentProject}</span>
                    </p>
                </StaggerItem>
            </StaggerContainer>

            {/* Profile Image */}
            <m.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="relative flex-shrink-0"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 rounded-2xl blur-xl" />
                <img
                    src="/perfil.webp"
                    alt="Lanzer Cabanillas"
                    width={288}
                    height={288}
                    loading="lazy"
                    decoding="async"
                    className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl
                               border-2 border-primary-500/30 shadow-xl"
                    style={{ objectPosition: '50% 50%' }}
                />
            </m.div>
        </article>
    );
}
