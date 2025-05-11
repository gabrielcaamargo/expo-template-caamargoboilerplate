import {
	Outfit_400Regular,
	Outfit_500Medium,
	Outfit_600SemiBold,
	Outfit_700Bold,
	useFonts as useOutfitFonts,
} from '@expo-google-fonts/outfit';
import {
	NunitoSans_400Regular,
	NunitoSans_500Medium,
	NunitoSans_600SemiBold,
	NunitoSans_700Bold,
	useFonts as useNunitoFonts,
} from '@expo-google-fonts/nunito-sans';

export function useFonts() {
	const [outfitLoaded] = useOutfitFonts({
		Outfit_400Regular,
		Outfit_500Medium,
		Outfit_600SemiBold,
		Outfit_700Bold,
	});

	const [nunitoLoaded] = useNunitoFonts({
		NunitoSans_400Regular,
		NunitoSans_500Medium,
		NunitoSans_600SemiBold,
		NunitoSans_700Bold,
	});

	return outfitLoaded && nunitoLoaded;
}
