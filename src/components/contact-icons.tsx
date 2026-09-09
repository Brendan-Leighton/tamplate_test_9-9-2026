import React from 'react'
import { FaGithub, FaBluesky, FaLinkedinIn } from 'react-icons/fa6'
import { Button } from './shadcn/button'

export function ContactIcons({ className }: { className?: string }) {

	const icons = [
		{
			icon: <FaGithub />,
			link: 'https://github.com/Brendan-Leighton',
			title: 'GitHub'
		},
		{
			icon: <FaLinkedinIn />,
			link: 'https://www.linkedin.com/in/brendan-leighton/',
			title: 'LinkedIn'
		},
		{
			icon: <FaBluesky />,
			link: 'https://bsky.app/profile/brenzy.bsky.social',
			title: 'Bluesky'
		}
	]

	return (
		<ul
			className={`
				${className}
				 flex justify-center gap-4 w-fit
			`}
		>
			{
				icons.map(({ icon, link, title }) => (
					<li key={title} title={title}>
						<Button
							asChild
							variant='link'
							size='link'
						>
							<a
								href={link}
								aria-label={title}
								className='text-3xl'
								title={title}
							>
								{icon}
							</a>
						</Button>
					</li>
				))
			}
		</ul>
	)
}
