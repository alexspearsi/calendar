'use client'

{/* // TODO Разобраться с положением стрелки относительно попапа */}
{/* // TODO onChange defaultValue value */}
{/* // styleProps -> nested -> nested */}

import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "@/components/ui/link/link";
import { DatePicker } from '@/components/ui/datepicker/datepicker';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { DatePickerValue } from '@/components/ui/calendar/calendar';

const robotoSans = localFont({ src: "./Roboto-Variable.ttf" });


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const [dateRange, setDateRange] = useState<DatePickerValue>({
		from: new Date(new Date().getFullYear(), 0, 12),
		to: new Date(new Date().getFullYear(), 0, 12 + 3),
	})



	console.log('Range', dateRange);


	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${robotoSans.className} bg-neutral min-h-screen flex flex-col`}
				>
					<ThemeProvider
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						attribute={"class"}
					>
						<header className="px-16d py-8d bg-neutral-1 shadow-4d">
							<div className="flex justify-between items-center gap-16d mx-auto xl:container">
								<Link href="/">FMD</Link>
								<ThemeToggle />
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</header>
						<main className="grow flex flex-col xl:container mx-auto">

							<div>
								<DatePicker 
									size={'s'} 
									shape={'circular'} 
									value={dateRange} 
									onChange={setDateRange}
								/>
								
							</div>


						</main>
						<footer className="p-16d bg-foreground-0d">
							<div className="xl:container mx-auto text-background-850d">footer</div>
						</footer>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
