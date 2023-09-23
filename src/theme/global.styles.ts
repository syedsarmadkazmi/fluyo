import { StyleSheet } from "react-native"
import { THEME } from "./theme"


const general = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: THEME.COLORS.white,
	},
	container: {
		flex: 1,
		backgroundColor: "#74d4fd",
	},
	screen: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: THEME.COLORS.grayLight,
	},
	touchable: {
		padding: 10,
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	dummyScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: THEME.COLORS.grayLight
	},
})


const text = StyleSheet.create({
	SM: {
		fontSize: 12,
		fontFamily: THEME.FONTS.Poppins_Regular
	},
	SM_600: {
		fontSize: 12,
		fontFamily: THEME.FONTS.Poppins_Bold
	},
	MD: {
		fontSize: 14,
		fontFamily: THEME.FONTS.Poppins_Regular
	},
	MD_600: {
		fontSize: 14,
		fontFamily: THEME.FONTS.Poppins_Bold
	},
	LG: {
		fontSize: 16,
		fontFamily: THEME.FONTS.Poppins_Regular
	},
	LG_600: {
		fontSize: 22,
		fontFamily: THEME.FONTS.Poppins_Bold,
	},
	XL_600: {
		fontSize: 22,
		fontFamily: THEME.FONTS.Poppins_Bold,
	}

})

export const GStyles = {
	...general,
	text: {
		...text
	}
}