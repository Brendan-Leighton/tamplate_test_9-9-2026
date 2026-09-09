<!-- LINK VARIABLES -->
[shadcn]: https://ui.shadcn.com/
[indexjs]: ./index.js

# Components

Store reusable components here

## index.js 

[index.js][indexjs] exists to export all components. This lets you import all components like so... 

```js
// some-other-file.tsx 
import { Component1, Component2 } from @/components
```

Methods for exporting:

```js
// index.js

// export file in local directory
export * from './file-name'

// export file inside a folder that's in local directory
export * from './folder-name/file-name'

// export * from folder in local directory (this folder also needs an index.js exporting files)
export * from './folder-name'
```

> [!NOTE]
> Don't include the "default" keyword in the export statement of the react component
```jsx
// some-component.tsx

// no "default" keyword between 'export' and 'function'
export function Component() {
	return (
		<div>Component</div>
	)
}
```

## Adding Components

Besides updating the index.js, you'll want to create directories as you see fit. I like directories for holding related things like a `shadcd` folder for holding components I get from [shadcn.com][shadcn]