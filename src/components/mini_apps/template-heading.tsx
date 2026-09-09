import React from 'react'
import { Button } from '@/components/shadcn'

export function TemplateHeading() {
	return (
		<>
			<h1
				id="top"
				className='
						text-6xl pb-4 text-foreground
						max-w-[522px]
						text-center sm:text-left
					'
			>Next.js Template</h1>
			<Button asChild
				size='link'
				variant='link'
				className="flex mx-auto w-fit min-[522px]:float-right"
			>
				<a
					href="https://github.com/Brendan-Leighton"
					aria-label="Vercel"
				>~ Brendan Leighton</a>
			</Button>
		</>
	)
}
