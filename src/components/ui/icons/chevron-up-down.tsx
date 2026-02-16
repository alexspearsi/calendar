import type { IconProps } from "./types";

export function ChevronUpDownIcon({
	size = "1.25em",
	strokeWidth = 2,
	...props
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			stroke="currentColor"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 15L12 21" />
			<path d="M12 21L18 15" />
			<path d="M6 9L12 3" />
			<path d="M12 3L18 9" />
		</svg>
	);
}
