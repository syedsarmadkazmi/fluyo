import { Flex, Center } from "native-base"
import { StyleSheet } from "react-native"
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
}) => {
	return (
		<Flex style={[
			styles.buttonStyle, 
			filled && styles.filled,
			size && sizeStyles[size],
			btnStyleByVariant[variant],
			style
		]}>
			<PressableItem onPress={onPress}>
				<Center style={styles.content}>
					{leftIcon && leftIcon}
					<Typography
						style={[
							styles.buttonText, 
							textStyleByVariant[variant], textStyles && textStyles,
						]}
						kind={EText.MD_600}
					>{title}</Typography>
					{rightIcon && rightIcon}
				</Center>
			</PressableItem>
		</Flex>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		borderRadius: 50,
		paddingVertical: 14,
		marginBottom: 12,
		minWidth: "30%",
	},
	content: {
		flexDirection: "row",
		paddingHorizontal: 12,
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