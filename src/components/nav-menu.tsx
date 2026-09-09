import React from 'react'
import { Menu } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose
} from './shadcn'
import { ThemeToggler } from '@/components'

export default function NavMenus() {

	/**
	 * Navigation links are rendered based on this navItems array.
	 */
	const navItems = [
		{ href: '/#top', label: 'Logo' },
		{ href: '/#getting-started', label: 'Getting Started' }
	]

	/**
	 * Return a mobile or desktop link
	 * @param props
	 * @param props.href link
	 * @param props.label text displayed
	 * @param props.isMobile whether to render a mobile or desktop link
	 * @returns a navigation link
	 */
	const NavLink = ({ href, label, isMobile }: { href: string, label: string, isMobile: boolean }) => (
		<>
			{
				isMobile ?
					<SheetClose asChild>
						<NavigationMenuLink
							key={label}
							href={href}
							className='
								min-h-11 m-w-11 py-2 px-4 rounded text-lg
								hover:bg-accent hover:text-background
							'
						>
							{label}
						</NavigationMenuLink>
					</SheetClose>
					:
					<NavigationMenuLink
						key={label}
						href={href}
						className='
								min-h-11 m-w-11 py-2 px-4 rounded text-lg
								hover:bg-accent hover:text-background
							'
					>
						{label}
					</NavigationMenuLink>
			}
		</>
	)

	/**
	 * Navigation links are rendered based on the navItems array. Mobile and Desktop use this function.
	 * @returns navigation links
	 */
	const NavLinks = ({ isMobile }: { isMobile: boolean }) => (
		<>
			{
				navItems.map((item) => (
					<NavigationMenuItem key={item.href}>
						<NavLink href={item.href} label={item.label} isMobile={isMobile} />
					</NavigationMenuItem>
				))
			}

			<NavigationMenuItem>
				{
					isMobile ?
						<SheetClose asChild>
							<ThemeToggler />
						</SheetClose>
						:
						<ThemeToggler />
				}
			</NavigationMenuItem>
		</>
	)

	return (
		<NavigationMenu
			className='fixed top-0 left-0 w-full h-12 border-b bg-background shadow-md
				md:mx-auto
			'
			role='navigation'>

			{/* Mobile Menu */}
			<Sheet>
				<SheetTrigger asChild>
					<Button className='ml-auto mr-4 md:hidden rounded' variant="ghost" size="icon" aria-label='Open Menu'>
						<Menu className="h-[1.2rem] w-[1.2rem]" />
					</Button>
				</SheetTrigger>

				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Navigation Links</SheetTitle>
					</SheetHeader>
					<NavigationMenuList className="mt-4 flex flex-col gap-2 items-start space-y-2">
						<NavLinks isMobile={true} />
					</NavigationMenuList>
				</SheetContent>
			</Sheet>

			{/* Desktop Menu */}
			<NavigationMenuList className='hidden md:flex md:gap-4 h-auto'>
				<NavLinks isMobile={false} />
			</NavigationMenuList>

		</NavigationMenu>
	)
}
