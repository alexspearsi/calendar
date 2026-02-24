"use client";

import { DayPicker } from "react-day-picker";
import type { PropsSingle, PropsRange, DropdownProps } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

import { ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRightIcon } from "../icons/chevron-right";

import { cn } from "@/lib/utils/cn";
import { Label } from "../label/label";
import { TextInput } from "../input/text";

import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";

// //1. увеличить текст панели управления
// 2. Сделать начало и конец диапазона даты выделением через surface-primary-solid
// 3. Фокус кнопок переделать через focus-visible:shadow-focus-foreground focus-visible:shadow-focus-primary (по цвету кнопки)
// //4. зафиксировать высоту календаря
// 5. кнопки в панели управления оформить через поверхности (surface-foreground-ghost)

/* -------------------- styles -------------------- */

const calendarVariants = cva("h-[2em] w-[2em] cursor-pointer", {
	variants: {
		size: {
			s: "text-3d font-10d",
			m: "text-4d font-9d",
			l: "text-5d font-8d",
		},
		shape: {
			rounded: "rounded",
			square: "rounded-none",
			circular: "rounded-full",
		},
	},
	defaultVariants: {
		size: "m",
		shape: "rounded",
	},
});

const calendarRootVariants = cva("", {
	variants: {
		size: {
			s: "w-[190px]",
			m: "w-[228px]",
			l: "w-[268px]",
		},
	},
	defaultVariants: {
		size: "m",
	},
});

export type CalendarProps = VariantProps<typeof calendarVariants> &
	(PropsSingle | PropsRange);

export function Calendar({ size, shape, ...dayPickerProps }: CalendarProps) {
	return (
		<>
			<DayPicker
				{...dayPickerProps}
				fixedWeeks
				captionLayout="dropdown"
				navLayout="around"
				startMonth={new Date(1920, 0, 1)}
				endMonth={new Date(2030, 0, 1)}
				numberOfMonths={1}
				classNames={{
					...classNames,
					root: cn(classNames.root, calendarRootVariants({ size })),

					today: cn(
						calendarVariants({ size, shape }),
						"surface-primary-outline [&>button]:border-3d",
					),

					day: calendarVariants({ size, shape }),

					day_button: calendarVariants({ size, shape }),

					selected: cn(
						calendarVariants({ size, shape }),
						"surface-primary-solid text-white",
					),

					range_middle: cn(
						classNames.range_middle,
						"surface-foreground-subtle rounded-100",
					),
					range_start: "surface-foreground-subtle rounded-100",
					range_end: "surface-foreground-subtle rounded-100",
				}}
				components={{
					Chevron: ({ orientation }) => {
						switch (orientation) {
							case "left":
								return <ChevronLeftIcon />;
							case "right":
								return <ChevronRightIcon />;
							default:
								return <ChevronLeftIcon />;
						}
					},

					Dropdown: (props) => (
						<DropdownSelect {...props} size={size} shape={shape} />
					),
				}}
			/>

			{/* optional time input */}
			<div className="flex items-center justify-center gap-3">
				<Label size={size} htmlFor="time">
					Enter time
				</Label>

				<TextInput
					id="time"
					type="time"
					width="fill"
					step="1"
					defaultValue="12:00:00"
					size={size}
					shape={shape}
					className={cn("[&::-webkit-calendar-picker-indicator]:hidden")}
				/>
			</div>
		</>
	);
}

/* -------------------- DropdownSelect -------------------- */

const dropdownTriggerVariants = cva("cursor-pointer", {
	variants: {
		size: {
			s: "font-8d fs-5d w-50px",
			m: "font-7d fs-6d w-60px",
			l: "font-6d fs-7d w-70px",
		},
		type: {
			trigger: "",
			option: "hover:surface-secondary-subtle",
		},
		shape: {
			rounded: "rounded",
			square: "rounded-none",
			circular: "rounded-full",
		},
	},
	defaultVariants: {
		size: "m",
		shape: "rounded",
	},
});

const dropdownContainerVariants = cva(
	"absolute z-50 shadow-lg surface-background-solid",
	{
		variants: {
			shape: {
				rounded: "rounded",
				square: "rounded-none",
				circular: "rounded-full",
			},
		},
		defaultVariants: {
			shape: "rounded",
		},
	},
);

type DropDownSelectProps = VariantProps<typeof dropdownTriggerVariants> &
	Omit<DropdownProps, "size">;

function DropdownSelect({
	options,
	value,
	onChange,
	size,
	shape,
}: DropDownSelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	if (!options) return null;

	const selected = options.find((o) => o.value === value);

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setIsOpen((v) => !v)}
				className={cn(dropdownTriggerVariants({ size, type: "trigger", shape }))}
			>
				{formatLabel(selected?.label)}
			</button>

			{isOpen && (
				<div className={dropdownContainerVariants({ shape })}>
					<div className="max-h-[180px] overflow-y-auto sbw-none">
						{options.map((option) => (
							<button
								type="button"
								key={option.value}
								onClick={() => {
									onChange?.({ target: { value: String(option.value) } } as any);
									setIsOpen(false);
								}}
								className={cn(dropdownTriggerVariants({ size, type: "option" }))}
							>
								{formatLabel(option.label)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

function formatLabel(label?: string) {
	if (!label) return "";
	if (/^\d+$/.test(label)) return label;
	return label.slice(0, 3);
}
