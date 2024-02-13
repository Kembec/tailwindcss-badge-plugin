import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

import badgePlugin from "../src/index";

export const generateCSS = (content) => {
	return postcss([
		autoprefixer,
		tailwindcss({
			plugins: [badgePlugin],
			content: [{ raw: content }],
		}),
	])
		.process("@tailwind components;", {
			from: undefined,
		})
		.then((result) => {
			return result.css;
		});
};
