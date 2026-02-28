'use client';

import { m } from 'framer-motion';
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
        <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
                duration: 0.4,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            /* whileHover eliminado — glass-card:hover en CSS maneja el translateY(-4px)
               de forma más eficiente sin registrar event listeners de FM */
            className={`
        relative overflow-hidden rounded-xl p-6
        bg-gradient-to-br from-primary-500/12 via-secondary-500/6 to-slate-900/60
        border border-primary-500/20
        shadow-lg shadow-primary-500/5
        glass-card
        ${hover ? 'cursor-default' : ''}
        ${className}
      `}
            /* will-change para pre-promover la capa antes del hover */
            style={hover ? { willChange: 'transform' } : undefined}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </m.div>
    );
}
