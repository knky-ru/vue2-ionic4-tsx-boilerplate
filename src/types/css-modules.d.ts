declare module '*.css?module' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;

	export = classNames;
}
