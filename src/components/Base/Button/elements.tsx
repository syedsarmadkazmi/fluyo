import { EButtonSize, EButtonVariant } from "~types"
import { StyleSheet } from "react-native"
import { THEME } from "~theme"

export const sizeStyles = StyleSheet.create({
	[EButtonSize.SM]: {
		width: "45%"
	},
	[EButtonSize.MD]: {
		width: "60%"
	},
	[EButtonSize.LG]: {
		width: "80%",
		paddingVertical: 20,
	},
})

export const btnStyleByVariant = StyleSheet.create({
	[EButtonVariant.DANGER]: {
		backgroundColor: THEME.COLORS.white,
	},
	[EButtonVariant.DANGER_FILLED]: {
		backgroundColor: THEME.COLORS.redLight,
	},
	[EButtonVariant.DEFAULT]: {
		backgroundColor: THEME.COLORS.white,
	},
	[EButtonVariant.PRIMARY]: {
		backgroundColor: THEME.COLORS.primaryBlue,
	},
	[EButtonVariant.SECONDARY]: {
		backgroundColor: THEME.COLORS.gray,
	},
})


export const textStyleByVariant = StyleSheet.create({
	[EButtonVariant.DANGER]: {
		color: THEME.COLORS.red,
	},
	[EButtonVariant.DANGER_FILLED]: {
		color: THEME.COLORS.white,
	},
	[EButtonVariant.DEFAULT]: {
		color: THEME.COLORS.primaryBlue,
	},
	[EButtonVariant.PRIMARY]: {
		color: THEME.COLORS.white,
	},
	[EButtonVariant.SECONDARY]: {
		color: THEME.COLORS.white,
	},
})