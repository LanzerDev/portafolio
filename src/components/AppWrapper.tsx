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
            <div className="fixed bottom-4 right-4 sm:bottom-auto sm:top-4 sm:right-4 z-50">
                <LanguageSwitcher />
            </div>
            <DownloadCV />
            {children}
        </LanguageProvider>
    );
}
