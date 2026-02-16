import NextLink, { type LinkProps } from "next/link";

export function Link({
	children,
	...linkProps
}: LinkProps & { children: React.ReactNode }) {
	return (
		<NextLink
			{...linkProps}
			className="text-primary-ia underline visited:text-visited-ia w-fit"
		>
			{children}
		</NextLink>
	);
}
