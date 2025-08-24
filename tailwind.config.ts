import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					dark: 'hsl(var(--secondary-dark))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-button': 'var(--gradient-button)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-retro': 'var(--gradient-retro)',
				'gradient-vintage': 'var(--gradient-vintage)'
			},
			boxShadow: {
				'retro-soft': 'var(--shadow-retro-soft)',
				'retro-medium': 'var(--shadow-retro-medium)',
				'retro-deep': 'var(--shadow-retro-deep)',
				'retro-glow': 'var(--shadow-retro-glow)',
				'retro-inset': 'var(--shadow-retro-inset)',
				'soft': '0 2px 4px rgba(139, 69, 19, 0.1)',
				'medium': '0 4px 8px rgba(139, 69, 19, 0.15)',
				'large': '0 8px 16px rgba(139, 69, 19, 0.2)',
				'glow': '0 0 20px rgba(255, 140, 0, 0.3)'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'retro': ['Courier New', 'monospace'],
				'vintage': ['Georgia', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'retro-glow': {
					'0%': {
						boxShadow: '0 0 5px rgba(255, 140, 0, 0.3)',
						transform: 'scale(1)'
					},
					'100%': {
						boxShadow: '0 0 20px rgba(255, 140, 0, 0.6), 0 0 30px rgba(255, 140, 0, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'retro-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(0.98)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'retro-glow': 'retro-glow 0.4s ease-out forwards',
				'retro-pulse': 'retro-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
