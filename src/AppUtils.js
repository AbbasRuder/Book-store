import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { onCleanup } from "solid-js";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function clickOutside(el, accessor) {
	const onClick = (e) => !el.contains(e.target) && accessor()?.();
	document.body.addEventListener("click", onClick);
  
	onCleanup(() => document.body.removeEventListener("click", onClick));
}