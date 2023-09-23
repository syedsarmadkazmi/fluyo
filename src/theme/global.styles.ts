import { StyleSheet } from "react-native"
import { THEME } from "./theme"


const general = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: THEME.COLORS.white,
	},
	container: {
		flex: 1,
		backgroundColor: THEME.COLORS.primaryBlue,
	},
	touchable: {
		padding: 10,
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	roundedView: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		overflow: "hidden",
	}
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