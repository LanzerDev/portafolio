'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function DownloadCV() {
    const { lang, t } = useLanguage();

    const handleDownload = () => {
        const pdfUrl = lang === 'en'
            ? '/Lanzer_Cabanillas_CV_EN.pdf'
            : '/Lanzer_Cabanillas_CV_ES.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `Lanzer_Cabanillas_CV_${lang.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            onClick={handleDownload}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2 px-5 py-3
        bg-gradient-to-r from-primary-500 to-secondary-500
        text-white font-medium rounded-full
        shadow-lg shadow-primary-500/30
        hover:shadow-xl hover:shadow-primary-500/40
        transition-shadow duration-300
        group
      "
            title={t.buttons.download}
        >
            {/* Download Icon */}
            <svg
                className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            <span className="hidden sm:inline">{t.buttons.download}</span>
        </motion.button>
    );
}
