declare namespace JSX {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	// interface Element { }

	// eslint-disable-next-line @typescript-eslint/ban-types
	interface ElementAttributesProperty { $props: {} }

	// allows to use "noImplicitAny": true in tsconfig.json
	interface IntrinsicElements {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[elemName: string]: any
	}

}
