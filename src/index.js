import createPlugin from "tailwindcss/plugin.js";

const badgePlugin = createPlugin(
	function ({ addComponents, theme }) {
		const colors = theme("colors");
		const badgeSizes = {
			none: { padding: "0", borderRadius: "0", lineHeight: "1.25em" },
			sm: { padding: "0.125em 0.5em", borderRadius: "0.125em", lineHeight: "1.25em" },
			"": { padding: "0.125em 0.5em", borderRadius: "0.25em", lineHeight: "1.25em" },
			md: { padding: "0.125em 0.5em", borderRadius: "0.375em", lineHeight: "1.25em" },
			lg: { padding: "0.125em 0.5em", borderRadius: "0.5em", lineHeight: "1.25em" },
			xl: { padding: "0.125em 0.5em", borderRadius: "0.625em", lineHeight: "1.25em" },
			"2xl": { padding: "0.125em 0.5em", borderRadius: "0.75em", lineHeight: "1.25em" },
			"3xl": { padding: "0.125em 0.5em", borderRadius: "0.875em", lineHeight: "1.25em" },
			full: { padding: "0.5em", borderRadius: "50%", lineHeight: "0.5em" },
		};

		const calculateTextColor = (color) => {
			const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16));
			const brightness = (r * 299 + g * 587 + b * 114) / 1000;

			return brightness > 155 ? "black" : "white";
		};

		const colorsBadges = Object.keys(colors).reduce((acc, color) => {
			if (typeof colors[color] === "object" && colors[color] !== null) {
				Object.keys(colors[color]).forEach((shade) => {
					const textColor = calculateTextColor(colors[color][shade]);
					acc[`.badge-${color}-${shade}`] = {
						backgroundColor: colors[color][shade],
						color: textColor,
					};
					for (let opacity = 10; opacity <= 100; opacity += 10) {
						const opacityHex = Math.floor((opacity / 100) * 255)
							.toString(16)
							.padStart(2, "0");
						acc[`.badge-${color}-${shade}\\/${opacity}`] = {
							backgroundColor: `${colors[color][shade]}${opacityHex}`,
							color: textColor,
						};
					}
				});
			}

			return acc;
		}, {});

		const sizesBadges = Object.keys(badgeSizes).reduce((acc, size) => {
			acc[`.badge${size === "" ? "" : `-${size}`}`] = {
				...badgeSizes[size],
				display: "inline-block",
				fontSize: "0.875em",
				fontWeight: "600",
				textAlign: "center",
			};

			return acc;
		}, {});

		addComponents({
			...sizesBadges,
			...colorsBadges,
		});
	},
	{
		theme: {
			extend: {
				colors: {},
			},
		},
	},
);

export default badgePlugin;
