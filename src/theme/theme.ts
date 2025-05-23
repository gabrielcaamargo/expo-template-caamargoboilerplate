import {createTheme} from '@shopify/restyle';

import {colors} from './colors';

export const theme = createTheme({
	colors: colors.lightTheme,
	spacing: {
		s2: 2,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
	},

	borderRadii: {
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
	},

	textVariants: {
		defaults: {},
	},
});

export const darkTheme = {
	...theme,
	colors: colors.darkTheme,
};

export type Theme = typeof theme;
export type ThemeColors = Theme['colors'];
