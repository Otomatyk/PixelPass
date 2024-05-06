import type { Color } from "./types"

export const COLOR_PALETTE: Color[] = [
	{ id: 0, value: "#dc2626" }, // Red
	{ id: 1, value: "#7c2d12" }, // Brown
	{ id: 2, value: "#f97316" }, // Orange
	{ id: 3, value: "#facc15" }, // Yellow
	{ id: 4, value: "#84cc16" }, // Light green
	{ id: 5, value: "#065f46" }, // Dark green
	{ id: 6, value: "#06b6d4" },
	{ id: 7, value: "#1d4ed8" },
	{ id: 8, value: "#4338ca" },
	{ id: 9, value: "#c026d3" },
	{ id: 10, value: "#6366f1" },
	{ id: 11, value: "#e2e8f0" }, // White
	{ id: 12, value: "#64748b" }, // Light gray
	{ id: 13, value: "#1e293b" }, // Dark gray
	{ id: 14, value: "#020617" }, // Black
]

export const GRID = {
	width: 5,
	height: 5,
}

export const TOAST_CONFIG = {
	style: "border-radius: 0px; font-weight: 500;",
	duration: 2500,
}

export const MIN_COLOR_FOR_DRAWING = 2
