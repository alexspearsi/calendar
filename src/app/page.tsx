"use client";
import { DatePicker } from "@/components/ui/datepicker/datepicker";
import { useState } from "react";
// import { DateRange } from 'react-day-picker';

export default function Home() {
	// for range mode
	// const [range, setRange] = useState<DateRange>();
	// console.log(range);

	// for single mode
	const [date, setDate] = useState<Date>();
	console.log(date);

	return (
		<div className="flex flex-col w-60 mx-auto justify-center grow">
			<DatePicker
				size="l"
				shape="square"
				mode="single"
				selected={date}
				onSelect={setDate}
			/>
		</div>
	);
}
