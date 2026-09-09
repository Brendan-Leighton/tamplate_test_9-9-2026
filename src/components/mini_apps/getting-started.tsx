import React from 'react'
import { Button } from '@/components/shadcn'

export function GettingStarted() {

	const VercelDeployLink = () => {
		return (
			<Button asChild
				variant="link"
				size='link'
			>
				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					aria-label="Vercel"
					target="_blank"
				>Vercel</a>
			</Button>
		)
	}

	const GithubNextTemplateLink = () => {
		return (
			<Button asChild
				variant="link"
				size='link'
			>
				<a
					href="https://github.com/Brendan-Leighton/next_template"
					aria-label="Github"
					target="_blank"
				>Github</a>
			</Button>
		)
	}

	return (
		<article>
			<h2 id="getting-started" className="text-3xl sm:text-4xl">Getting Started:</h2>
			<em className="text-zinc-700 dark:text-zinc-300">Refer to the README for detailed instructions.</em>
			<ol className="list-decimal list-inside flex flex-col gap-4 w-fit">
				<li>Use Template on {GithubNextTemplateLink()}</li>
				<li>Setup Project</li>
				<li>Deploy on {VercelDeployLink()}</li>
				<li>Modify docs or remove features</li>
				<li>Begin Coding</li>
			</ol>
		</article>
	)
}
