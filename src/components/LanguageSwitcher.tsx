'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 p-1 rounded-full glass"
        >
            <button
                onClick={() => setLang('es')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${lang === 'es'
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                aria-label="Cambiar a Español"
            >
                <span className="flex items-center gap-1.5">
                    <span className="text-base">🇲🇽</span>
                    <span className="hidden sm:inline">ES</span>
                </span>
            </button>
            <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${lang === 'en'
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                aria-label="Switch to English"
            >
                <span className="flex items-center gap-1.5">
                    <span className="text-base">🇺🇸</span>
                    <span className="hidden sm:inline">EN</span>
                </span>
            </button>
        </motion.div>
    );
}
