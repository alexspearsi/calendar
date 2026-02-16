"use client";

import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/ui/icons/moon";
import { SunIcon } from "@/components/ui/icons/sun";
import { Toggle } from "@/components/ui/toggle/toggle";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	return (
		<Toggle
			pressed={theme === "light"}
			appearance={"ghost"}
			onPressedChange={(v) => setTheme(v ? "light" : "dark")}
			shape={"circular"}
			intent={"secondary"}
		>
			{theme === "light" ? <SunIcon /> : <MoonIcon />}
		</Toggle>
	);
}
