'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
}

export default function GlassCard({
    children,
    className = '',
    hover = true,
    delay = 0,
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={
                hover
                    ? {
                        y: -4,
                        transition: { duration: 0.2 },
                    }
                    : undefined
            }
            className={`
        relative overflow-hidden rounded-xl p-6
        bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-transparent
        backdrop-blur-xl border border-primary-500/20
        shadow-lg shadow-primary-500/5
        transition-colors duration-300
        ${hover ? 'hover:border-primary-500/40 hover:shadow-primary-500/20' : ''}
        ${className}
      `}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
