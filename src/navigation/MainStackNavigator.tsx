import { createStackNavigator } from "@react-navigation/stack"
import { Home, Finish } from "~screens"

const Stack = createStackNavigator()


export const Routes = {
	Home: "Home",
	Finish: "Finish",
}

export function MainStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name={Routes.Home} component={Home} />
			<Stack.Screen name={Routes.Finish} component={Finish} />
		</Stack.Navigator>
	)
}