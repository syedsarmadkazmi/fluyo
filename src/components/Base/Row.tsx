import { View, StyleSheet } from "react-native"
import { Props } from "~types"


export const Row:React.FC<Props> = ({
	children,
	style,
}) => {

	return (
		<View style={[styles.container, style]}>
			{children}
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		justifyContent: "center"
	}
})