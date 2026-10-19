/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React files
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			dark:'000',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
		  },
	    boxShadow: {
        'sm-light': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm-dark': '0 1px 2px rgba(255, 255, 255, 0.8)',
        'md-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'md-dark': '0 4px 6px rgba(255, 255, 255, 0.85)',
        'lg-light': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'lg-dark': '0 10px 15px rgba(255, 255, 255, 0.9)',
        'xl-light': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'xl-dark': '0 20px 25px rgba(255, 255, 255, 0.95)',
        '2xl-light': '0 25px 50px rgba(0, 0, 0, 0.25)',
        '2xl-dark': '0 25px 50px rgba(255, 255, 255, .95)',
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'inner-dark': 'inset 0 2px 4px rgba(255, 255, 255, 1)',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
