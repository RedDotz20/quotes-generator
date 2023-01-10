export function hexCode() {
	let letters = "0123456789ABCDEF";
	let color = "#";

	// Generate random color hex code
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export function complimentaryColor(hex) {
	// Convert the hex color code to RGB
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Invert the RGB values
	r = 255 - r;
	g = 255 - g;
	b = 255 - b;

	// Convert the RGB values to hex
	let invertedHex =
		"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

	return invertedHex;
}
