"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { SpinnerIcon } from "@/components/ui/icons/spinner";
import { useWaveAnimate } from "@/components/ui/use-wave-animate";

export const buttonVariants = cva(
	"inline-flex items-center justify-center transition-all cursor-pointer select-none outline-none",
	{
		variants: {
			intent: {
				primary: "focus-visible:shadow-focus-primary",
				destructive: "focus-visible:shadow-focus-error",
				visited: "focus-visible:shadow-focus-visited",
				secondary: "focus-visible:shadow-focus-secondary",
				neutral: "focus-visible:shadow-focus-foreground",
				success: "focus-visible:shadow-focus-success",
				warning: "focus-visible:shadow-focus-warning",
			},
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
				fit: null,
			},
			animated: {
				false: null,
				true:
					"relative before:absolute before:inset-0 before:block before:outline-0 before:content-['']",
			},
			lifted: {
				true: null,
				false: null,
			},
			width: {
				narrow: null,
				normal: null,
				wide: null,
			},
			shape: {
				rounded: null,
				square: null,
				circular: "rounded-full before:rounded-full",
			},
			appearance: {
				solid: null,
				subtle: null,
				outline: "before:outline-offset-1.6 border-1.6 focus-visible:border-none",
				ghost: null,
				link: "underline",
			},
			disabled: {
				true: "saturate-50 opacity-50 contrast-60 pointer-events-none",
			},
			loading: {
				true: "pointer-events-none",
			},
		},
		compoundVariants: [
			{
				width: "narrow",
				size: ["l", "m", "s"],
				className: "px-[calc(0.375em-2px)]",
			},
			{
				width: "normal",
				size: ["l", "m", "s"],
				className:
					"px-[0.75em] has-[>svg:last-child]:pe-[0.5625em] has-[>svg:first-child]:ps-[0.5625em] gap-x-[0.5625em]",
			},
			{
				width: "wide",
				size: ["l", "m", "s"],
				className:
					"px-[1em] has-[>svg:last-child]:pe-[0.8125em] has-[>svg:first-child]:ps-[0.8125em] gap-x-[0.8125em]",
			},
			{ size: ["s", "m", "l"], className: "h-[2em] min-w-[2em]" },
			{
				shape: "rounded",
				size: "s",
				className: "rounded-7d before:rounded-7d",
			},
			{
				shape: "rounded",
				size: "m",
				className: "rounded-8d before:rounded-8d",
			},
			{
				shape: "rounded",
				size: "l",
				className: "rounded-9d before:rounded-9d",
			},
			{
				appearance: ["outline", "solid", "subtle", "ghost"],
				lifted: true,
				className: "shadow-lifted-ia",
			},

			{
				intent: "primary",
				appearance: "solid",
				className: "surface-primary-solid-ia",
			},
			{
				intent: "primary",
				appearance: "subtle",
				className: "surface-primary-subtle-ia",
			},
			{
				intent: "primary",
				appearance: "outline",
				className: "surface-primary-outline-ia",
			},
			{
				intent: "primary",
				appearance: "ghost",
				className: "surface-primary-ghost-ia",
			},
			{
				intent: "primary",
				appearance: "link",
				className: "text-primary-ia underline",
			},

			{
				intent: "destructive",
				appearance: "solid",
				className: "surface-error-solid-ia",
			},
			{
				intent: "destructive",
				appearance: "subtle",
				className: "surface-error-subtle-ia",
			},
			{
				intent: "destructive",
				appearance: "outline",
				className: "surface-error-outline-ia",
			},
			{
				intent: "destructive",
				appearance: "ghost",
				className: "surface-error-ghost-ia",
			},
			{
				intent: "destructive",
				appearance: "link",
				className: "text-error-ia underline",
			},

			{
				intent: "visited",
				appearance: "solid",
				className: "surface-visited-solid-ia",
			},
			{
				intent: "visited",
				appearance: "subtle",
				className: "surface-visited-subtle-ia",
			},
			{
				intent: "visited",
				appearance: "outline",
				className: "surface-visited-outline-ia",
			},
			{
				intent: "visited",
				appearance: "ghost",
				className: "surface-visited-ghost-ia",
			},
			{
				intent: "visited",
				appearance: "link",
				className: "text-visited-ia underline",
			},

			{
				intent: "warning",
				appearance: "solid",
				className: "surface-warning-solid-ia",
			},
			{
				intent: "warning",
				appearance: "subtle",
				className: "surface-warning-subtle-ia",
			},
			{
				intent: "warning",
				appearance: "outline",
				className: "surface-warning-outline-ia",
			},
			{
				intent: "warning",
				appearance: "ghost",
				className: "surface-warning-ghost-ia",
			},
			{
				intent: "warning",
				appearance: "link",
				className: "text-warning-ia underline",
			},

			{
				intent: "success",
				appearance: "solid",
				className: "surface-success-solid-ia",
			},
			{
				intent: "success",
				appearance: "subtle",
				className: "surface-success-subtle-ia",
			},
			{
				intent: "success",
				appearance: "outline",
				className: "surface-success-outline-ia",
			},
			{
				intent: "success",
				appearance: "ghost",
				className: "surface-success-ghost-ia",
			},
			{
				intent: "success",
				appearance: "link",
				className: "text-success-ia underline",
			},

			{
				intent: "secondary",
				appearance: "solid",
				className: "surface-secondary-solid-ia",
			},
			{
				intent: "secondary",
				appearance: "subtle",
				className: "surface-secondary-subtle-ia",
			},
			{
				intent: "secondary",
				appearance: "outline",
				className: "surface-secondary-outline-ia",
			},
			{
				intent: "secondary",
				appearance: "ghost",
				className: "surface-secondary-ghost-ia",
			},
			{
				intent: "secondary",
				appearance: "link",
				className: "text-secondary-ia underline",
			},

			{
				intent: "neutral",
				appearance: "solid",
				className: "surface-foreground-solid-ia",
			},
			{
				intent: "neutral",
				appearance: "subtle",
				className: "surface-foreground-subtle-ia",
			},
			{
				intent: "neutral",
				appearance: "outline",
				className: "surface-foreground-outline-ia",
			},
			{
				intent: "neutral",
				appearance: "ghost",
				className: "surface-foreground-ghost-ia",
			},
			{
				intent: "neutral",
				appearance: "link",
				className: "text-foreground-ia underline",
			},
		],
		defaultVariants: {
			intent: "neutral",
			size: "m",
			shape: "rounded",
			appearance: "solid",
			width: "normal",
			lifted: false,
			disabled: false,
			loading: false,
			animated: true,
		},
	},
);

const wrapperVariants = cva(null, {
	variants: {
		loading: {
			true: "cursor-wait",
		},
		disabled: {
			true: "cursor-not-allowed",
		},
	},
});

const intentToColors = {
	primary: "primary",
	secondary: "secondary",
	neutral: "foreground",
	destructive: "error",
	warning: "warning",
	success: "success",
	visited: "visited",
} as const;

export type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>;

export function Button({
	className,
	intent,
	animated = true,
	size,
	width,
	shape,
	children,
	appearance,
	disabled,
	loading,
	lifted,
	onMouseDown,
	onMouseUp,
	onKeyDown,
	onKeyUp,
	...props
}: ButtonProps) {
	const effects = useWaveAnimate({
		animateClassName: `before:animate-wave-${intentToColors[intent ?? "neutral"]}`,
		disabled: appearance === "link" || !animated,
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onMouseUp,
	});
	return (
		<span className={wrapperVariants({ disabled, loading })}>
			<button
				ref={effects.ref}
				className={buttonVariants({
					intent,
					animated,
					size,
					width,
					shape,
					appearance,
					disabled,
					loading,
					lifted,
					className,
				})}
				onKeyDown={effects.onKeyDown}
				onKeyUp={effects.onKeyUp}
				onMouseDown={effects.onMouseDown}
				onMouseUp={effects.onMouseUp}
				disabled={disabled}
				{...props}
			>
				{loading && (
					<SpinnerIcon className="animate-spin absolute pointer-events-none" />
				)}
				{loading ? <span className="text-transparent">{children}</span> : children}
			</button>
		</span>
	);
}
