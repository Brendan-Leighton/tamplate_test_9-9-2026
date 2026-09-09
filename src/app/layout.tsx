import type { Metadata, Viewport } from "next"
import Script from 'next/script'
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NavMenus from "@/components/nav-menu"

export const metadata: Metadata = {
	title: "Next.js Template",
	description: "A project template using Next.js, TypeScript, TailwindCSS, Shadcn UI, and more!",
	applicationName: 'Next.js Template',
	authors: [{ name: 'Brendan Leighton', url: 'https://github.com/Brendan-Leighton' }],
	creator: 'Brendan Leighton',
	robots: {
		index: true,
		follow: true
	},
	generator: 'Next.js',
	keywords: ['Brendan', 'Leighton', 'Next.js', 'Template'],
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#0a0a0a',
	colorScheme: 'dark light',
}

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`
					${geistSans.variable} ${geistMono.variable} 
					antialiased transition-all duration-300 ease-in-out
					px-4 bg-background text-foreground
				`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<NavMenus />
					{children}
				</ThemeProvider>

				{/* Theme script - used instead of useEffect in ThemeProvider for Script's earlier execution which provides a plethera of benefits */}
				<Script id="theme-script" strategy="beforeInteractive">
					{`
            (function () {
              function getThemePreference() {
                if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                  return localStorage.getItem('theme')
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              }
              document.documentElement.classList.add(getThemePreference())
            })()
          `}
				</Script>
			</body>
		</html >
	)
}
