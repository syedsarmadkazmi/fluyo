import { View } from "react-native"
import { GStyles } from "~theme"
import { LoaderProps } from "~types"

export const Loader: React.FC<LoaderProps> = ({ 
	loading = true
}) => {

	if(!loading) return null
	
	return <View style={GStyles.center}>
	</View>
}