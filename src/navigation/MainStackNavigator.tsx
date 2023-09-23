import { createStackNavigator } from "@react-navigation/stack"
import { Details, Home, Search } from "~screens"

const Stack = createStackNavigator()


export const Routes = {
	Home: "Home",
	Details: "Details",
	Search: "Search",
}

export function MainStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name={Routes.Home} component={Home} />
			<Stack.Screen name={Routes.Details} component={Details} />
			<Stack.Screen name={Routes.Search} component={Search} />
		</Stack.Navigator>
	)
}