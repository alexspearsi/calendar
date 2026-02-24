"use client";

import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/ui/icons/moon";
import { SunIcon } from "@/components/ui/icons/sun";
import { Toggle } from "@/components/ui/toggle/toggle";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

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
