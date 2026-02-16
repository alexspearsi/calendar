/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
"use client";

import { DayPicker, Dropdown } from "react-day-picker";
import type { DateRange, DropdownProps } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

import { ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRightIcon } from "../icons/chevron-right";
import { ChevronUpIcon } from "../icons/chevron-up";
import { cn } from "@/lib/utils/cn";
import { Label } from "../label/label";
import { TextInput } from "../input/text";

import { cva, VariantProps } from "class-variance-authority";
import { useState } from 'react';


const calendarVariants = cva("h-[2em] w-[2em] cursor-pointer", {
	variants: {
		size: {
      s: "text-3d font-10d",
      m: "text-4d font-9d",
      l: "text-5d font-8d",
		},
		shape: {
			rounded: null,
			square: "rounded-none",
			circular: "rounded-[1em]",
		},
    appearance: {
      solid: "surface-primary-solid",
      subtle: "surface-primary-subtle",
      outline: "border border-foreground",
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
		size: "m",
		shape: "rounded",
	},
});

export type DatePickerValue = DateRange | Date | undefined;

export type CalendarProps = VariantProps<typeof calendarVariants> & {
  value?: DateRange;
  onChange?: (value: DatePickerValue) => void;
};
// 1. увеличить текст панели управления
// 2. Сделать начало и конец диапазона даты выделением через surface-primary-solid
// 3. Фокус кнопок переделать через focus-visible:shadow-focus-foreground  focus-visible:shadow-focus-primary (по цвету кнопки)
// 4. зафиксировать высоту календаря
// 5. кнопки в панели управления оформить через поверхности (surface-foreground-ghost)
export function Calendar({ 
  size,
  shape,
  value,
  onChange,
}: CalendarProps) {

	return (
		<>
			<DayPicker
				mode="range"
				selected={value}
				onSelect={onChange}
        captionLayout="dropdown"
				navLayout="around"
				startMonth={new Date(1920, 0, 1)}
				endMonth={new Date(2030, 0, 1)}
				numberOfMonths={1}
				classNames={{
					...classNames,
					root: cn(classNames.root, 'mb-16d'),
					
          today: (cn(calendarVariants({size, shape}), 'surface-primary-outline [&>button]:border-3d')),
					
          day: calendarVariants({size, shape}),
					
					selected: "font-normal",
          
          day_button: calendarVariants({size, shape}),
					
          range_middle: cn(classNames.range_middle, "surface-foreground-subtle rounded-100"),
					
          range_start: "surface-foreground-subtle rounded-100",
					
          range_end: "surface-foreground-subtle rounded-100",
				}}
				components={{
					Chevron: ({ orientation }) => {
						switch (orientation) {
							case "left":
								return <ChevronLeftIcon size={'1em'} />;
							case "right":
								return <ChevronRightIcon size={'1em'}  />;
							case "up":
								return <ChevronUpIcon size={'1em'}  />;
							default:
								return <ChevronUpIcon size={'1em'}  />;
						}
					},
					Dropdown: (props) => {
						return <DropdownSelect {...props} size={size} />;
					},
				}}
			/>
				<div className="flex items-center justify-center gap-3">
					<Label 
						size={size} 
						htmlFor="time"
					>
						Enter time
					</Label>

					<TextInput
						id="time"
						type="time"
						step="1"
						defaultValue="12:00:00"
						size={size}
            shape={shape}
						className="pr-3 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
					/>
				</div>
		</>
	);
}

					
const dropDownSelectVariants = cva('', {
	variants: {
		size: {
      s: "text-2d font-8d",
      m: "text-3d font-7d",
      l: "text-4d font-6d",
		},
	},
	defaultVariants: {
		size: "m",
	},
});

export type DropDownSelectProps = VariantProps<typeof dropDownSelectVariants> & Omit<DropdownProps, 'size'>;

function DropdownSelect({ 
	options, 
	value, 
	onChange,
	size,
}: DropDownSelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	if (!options) {
		return null;
	}

	const selected = options.find(option => option.value === value);

	function handleSelectChange(onChange: DropdownProps['onChange'], value: string) {
		if (!onChange) return;

		onChange({
			target: { value },
		} as unknown as React.ChangeEvent<HTMLSelectElement>);
	}

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setIsOpen(isOpen => !isOpen)}
				className={cn(
					dropDownSelectVariants({size}),
					"surface-neutral-solid",
					"rounded-8d px-4d py-2d",
					"cursor-pointer",
					"flex items-center gap-2"
				)}
			>
				{selected?.label}
				<ChevronUpIcon
					className={cn(
						"transition-transform",
						isOpen && "rotate-180"
					)}
				/>
			</button>

			{isOpen && (
				<div
					className={cn(
						"absolute z-50 mt-2",
						"surface-background-solid",
						"dark:surface-foreground-solid",
						"rounded-8d shadow-lg",
					)}
				>
					<div className="max-h-[180px] overflow-y-auto sbw-none">
						{options?.reverse().map(option => (
							<button
								key={option.value}
								onClick={() => {
									handleSelectChange(onChange, String(option.value))
									setIsOpen(false);
								}}
								className={cn(dropDownSelectVariants({size}), "w-full text-left hover:surface-secondary-subtle p-6d ml-6d")}
							>
								{option.label}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}








