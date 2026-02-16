import type { IconProps } from "./types";

export function CheckIcon({
	size = "1.25em",
	strokeWidth = 2,
	className,
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			stroke="currentColor"
			className={className}
		>
			<path d="M4.5 12L9.5 17" />
			<path d="M9.5 17L19.5 7" />
		</svg>
	);
}
