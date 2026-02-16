import { Button, ButtonProps } from "../button/button";
import { Popover, PopoverPortal, PopoverTrigger } from "../popover/popover";

import { cva, VariantProps } from "class-variance-authority";
import { Calendar, DatePickerValue } from '../calendar/calendar';
import { CalendarIcon } from '../icons/calendar';
import type { DateRange } from 'react-day-picker';

const datepickerVariants = cva(null, {
	variants: {
		size: {
			s: "text-3d font-10d",
			m: "text-4d font-9d",
			l: "text-5d font-8d",
		},
		status: {
			valid: null,
			warning: null,
			invalid: null,
		},
		shape: {
			rounded: null,
			square: "rounded-none",
			circular: "rounded-full",
		},
		appearance: {
			solid: null,
			subtle: null,
			outline: "before:outline-offset-1.6 border-1.6 focus-visible:border-none",
			ghost: null,
			link: "underline",
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

export type DatePickerProps = VariantProps<typeof datepickerVariants> & {
  value?: DatePickerValue;
  defaultValue?: DatePickerValue;
  onChange?: (value: DatePickerValue) => void;
};

const statusToIntent = {
	invalid: "destructive",
	warning: "warning",
	valid: "success",
} as const;
// TODO сделать проброс свойств настраивающих поведение (отключение времени, изменение режима с диапазона на единичный и тп)
export function DatePicker({
	shape,
	size,
	status,
	appearance,
  onChange,
	value
}: DatePickerProps) {
	const intent: ButtonProps["intent"] = status
		? statusToIntent[status]
		: "neutral";


	return (
  <Popover>
		
    <PopoverTrigger>
      <Button 
				size={size} 
				appearance={appearance} 
				shape={shape}
			>
        <span className={'-mr-3px'}>Datepicker</span>
        <CalendarIcon />
      </Button>
    </PopoverTrigger>

    <PopoverPortal shape={shape}>
      <Calendar 
				size={size} 
				shape={shape} 
				value={value} 
				onChange={onChange}
			/>
    </PopoverPortal>

  </Popover>
	);
}