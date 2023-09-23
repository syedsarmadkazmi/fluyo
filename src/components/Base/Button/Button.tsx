import { Flex } from "native-base"
import { StyleSheet, View } from "react-native"
import { PressableItem } from "../PressableItem"
import { THEME } from "~theme"
import { ButtonPressableProps, EButtonVariant, EText } from "~types"
import { Typography } from "../Typography"
import { btnStyleByVariant, sizeStyles, textStyleByVariant } from "./elements"


export const ButtonPressable: React.FC<ButtonPressableProps> = ({ 
	title, 
	style,
	onPress = () => null,
	filled,
	leftIcon,
	rightIcon,
	size,
	variant = EButtonVariant.DEFAULT,
	textStyles,
	isDisabled
}) => {

	if(isDisabled) return <View style={[styles.buttonStyle, styles.disabledStyle, style]}></View>

	return (
		<Flex style={[
			styles.buttonStyle, 
			filled && styles.filled,
			size && sizeStyles[size],
			btnStyleByVariant[variant],
			style
		]}>
			<PressableItem onPress={onPress} extraStyles={styles.touchable}>
				<View style={styles.content}>
					{leftIcon && leftIcon}
					<Typography
						style={[
							styles.buttonText, 
							textStyleByVariant[variant], textStyles && textStyles,
						]}
						kind={EText.MD_600}
					>{title}</Typography>
					{rightIcon && rightIcon}
				</View>
			</PressableItem>
		</Flex>
	)
}

const styles = StyleSheet.create({
	disabledStyle: {
		height: 50,
		backgroundColor: THEME.COLORS.gray,
	},
	buttonStyle: {
		borderRadius: 50,
		marginBottom: 12,
		minWidth: "30%",
	},
	touchable: {
		paddingVertical: 14,
	},
	content: {
		flexDirection: "row",
		paddingHorizontal: 12,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		color: THEME.COLORS.white,
		fontWeight: "bold",
		fontSize: 14,
		paddingHorizontal: 5,
	},
	filled: {
		backgroundColor: THEME.COLORS.skyBlue
	}
})