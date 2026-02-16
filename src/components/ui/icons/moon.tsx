import type { IconProps } from "./types";

export function MoonIcon({
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
			stroke="currentColor"
			strokeWidth={strokeWidth}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M9.85034 2.8766C10.3507 2.72214 10.6422 3.41918 10.2929 3.80938C9.18263 5.04967 8.5074 6.68761 8.50733 8.48305C8.50748 12.3543 11.6461 15.4928 15.5176 15.4929C17.3134 15.4929 18.951 14.8172 20.1911 13.7065C20.5812 13.3571 21.2781 13.6484 21.1237 14.1488C19.989 17.8271 16.5645 20.5 12.5132 20.5C7.53535 20.5 3.5 16.4649 3.5 11.4873C3.5 7.43667 6.17242 4.01185 9.85034 2.8766Z" />
		</svg>
	);
}
