import {
	type KeyboardEventHandler,
	type MouseEventHandler,
	type RefObject,
	useRef,
} from "react";

interface Props<T extends HTMLElement> {
	onKeyDown?: KeyboardEventHandler<T>;
	onKeyUp?: KeyboardEventHandler<T>;
	onMouseDown?: MouseEventHandler<T>;
	onMouseUp?: MouseEventHandler<T>;
	disabled?: boolean;
	animateClassName: string;
}

export const useWaveAnimate = <T extends HTMLElement>({
	onKeyDown,
	onKeyUp,
	onMouseDown,
	onMouseUp,
	disabled,
	animateClassName,
}: Props<T>) => {
	const ref = useRef<T>(null);
	const animate = () => {
		const el = ref.current;
		if (el) {
			requestAnimationFrame(() => el.classList.add(animateClassName));
		}
	};
	const clear = () => {
		const el = ref.current;
		if (el) {
			el.classList.remove(animateClassName);
		}
	};
	const r: {
		ref?: RefObject<T | null>;
		onKeyDown?: KeyboardEventHandler<T>;
		onKeyUp?: KeyboardEventHandler<T>;
		onMouseDown?: MouseEventHandler<T>;
		onMouseUp?: MouseEventHandler<T>;
	} = {};
	if (!disabled) {
		r.ref = ref;
		r.onKeyDown = (e) => {
			onKeyDown?.(e);
			e.code === "Space" && clear();
		};
		r.onKeyUp = (e) => {
			onKeyUp?.(e);
			e.code === "Space" && animate();
		};
		r.onMouseDown = (e) => {
			onMouseDown?.(e);
			!e.button && clear();
		};
		r.onMouseUp = (e) => {
			onMouseUp?.(e);
			!e.button && animate();
		};
	} else {
		r.onKeyDown = onKeyDown;
		r.onKeyUp = onKeyUp;
		r.onMouseDown = onMouseDown;
		r.onMouseUp = onMouseUp;
	}
	return r;
};
