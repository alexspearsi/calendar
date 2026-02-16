import { Select as BaseSelect } from "@base-ui/react/select";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { CheckIcon } from "../icons/check";
import { ChevronUpDownIcon } from "../icons/chevron-up-down";
import { SpinnerIcon } from "../icons/spinner";

const selectTriggerVariants = cva("w-full disabled:pointer-events-none", {
	variants: {
		size: {
			xs: "text-3d font-10d h-[1.8em]",
			s: "text-3d font-10d h-[2em]",
			m: "text-4d font-9d h-[2em]",
			l: "text-5d font-8d h-[2em]",
			xl: "text-6d font-8d h-[2em]",
		},
		intent: {
			neutral: null,
			secondary: null,
		},
		width: {
			narrow: null,
			normal: null,
			wide: null,
			fill: null,
		},
		shape: {
			rounded: null,
			square: null,
			circular: "rounded-[1em]",
		},
		disabled: {
			true: "opacity-50 saturate-50 contrast-60 pointer-events-none",
		},
		loading: {
			true: "text-transparent cursor-wait pointer-events-none",
			false: "cursor-pointer",
		},
		status: {
			valid:
				"border-success text-success focus-visible:shadow-focus-success focus-visible:outline-success-d",
			warning:
				"border-warning text-warning focus-visible:shadow-focus-warning focus-visible:outline-warning-d",
			invalid:
				"border-error text-error focus-visible:shadow-focus-error focus-visible:outline-error-d",
		},
	},
	compoundVariants: [
		{
			status: undefined,
			intent: "secondary",
			className:
				"surface-secondary-outline focus-visible:shadow-focus-secondary",
		},
		{
			status: undefined,
			intent: "neutral",
			className:
				"surface-foreground-outline focus-visible:shadow-focus-foreground",
		},
		{
			size: "xs",
			shape: "rounded",
			className: "rounded-6d",
		},
		{
			size: "s",
			shape: "rounded",
			className: "rounded-7d",
		},
		{
			size: "m",
			shape: "rounded",
			className: "rounded-8d",
		},
		{
			size: "l",
			shape: "rounded",
			className: "rounded-9d",
		},
		{
			size: "xl",
			shape: "rounded",
			className: "rounded-10d",
		},
	],
	defaultVariants: {
		size: "m",
		shape: "rounded",
		loading: false,
		intent: "neutral",
	},
});
const popupVariants = cva(
	"group min-w-[var(--anchor-width)] origin-[var(--transform-origin)] bg-clip-padding shadow-2d surface-secondary-outline transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none outline-none",
	{
		variants: {
			shape: {
				square: null,
				rounded: null,
				circular: "rounded-[1em]",
			},
			intent: {
				neutral: "bg-3",
				secondary: "bg-2",
			},
			size: {
				xs: "text-3d font-10d",
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
				xl: "text-6d font-8d",
			},
		},
		compoundVariants: [
			{
				size: "s",
				shape: "rounded",
				className: "rounded-7d",
			},
			{
				size: "m",
				shape: "rounded",
				className: "rounded-8d",
			},
			{
				size: "l",
				shape: "rounded",
				className: "rounded-9d",
			},
		],
		defaultVariants: {
			shape: "rounded",
			size: "m",
			intent: "neutral",
		},
	},
);
const triggerWrapperVariants = cva("flex items-center justify-center", {
	variants: {
		disabled: {
			true: "cursor-not-allowed",
		},
		loading: {
			true: "cursor-wait",
		},
		width: {
			narrow: "w-[13ch]",
			normal: "w-[18ch]",
			wide: "w-[25ch]",
			fill: "w-full",
		},
	},
	defaultVariants: {
		width: "normal",
	},
});

interface Option {
	label: React.ReactNode;
	value: string | number | null;
}

export type SelectProps = VariantProps<typeof selectTriggerVariants> & {
	options: Option[];
	required?: boolean;
	placeholder?: BaseSelect.Value.Props["placeholder"];
	id?: string;
	children?: ReactNode;
	defaultValue?: Option;
};

export function Select({
	options,
	size,
	shape,
	loading,
	disabled,
	placeholder,
	width,
	status,
	required,
	intent,
	defaultValue,
	id,
}: SelectProps) {
	const isNumberOptions = typeof options?.[0]?.value === "number";
	return (
		<BaseSelect.Root
			items={options}
			disabled={disabled ?? undefined}
			required={required}
			id={id}
			defaultValue={defaultValue}
		>
			<span className={triggerWrapperVariants({ disabled, loading, width })}>
				{loading && (
					<SpinnerIcon className="animate-spin absolute pointer-events-none" />
				)}
				<BaseSelect.Trigger
					className={cn(
						"flex ps-[1ch] items-center justify-between gap-[1ch] border-3d select-none",
						(intent === "neutral" || !intent) && "bg-3 hover:bg-2",
						intent === "secondary" && "bg-2 hover:bg-1",
						isNumberOptions && "font-mono",
						selectTriggerVariants({
							size,
							shape,
							disabled,
							loading,
							status,
							intent,
						}),
					)}
				>
					<BaseSelect.Value
						placeholder={placeholder}
						className={"data-[placeholder]:text-muted-3"}
					/>
					<BaseSelect.Icon className="flex w-[2em] justify-center">
						<ChevronUpDownIcon className="stroke-3d" />
					</BaseSelect.Icon>
				</BaseSelect.Trigger>
			</span>
			<BaseSelect.Portal>
				<BaseSelect.Positioner
					className="outline-none select-none z-10"
					sideOffset={8}
				>
					<BaseSelect.Popup className={popupVariants({ shape, size, intent })}>
						<BaseSelect.ScrollUpArrow className="top-0 left-0 z-[1] flex h-[2em] rounded-t-[1em] w-full items-center justify-center bg-[canvas] text-center" />
						<BaseSelect.List className="relative scroll-py-6 overflow-y-auto max-h-[var(--available-height)]">
							{options.map(({ value }) => (
								<BaseSelect.Item
									key={value}
									value={value}
									className={cn(
										"grid grid-cols-[1.75em_1fr] items-center select-none group-data-[side=none]:pr-12 group-data-[side=none]:leading-4 data-[highlighted]:surface-foreground-solid data-[highlighted]:before:z-[-1] outline-none",
										isNumberOptions && "font-mono",
										selectTriggerVariants({ shape, size }),
									)}
								>
									<BaseSelect.ItemIndicator className="col-start-1 justify-self-center">
										<CheckIcon size="1.125em" />
									</BaseSelect.ItemIndicator>
									<BaseSelect.ItemText className="col-start-2">
										{value}
									</BaseSelect.ItemText>
								</BaseSelect.Item>
							))}
						</BaseSelect.List>
						<BaseSelect.ScrollDownArrow className="bottom-0 left-0 z-[1] flex h-[2em] w-full items-center justify-center rounded-b-[1em] bg-[canvas] text-center" />
					</BaseSelect.Popup>
				</BaseSelect.Positioner>
			</BaseSelect.Portal>
		</BaseSelect.Root>
	);
}
