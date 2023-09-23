import { Pressable } from "react-native"
import { StyleSheet } from "react-native"

export const PressableItem = ({ 
	children, 
	extraStyles = null, 
	...otherProps 
}) => {
	const buttonStyle = {
		...(extraStyles && extraStyles),
		...styles.buttonStyle
	}

	return <Pressable 
		style={({ pressed }) => pressed ? [buttonStyle, styles.pressedStyle] : buttonStyle}
		{...otherProps}>
		{children}
	</Pressable>
}

const styles = StyleSheet.create({
	buttonStyle: {
		//default styles
	},
	pressedStyle: {
		opacity: 0.5,
	}
})