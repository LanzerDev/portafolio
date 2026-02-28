'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { m, type Variants } from 'framer-motion';

// Curva bezier personalizada como string compatible con Framer Motion 12
const EASE_CUSTOM = 'easeOut' as const;

// Variant container para animar todos los hijos en cascada con 1 solo motion element
const heroContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const heroItem: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE_CUSTOM },
    },
};

export default function HeroSection() {
    const { t } = useLanguage();
    const { hero, contact } = t;

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image — animación separada para scale */}
            <m.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE_CUSTOM }}
                className="relative flex-shrink-0"
            >
                {/* Box-shadow en lugar de div con blur-2xl+animate-pulse
                    — elimina una capa de composición costosa */}
                <img
                    src="/lanzerdev.webp"
                    alt="Lanzer Antuan Cabanillas Lopez"
                    width={160}
                    height={160}
                    fetchPriority="high"
                    decoding="async"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover
                               border-4 border-primary-500/30
                               shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_0_40px_rgba(139,92,246,0.35),0_0_80px_rgba(59,130,246,0.15)]"
                />
                {/* Indicador de disponibilidad */}
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
            </m.div>

            {/* Content — 1 solo motion.div con Variants en lugar de 7 motion.* individuales */}
            <m.div
                className="flex-1 text-center md:text-left"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <m.div
                    variants={heroItem}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full glass border border-green-500/30"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">{hero.badge}</span>
                </m.div>

                {/* Greeting */}
                <m.h1
                    variants={heroItem}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                    <span className="text-white">{hero.greeting.split(' ').slice(0, 2).join(' ')}</span>{' '}
                    <span className="gradient-text">{hero.greeting.split(' ').slice(2).join(' ')}</span>
                </m.h1>

                {/* Description */}
                <m.p variants={heroItem} className="text-xl md:text-2xl text-gray-300 mb-2">
                    {hero.description}{' '}
                    <span className="text-primary-400 font-semibold">{hero.role}</span>
                </m.p>

                <m.p variants={heroItem} className="text-lg text-gray-400 mb-2">
                    {hero.tagline}
                </m.p>

                <m.p variants={heroItem} className="text-lg font-medium gradient-text">
                    {hero.motto}
                </m.p>

                {/* Social Pills */}
                <m.nav
                    variants={heroItem}
                    className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
                >
                    <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 px-5 py-3 rounded-full
                                   bg-gradient-to-r from-primary-500 to-secondary-500
                                   text-white font-medium
                                   shadow-lg shadow-primary-500/20
                                   hover:shadow-primary-500/40 hover:scale-105
                                   transition-transform duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {contact.contactMe}
                    </a>

                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full glass
                                   text-gray-300 hover:text-white hover:border-primary-500/50
                                   hover:scale-105 transition-transform duration-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full glass
                                   text-gray-300 hover:text-white hover:border-primary-500/50
                                   hover:scale-105 transition-transform duration-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </m.nav>
            </m.div>
        </div>
    );
}
