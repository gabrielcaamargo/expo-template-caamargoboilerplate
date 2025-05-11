const palette = {
	blueMain: '#1A73E8',
	blueDark: '#1565C0',
	blueLight: '#E3F2FD',
	blueAlt: '#2196F3',

	aquaMain: '#00BFA5',
	aquaDark: '#00796B',
	aquaLight: '#E0F7F5',

	orangeMain: '#FF5722',
	orangeDark: '#E64A19',
	orangeLight: '#FFF3E0',
	orangeAlt: '#FF9800',

	white: '#FFFFFF',
	grayLight: '#F5F5F5',
	grayMedium: '#9E9E9E',
	graySemiDark: '#616161',
	grayDark: '#424242',
	grayLightest: '#E0E0E0',
	grayBorder: '#EEEEEE',
	grayDividerDark: '#2D2D2D',
	black: '#000',

	grayBase: '#121212',
	graySurface: '#1E1E1E',
	graySurfaceHighlight: '#252836',

	redMain: '#F44336',
	greenMain: '#4CAF50',
	purpleMain: '#9C27B0',
	yellowMain: '#FFC107',
} as const;

const lightTheme = {
	...palette,
	backgroundColor: palette.white,
	backgroundHighlight: palette.blueLight,

	textPrimary: palette.black,
	textSecondary: palette.graySemiDark,

	divider: palette.grayBorder,

	cardBackground: palette.white,
};

const darkTheme = {
	...palette,
	backgroundColor: palette.grayBase,

	textPrimary: palette.white,
	textSecondary: palette.grayLightest,

	divider: palette.grayDividerDark,

	cardBackground: palette.graySurface,
};

export const colors = {lightTheme, darkTheme};
