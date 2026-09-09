import { ContactIcons, GettingStarted, TemplateHeading } from "@/components"

/**
 * Apps Landing Page/
 * @returns {JSX.Element}
 */
export default function Home() {

	return (
		<div className="flex flex-col gap-16 justify-between items-center min-h-screen pt-24 font-[family-name:var(--font-geist-sans)]">
			<header>
				<TemplateHeading />
			</header>
			<main
				className="
					flex flex-col gap-8 align-center
					bg-background
					rounded-md w-fit mx-auto
				">
				<GettingStarted />

			</main>
			<footer className="flex gap-6 flex-wrap items-center justify-center pb-4">
				<ContactIcons />
			</footer>
		</div>
	)
}
