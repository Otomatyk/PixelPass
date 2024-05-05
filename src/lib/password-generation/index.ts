import type { Color } from "../types";

export const generatePasswordFromPixels = (colorGrid: Color[][]): string => {
	return colorGrid
		.flat()
		.map((color) => color.id)
		.join("");
};
