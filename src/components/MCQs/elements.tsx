import { GStyles, THEME } from "~theme"
import { StyleSheet } from "react-native"

export const btnStyles = StyleSheet.create({
	container: {},
	button: {
		marginRight: 14,
		borderRadius: 12,
	},
	text: {
		color: THEME.COLORS.darkGray,
		...GStyles.text.SM_600
	}
})