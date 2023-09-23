import "react-native-gesture-handler"
import { NativeBaseProvider } from "native-base"
import { Provider } from "react-redux"
import { store } from "~redux"
import { AppContainer } from "~components"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { styles } from "src/screens/Watch/elements"
import { View } from "react-native"

SplashScreen.preventAutoHideAsync()
export default function App() {

	const [fontsLoaded] = useFonts({
		"Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
		"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
	})
	
	const onLayoutRootView = async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}
	
	if (!fontsLoaded) {
		return null
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<NativeBaseProvider>
				<Provider store={store}>
					<AppContainer/>
				</Provider>
			</NativeBaseProvider>
		</View>
	)
}