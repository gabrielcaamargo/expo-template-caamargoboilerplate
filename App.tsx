import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {useFonts} from '@hooks';
import {theme} from '@theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@lib';

export default function App() {
	const fontsLoaded = useFonts();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<ThemeProvider theme={theme}>
					<Routes />
				</ThemeProvider>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
