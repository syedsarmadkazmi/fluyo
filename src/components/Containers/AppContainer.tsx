import { View, StatusBar } from "react-native"
import { GStyles, THEME } from "~theme"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { MainStackNavigator } from "src/navigation/MainStackNavigator"
import { useEffect } from "react"
import { seedFirebaseDB } from "~apis"

const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: THEME.COLORS.white,
	},
}


export function AppContainer() {
	useEffect(() => {
		//seed new records in database if database is empty
		seedFirebaseDB()
	}, [])


	return (
		<View style={GStyles.appContainer}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer theme={AppTheme}>
				<MainStackNavigator />
			</NavigationContainer>
		</View>
	)
}