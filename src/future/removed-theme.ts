// export const theme = (() => {
// 	const store = writable<"light" | "dark">(
// 		(localStorage.getItem("theme") as "light" | "dark") || "light",
// 	)
// 	const { subscribe, set } = store

// 	return {
// 		subscribe,
// 		toggle: () => {
// 			const newTheme = get(store) === "light" ? "dark" : "light"

// 			localStorage.setItem("theme", newTheme)

// 			set(newTheme)
// 		},
// 	}
// })()

// <label class=" label items-center">
// <span class="app-text-emphase-3"> Dark mode </span>

// <input
//     type="checkbox"
//     class="toggle toggle-sm toggle-primary"
//     checked={$theme === "dark"}
//     on:change={() => theme.toggle()}
// />
// </label>
