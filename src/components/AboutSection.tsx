'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';

export default function AboutSection() {
    const { t } = useLanguage();
    const { about } = t;

    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8"
        >
            {/* Text Content */}
            <div className="flex-1 space-y-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-300"
                >
                    {about.intro} <span className="text-primary-400 font-semibold">{about.passion}</span> {about.hobbies}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400"
                >
                    {about.journey}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400"
                >
                    {about.experience} <span className="text-primary-400 font-semibold">{about.strength}</span> {about.strengthContinued}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400"
                >
                    {about.workStyle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400"
                >
                    {about.achievement}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-lg"
                >
                    <span className="text-primary-400 font-semibold">{about.current}</span>{' '}
                    <span className="text-gray-300">{about.currentProject}</span>
                </motion.p>
            </div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 rounded-2xl blur-xl" />
                <img
                    src="/perfil.png"
                    alt="Lanzer Cabanillas"
                    className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border-2 border-primary-500/30 shadow-xl"
                    style={{ objectPosition: '50% 50%' }}
                />
            </motion.div>
        </motion.article>
    );
}
