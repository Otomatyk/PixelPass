import { get, writable } from "svelte/store";
import { COLOR_PALETTE, GRID } from "./consts";
import type { Color } from "./types";

export const selectedColor = writable(COLOR_PALETTE.at(-1));

export enum Pages {
	Home = "home",
	Settings = "settings",
}

export const currentPage = writable<Pages>(Pages.Home);

const getEmptyGrid = () => {
	return [...Array(GRID.width)].map(() => [...Array(GRID.height)]);
};

export const drawingGrid = (() => {
	const { subscribe, set } = writable<(Color | undefined)[][]>(getEmptyGrid());

	return {
		subscribe,
		set,

		clear: () => {
			set(getEmptyGrid());
		},
	};
})();

export const theme = (() => {
	const store = writable<"light" | "dark">(
		(localStorage.getItem("theme") as "light" | "dark") || "light",
	);
	const { subscribe, set } = store;

	return {
		subscribe,
		toggle: () => {
			const newTheme = get(store) === "light" ? "dark" : "light";

			localStorage.setItem("theme", newTheme);

			set(newTheme);
		},
	};
})();
