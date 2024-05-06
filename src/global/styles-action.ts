import { GRID } from "./consts"

export const appGrid = (node: HTMLElement) => {
	// node.classList.add("app-gap-grid", "grid", "w-full", "grid-flow-row")
	node.style.gridTemplateColumns = `repeat(${GRID.height}, minmax(0, 1fr))`
	// style={`grid-template-columns: repeat(${GRID.height}, minmax(0, 1fr));`}
	//
}
