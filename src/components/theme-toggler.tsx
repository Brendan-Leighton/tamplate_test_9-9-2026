'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/shadcn/button'

export function ThemeToggler() {

	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// Avoid hydration mismatch error
	// 1/2 - Because useEffect only runs on client we can be sure that mounted is true
	useEffect(() => {
		setMounted(true)
	}, [])
	// 2/2 - If not mounted, return null
	if (!mounted) return null

	return (
		<Button
			variant='ghost'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='hover:text-background hover:bg-accent rounded'
		>
			<Sun className='h-3xl w-3xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-3xl w-3xl rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
