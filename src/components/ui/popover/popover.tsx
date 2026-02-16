"use client";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { cva, type VariantProps } from "class-variance-authority";

const Arrow = () => (
	<div className="bg-[canvas] relative border-l-1 border-t-1  border-muted w-12d h-12d rotate-45" />
);
//TODO try use corner-shape
export const popupVariants = cva(
	"origin-[var(--transform-origin)] bg-[canvas] shadow-lg border-1 border-muted transition-all duration-500 transition-[transform,scale,opacity] data-[ending-style=true]:scale-90 data-[ending-style=true]:opacity-0 data-[starting-style=true]:scale-90 data-[starting-style=true]:opacity-0 outline-none leading-none p-[1em]",
	{
		variants: {
			size: {
				xs: "fs-3d font-9d",
				s: "fs-3d font-9d",
				m: "fs-4d font-8d",
				l: "fs-5d font-7d",
				xl: "fs-6d font-6d",
			},
			shape: {
				rounded: null,
				square: "rounded-none",
				circular: "rounded-[1em]",
			},
		},
		compoundVariants: [
			{
				size: "xs",
				shape: "rounded",
				className: "rounded-8d",
			},
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
			{
				size: "xl",
				shape: "rounded",
				className: "rounded-12d",
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
			top: "-bottom-8d rotate-180",
			right: "-left-8d -rotate-90",
			left: "-right-8d rotate-90",
			bottom: "-top-8d",
		},
	},
	defaultVariants: {
		side: "top",
	},
});

export function Popover(props: BasePopover.Root.Props) {
	return <BasePopover.Root {...props} />;
}

Popover.Title = BasePopover.Title;
Popover.Description = BasePopover.Description;
export const PopoverTrigger = (props: BasePopover.Trigger.Props) => (
	<BasePopover.Trigger
		className={"flex items-center justify-center leading-none"}
		nativeButton={false}
		render={<span tabIndex={-1} />}
		{...props}
	/>
);
export type PopoverPortalProps = VariantProps<typeof popupVariants> &
	VariantProps<typeof arrowVariants> &
	BasePopover.Popup.Props;
export const PopoverPortal = ({
	side,
	shape,
	children,
	size,
}: PopoverPortalProps) => (
	<BasePopover.Portal>
		<BasePopover.Positioner sideOffset={8} side={side ?? undefined}>
			<BasePopover.Popup className={popupVariants({ shape, size })}>
				<BasePopover.Arrow className={arrowVariants({ side })}>
					<Arrow />
				</BasePopover.Arrow>
				{children}
			</BasePopover.Popup>
		</BasePopover.Positioner>
	</BasePopover.Portal>
);
