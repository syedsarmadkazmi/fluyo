import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { THEME } from "~theme"
import { BottomTabRouteNames, BottomTabRoutes } from "./routes-config"
import { Platform } from "react-native"

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName={BottomTabRouteNames.Watch}
			screenOptions={{
				tabBarStyle: {
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					height: Platform.OS == "android" ? 80 : null,
					paddingTop: 15,
					paddingBottom: 20,
					backgroundColor: THEME.COLORS.primaryBlack,
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: THEME.COLORS.white,
				tabBarInactiveTintColor: THEME.COLORS.grayDark,
			}}
		>
			{BottomTabRoutes.map((route) => 
				<Tab.Screen key={route.title} name={route.title} component={route.component} options={{
					tabBarIcon: (props) => route.icon(props),
					headerShown: false,
				}} />
			)}
		</Tab.Navigator>
	)
}