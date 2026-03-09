"use client";
import { Button } from "@/components/ui/button/button";
import { DatePicker } from "@/components/ui/datepicker/datepicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
	// for time
	const [time, setTime] = useState("12:00");
	console.log("time", time);

	// for range mode
	const [range, setRange] = useState<DateRange>();
	console.log("range", range);

	// for single mode
	// const [date, setDate] = useState<Date>();
	// console.log("date", date);

	return (
		<div className="flex flex-col w-60 mx-auto justify-center grow">
			<DatePicker
				size="s"
				shape="square"
				mode="range"
				selected={range}
				onSelect={setRange}
				time
				timeValue={time}
				onTimeChange={setTime}
			/>

			<div style={{ marginTop: "10px" }}>
				<Button appearance="ghost" intent="success">
					кнопка
				</Button>
			</div>
		</div>
	);
}
