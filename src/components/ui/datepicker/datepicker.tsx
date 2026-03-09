"use client";

import { Button } from "../button/button";
import { CalendarIcon } from "../icons/calendar";
import { Calendar } from "../calendar/calendar";
import { Popover } from "../popover/popover";
import { cva, type VariantProps } from "class-variance-authority";

// // TODO сделать проброс свойств настраивающих поведение (отключение времени, изменение режима с диапазона на единичный и тп)

const datepickerVariants = cva(null, {
	variants: {
		size: {
			s: "text-3d font-10d",
			m: "text-4d font-9d",
			l: "text-5d font-8d",
		},
		shape: {
			rounded: null,
			square: "rounded-none",
			circular: "rounded-full",
		},
	},
	defaultVariants: {
		size: "m",
		shape: "rounded",
	},
});

export type DatePickerProps = VariantProps<typeof datepickerVariants> &
	React.ComponentProps<typeof Calendar> & {
		time?: boolean;
		timeValue?: string;
		onTimeChange?: (value: string) => void;
	};

export function DatePicker({ size, shape, ...calendarProps }: DatePickerProps) {
	return (
		<Popover
			shape={shape}
			content={<Calendar {...calendarProps} size={size} shape={shape} />}
		>
			<Button size={size} shape={shape}>
				Datepicker <CalendarIcon />
			</Button>
		</Popover>
	);
}
