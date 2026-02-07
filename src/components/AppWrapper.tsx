'use client';

import type { ReactNode } from 'react';
import { LanguageProvider } from '../i18n/LanguageContext';
import type { Language } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import DownloadCV from './DownloadCV';

interface AppWrapperProps {
    children?: ReactNode;
    initialLang?: Language;
}

export default function AppWrapper({ children, initialLang = 'es' }: AppWrapperProps) {
    return (
        <LanguageProvider initialLang={initialLang}>
            <div className="fixed top-4 right-4 z-50">
                <LanguageSwitcher />
            </div>
            <DownloadCV />
            {children}
        </LanguageProvider>
    );
}
