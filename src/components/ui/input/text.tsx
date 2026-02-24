import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { SpinnerIcon } from "../icons/spinner";

const textInputVariants = cva(
	"placeholder:text-muted-3 grow outline-none leading-none px-[1ch] min-w-0",
	{
		variants: {
			size: {
				xs: null,
				s: null,
				m: null,
				l: null,
				xl: null,
			},
			width: {
				narrow: null,
				normal: null,
				wide: null,
				fill: null,
			},
			appearance: {
				solid: null,
				outline: null,
			},
			intent: {
				neutral: null,
				secondary: null,
			},
			disabled: {
				true: null,
			},
			loading: {
				true: "text-transparent placeholder:text-transparent",
			},
			lifted: {
				true: null,
				false: null,
			},
			shape: {
				rounded: null,
				square: "rounded-none",
				circular: "rounded-full",
			},
			status: {
				valid: "[&&]-selection:surface-success-solid",
				warning: "[&&]-selection:surface-warning-solid",
				invalid: "[&&]-selection:surface-error-solid",
			},
		},
		defaultVariants: {
			size: "m",
			lifted: false,
			shape: "rounded",
			intent: "neutral",
			width: "normal",
		},
	},
);
const groupVariants = cva(
	"transition-all flex overflow-hidden has-invalid:ring-error-6d border-3d text-2",
	{
		variants: {
			size: {
				xs: "text-3d font-10d h-[1.8em]",
				s: "text-3d font-10d h-[2em]",
				m: "text-4d font-9d h-[2em]",
				l: "text-5d font-8d h-[2em]",
				xl: "text-6d font-8d h-[2em]",
			},
			intent: {
				neutral: "bg-3 hover:has-focus:bg-3 hover:bg-2",
				secondary: "bg-2 hover:has-focus:bg-2 hover:bg-1",
			},
			width: {
				narrow: "w-[17ch]",
				normal: "w-[23ch]",
				wide: "w-[33ch]",
				fill: "w-full",
			},
			disabled: {
				true:
					"cursor-not-allowed pointer-events-none saturate-50 opacity-50 contrast-60 dark:contrast-90",
			},
			loading: {
				true: "cursor-wait pointer-events-none",
			},
			shape: {
				rounded: null,
				square: null,
				circular: "rounded-full",
			},
			status: {
				valid: "focus-within:ring-success-6d border-success text-success",
				warning: "focus-within:ring-warning-6d border-warning text-warning",
				invalid: "focus-within:ring-error-6d border-error text-error",
			},
		},
		compoundVariants: [
			{
				status: undefined,
				className: "focus-within:ring-primary-6d focus-within:border-primary",
			},
			{
				status: undefined,
				intent: "neutral",
				className: "border-foreground",
			},
			{
				status: undefined,
				intent: "secondary",
				className: "border-secondary",
			},
			{
				shape: "rounded",
				size: "xs",
				className: "rounded-6d",
			},
			{
				shape: "rounded",
				size: "s",
				className: "rounded-7d",
			},
			{
				shape: "rounded",
				size: "m",
				className: "rounded-8d",
			},
			{
				shape: "rounded",
				size: "l",
				className: "rounded-9d",
			},
			{
				shape: "rounded",
				size: "xl",
				className: "rounded-10d",
			},
		],
		defaultVariants: {
			size: "m",
			shape: "rounded",
			width: "normal",
			intent: "neutral",
		},
	},
);

type TextInputType = Exclude<
	React.ComponentProps<"input">["type"],
	| "button"
	| "number"
	| "checkbox"
	| "color"
	| "time"
	| "image"
	| "file"
	| "hidden"
	| "date"
	| "datetime-local"
	| "month"
	| "week"
	| "radio"
	| "range"
	| "reset"
	| "submit"
>;

type GroupProps = VariantProps<typeof groupVariants>;

export type TextInputProps = Omit<
	React.ComponentProps<"input">,
	"type" | "size"
> &
	VariantProps<typeof textInputVariants> & {
		type?: TextInputType;
		startContent?: React.ReactNode;
		endContent?: React.ReactNode;
	} & GroupProps;

// TODO Add x button to delete content
// TODO Move wrapper to separate component ???
export function TextInput({
	className,
	type,
	size,
	lifted,
	intent,
	shape,
	disabled,
	startContent,
	endContent,
	width,
	loading,
	status,
	...props
}: TextInputProps) {
	return (
		<div
			className={cn(
				"flex",
				disabled && "cursor-not-allowed",
				loading && "cursor-wait",
			)}
		>
			<div
				className={cn(
					"flex relative items-center justify-center",
					groupVariants({
						shape,
						size,
						disabled,
						loading,
						status,
						width,
						intent,
					}),
				)}
			>
				{startContent}
				<input
					type={type}
					className={cn(
						textInputVariants({
							lifted,
							shape,
							size,
							status,
							intent,
							disabled,
							loading,
							width,
						}),
						className,
					)}
					disabled={disabled}
					{...props}
				/>
				{endContent}
				{loading && (
					<SpinnerIcon className="animate-spin absolute pointer-events-none" />
				)}
			</div>
		</div>
	);
}
