import React from 'react'

export function Code({ code }: { code: string }) {
	return (
		<pre
			className="font-mono my-2"
		>
			<code className='bg-background_z1 py-1 px-2 rounded'>
				{code}
			</code>
		</pre>
	)
}
