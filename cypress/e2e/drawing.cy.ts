/// <reference types="cypress" />

describe("Drawing", () => {
	it("can draw", () => {
		cy.visit("http://localhost:1420")
			.get("[data-test-id='select-color-1']")
			.click()
			.get()
	})
})
