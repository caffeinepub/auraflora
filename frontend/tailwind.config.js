import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                display: ['Cormorant Garamond', 'Georgia', 'serif'],
                body: ['Jost', 'sans-serif'],
                sans: ['Jost', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                // AuraFlora brand palette
                'aura-rose': 'oklch(0.78 0.08 10)',
                'aura-lavender': 'oklch(0.80 0.07 295)',
                'aura-lavender-deep': 'oklch(0.62 0.12 295)',
                'aura-sage': 'oklch(0.82 0.06 155)',
                'aura-champagne': 'oklch(0.88 0.06 75)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1.5rem',
                '3xl': '2rem',
                '4xl': '3rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 4px 30px oklch(0.22 0.02 30 / 0.06)',
                card: '0 20px 60px oklch(0.22 0.02 30 / 0.12)',
                glow: '0 8px 30px oklch(0.78 0.08 10 / 0.35)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                    '50%': { transform: 'translateY(-30px) scale(1.05)' }
                },
                'float-medium': {
                    '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                    '50%': { transform: 'translateY(-20px) scale(1.03)' }
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                    '50%': { transform: 'translateX(-50%) translateY(8px)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                'float-medium': 'float-medium 6s ease-in-out infinite',
                'bounce-slow': 'bounce-slow 2.5s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
