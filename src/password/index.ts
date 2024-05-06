import { invoke } from "@tauri-apps/api"
import { MIN_COLOR_FOR_DRAWING } from "../global/consts"
import type { Color, DrawingGrid } from "../global/types"

type ValidPixelGrid = Color[][]

export const generatePasswordFromPixels = async (
	pixelGrid: DrawingGrid,
): Promise<string> => {
	if (pixelGrid.flat().includes(undefined)) {
		throw new Error("Drawing isn't finished")
	}

	const uniqueColorsNumber = new Set(pixelGrid.flat()).size
	if (uniqueColorsNumber < MIN_COLOR_FOR_DRAWING) {
		throw new Error(
			`Drawing has less than ${MIN_COLOR_FOR_DRAWING} unique colors`,
		)
	}

	const inputBuffer = pixelGrid
		.flat()
		.map((color) => color.id)
		.join("")

	return await invoke("hash_password", {
		buffer: inputBuffer,
	})
}
