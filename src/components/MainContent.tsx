'use client';

import type { ReactNode } from 'react';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import DownloadCV from './DownloadCV';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import Skills from './Skills';
import Education from './Education';
import AboutSection from './AboutSection';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';

interface AppWrapperProps {
    children?: ReactNode;
    initialLang?: Language;
}

// Section title component with i18n support
function SectionTitle({ icon, children, className = '' }: { icon: ReactNode; children: ReactNode; className?: string }) {
    return (
        <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ${className}`}
        >
            {icon}
            {children}
        </motion.h2>
    );
}

// Section container
function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
    return (
        <section id={id} className={`scroll-mt-20 ${className}`}>
            {children}
        </section>
    );
}

// Icons
const BriefcaseIcon = () => (
    <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CodeIcon = () => (
    <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const SkillsIcon = () => (
    <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const EducationIcon = () => (
    <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
);

const ProfileIcon = () => (
    <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ContactIcon = () => (
    <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export default function MainContent({ initialLang = 'es' }: AppWrapperProps) {
    return (
        <LanguageProvider initialLang={initialLang}>
            {/* Fixed UI elements */}
            <div className="fixed top-4 right-4 z-50">
                <LanguageSwitcher />
            </div>
            <DownloadCV />

            {/* Main content */}
            <main className="px-4 max-w-6xl mx-auto">
                {/* Hero Section */}
                <Section className="py-20 md:py-32">
                    <HeroSection />
                </Section>

                <div className="space-y-24 md:space-y-32 pb-20">
                    {/* Experience Section */}
                    <Section id="experiencia">
                        <SectionTitle icon={<BriefcaseIcon />}>
                            <TranslatedTitle keyPath="sections.experience" />
                        </SectionTitle>
                        <div className="mt-12">
                            <ExperienceSection />
                        </div>
                    </Section>

                    {/* Projects Section */}
                    <Section id="proyectos">
                        <SectionTitle icon={<CodeIcon />}>
                            <TranslatedTitle keyPath="sections.projects" />
                        </SectionTitle>
                        <div className="mt-12">
                            <ProjectsSection />
                        </div>
                    </Section>

                    {/* Skills Section */}
                    <Section id="habilidades">
                        <SectionTitle icon={<SkillsIcon />}>
                            <TranslatedTitle keyPath="sections.skills" />
                        </SectionTitle>
                        <div className="mt-12">
                            <Skills />
                        </div>
                    </Section>

                    {/* Education Section */}
                    <Section id="educacion">
                        <SectionTitle icon={<EducationIcon />}>
                            <TranslatedTitle keyPath="sections.education" />
                        </SectionTitle>
                        <div className="mt-12">
                            <Education />
                        </div>
                    </Section>

                    {/* About Me Section */}
                    <Section id="sobre-mi">
                        <SectionTitle icon={<ProfileIcon />}>
                            <TranslatedTitle keyPath="sections.about" />
                        </SectionTitle>
                        <div className="mt-12">
                            <AboutSection />
                        </div>
                    </Section>

                    {/* Contact Section */}
                    <Section id="contacto">
                        <SectionTitle icon={<ContactIcon />}>
                            <TranslatedTitle keyPath="sections.contact" fallback="Contacto" />
                        </SectionTitle>
                        <div className="mt-12">
                            <ContactInfo />
                        </div>
                    </Section>
                </div>
            </main>
        </LanguageProvider>
    );
}

// Helper component to get translated section titles
function TranslatedTitle({ keyPath, fallback }: { keyPath: string; fallback?: string }) {
    const { t } = useLanguage();
    // Navigate the key path
    const value = keyPath.split('.').reduce((obj: any, key: string) => obj?.[key], t);
    return <>{value || fallback || keyPath}</>;
}
