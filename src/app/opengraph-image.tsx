import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Open Graph Image'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

/**
 * @see https://og-image.vercel.app
 *
 * View Development Preview @see http://localhost:3000/opengraph-image
*/
export default async function Image() {
	// colors to use in image - swap or add if you like
	const color_accent = '#c1870d'
	const color_primary = '#00b3e3'
	const color_black = '#09090b'
	const color_white = '#f4f4f5'

	// colors used in image - CSS colors are acceptable
	const color_gradient_1 = color_primary
	const color_gradient_2 = color_black
	const color_CTA_background = color_accent
	const color_CTA_font = color_black
	const color_font = color_white
	const color_background = color_black

	return new ImageResponse(
		(
			<div
				style={{
					background: `linear-gradient(90deg, ${color_gradient_1} 0%, ${color_gradient_2} 20%, ${color_gradient_2} 80%, ${color_gradient_1} 100%)`,
					backgroundColor: `${color_background}`,
					color: `${color_font}`,
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '8rem',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<h1
					style={{
						fontSize: '5rem',
						margin: '0',
						padding: '0',
					}}
				>Next.js Template</h1>
				<a
					style={{
						fontSize: '2rem',
						backgroundColor: `${color_CTA_background}`,
						color: `${color_CTA_font}`,
						padding: '0.5rem 1rem',
						borderRadius: '0.5rem',
					}}
				>Check it out on Github!</a>

			</div>
		),
		{
			...size,
		}
	)
}