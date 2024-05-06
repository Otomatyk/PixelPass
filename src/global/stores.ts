import { get, writable } from "svelte/store"
import { COLOR_PALETTE, GRID } from "./consts"
import type { Color, DrawingGrid } from "./types"

export const selectedColor = writable(COLOR_PALETTE.at(-1))

export const drawingGrid = (() => {
	const getEmptyGrid = () => {
		return [...Array(GRID.width)].map(() => [...Array(GRID.height)])
	}

	const { subscribe, set } = writable<DrawingGrid>(getEmptyGrid())

	return {
		subscribe,
		set,

		clear: () => {
			set(getEmptyGrid())
		},
	}
})()

export enum Pages {
	Home = "home",
	Settings = "settings",
}

export const currentPage = writable<Pages>(Pages.Home)
