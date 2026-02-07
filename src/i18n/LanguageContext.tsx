'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import enData from '../data/en.json';
import esData from '../data/es.json';

export type Language = 'en' | 'es';

export interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof enData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: enData,
    es: esData,
};

export function LanguageProvider({ children, initialLang = 'es' }: { children: ReactNode; initialLang?: Language }) {
    const [lang, setLangState] = useState<Language>(initialLang);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('portfolio-lang') as Language;
        if (saved && (saved === 'en' || saved === 'es')) {
            setLangState(saved);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('portfolio-lang', newLang);
        // Dispatch custom event for Astro components to listen
        window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
    };

    const t = translations[lang];

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ lang: initialLang, setLang, t: translations[initialLang] }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

// Hook for getting just the translations
export function useTranslations() {
    const { t } = useLanguage();
    return t;
}
