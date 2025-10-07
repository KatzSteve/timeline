/**
 * This is only needed if you're using Tailwind v3. Import this file and add it to the presets array in tailwind.config.js
 * For Tailwind v4, import timeline-theme.css instead.
 */
export default {
	theme: {
		extend: {
			colors: {
				timeline: {
					bg: '#28282e',
					panel: '#212126',
					border: '#000',
					accent: '#0b84f3',
					scrollbarTrack: 'rgba(255, 255, 255, 0.04)',
					scrollbarThumb: 'rgba(255, 255, 255, 0.2)',
					hoverOutline: 'rgba(255, 255, 255, 0.1)',
					sidePanelText: 'rgb(229 231 235)', // gray-200 equivalent
					sidePanelSeparator: '#2e3136',
					tickSeparator: 'rgb(249 250 251 / 0.05)', // approximation of 5% neutral-50
					tickText: 'rgb(148 163 184)', // slate-400 equivalent
				},
			},
		},
	},
};
