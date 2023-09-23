import { View, StatusBar } from "react-native"
import { GStyles, THEME } from "~theme"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { MainStackNavigator } from "src/navigation/MainStackNavigator"
import { useDispatch } from "react-redux"
import { updateOrientation } from "~redux"
import { useEffect } from "react"
import * as ScreenOrientation from "expo-screen-orientation"

const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: THEME.COLORS.white,
	},
}


export function AppContainer() {
	const dispatch = useDispatch()

	useEffect(() => {
		checkOrientation()
		const subscription = ScreenOrientation.addOrientationChangeListener(
			handleOrientationChange
		)
		return () => {
			ScreenOrientation.removeOrientationChangeListener(subscription)
		}
	}, [])

	const checkOrientation = async () => {
		const orientation = await ScreenOrientation.getOrientationAsync()
		dispatch(updateOrientation(orientation))
	}

	const handleOrientationChange = (o) => {
		dispatch(updateOrientation(o.orientationInfo.orientation))
	}

	return (
		<View style={GStyles.appContainer}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer theme={AppTheme}>
				<MainStackNavigator />
			</NavigationContainer>
		</View>
	)
}