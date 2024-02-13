import { generateCSS } from "./generateCss.js";

describe("badgePlugin", () => {
	it("generates badge classes correctly", async () => {
		const output = await generateCSS('<div class="badge-sm badge-red-500">test</div>');

		// eslint-disable-next-line no-console
		console.log(output);
		expect(output).toMatch("background-color: #ef4444");
		expect(output).toMatch("color: white");
		expect(output).toMatch("border-radius: 0.125em");
	});

	it("generates badge classes with opacity correctly", async () => {
		const output = await generateCSS('<div class="badge-sm badge-red-500/30">test</div>');

		expect(output).toMatch("background-color: #ef44444c");
	});
});
