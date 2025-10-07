// tailwind v3 config
// used here only as an example

import timelinePreset from './src/timeline/theme/timeline-preset.mjs';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [timelinePreset],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
};
