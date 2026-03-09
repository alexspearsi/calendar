"use client";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const Arrow = () => (
	<div className="p-1">
		<div
			style={{ width: 8, height: 8, transform: "rotate(45deg)" }}
			className="bg-[canvas] relative border-l-1 border-t-1  border-muted"
		/>
	</div>
);

export const popoverVariants = cva(
	"origin-[var(--transform-origin)] bg-[canvas] p-12d shadow-lg border-1 border-muted transition-all duration-500 transition-[transform,scale,opacity] data-[ending-style=true]:scale-90 data-[ending-style=true]:opacity-0 data-[starting-style=true]:scale-90 data-[starting-style=true]:opacity-0 outline-none",
	{
		variants: {
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
			shape: {
				rounded: null,
				square: "rounded-none",
				// circular: "rounded-4xl"
				circular: "rounded-full",
			},
		},
		compoundVariants: [
			{
				size: "s",
				shape: "rounded",
				className: "rounded-9d",
			},
			{
				size: "m",
				shape: "rounded",
				className: "rounded-10d",
			},
			{
				size: "l",
				shape: "rounded",
				className: "rounded-11d",
			},
		],
		defaultVariants: {
			size: "m",
			shape: "rounded",
		},
	},
);

const arrowVariants = cva(null, {
	variants: {
		side: {
			top: "-bottom-12d rotate-180",
			right: "-left-12d -rotate-90",
			left: "-right-12d rotate-90",
			bottom: "-top-12d",
		},
	},
	defaultVariants: {
		side: "top",
	},
});

export type PopoverProps = {
	children: React.ReactNode;
	description?: string;
	title?: string;
	rootProps?: BasePopover.Root.Props;
	content?: ReactNode;
	openOnHover?: boolean;
} & VariantProps<typeof popoverVariants> &
	VariantProps<typeof arrowVariants>;

export function Popover({
	rootProps,
	content,
	children,
	title,
	side,
	description,
	openOnHover,
	size,
	shape,
}: PopoverProps) {
	return (
		<BasePopover.Root {...rootProps}>
			<BasePopover.Trigger
				className={"flex items-center justify-center leading-none"}
				nativeButton={false}
				render={
					<span
						className="data-[popup-open]:pointer-events-none"
						tabIndex={-1}
					></span>
				}
				openOnHover={openOnHover}
			>
				{children}
			</BasePopover.Trigger>
			<BasePopover.Portal>
				<BasePopover.Positioner sideOffset={8} side={side ?? "top"}>
					<BasePopover.Popup className={popoverVariants({ shape, size })}>
						<BasePopover.Arrow className={arrowVariants({ side })}>
							<Arrow />
						</BasePopover.Arrow>
						{title && (
							<BasePopover.Title className="font-11d text-5d">
								{title}
							</BasePopover.Title>
						)}
						<BasePopover.Description>{description}</BasePopover.Description>
						{content}
					</BasePopover.Popup>
				</BasePopover.Positioner>
			</BasePopover.Portal>
		</BasePopover.Root>
	);
}
