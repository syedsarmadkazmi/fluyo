import { Text } from "react-native"
import { GStyles, THEME } from "~theme"
import { EText, TypographyProps } from "~types"

export const Typography: React.FC<TypographyProps> = ({ 
	kind = EText.MD,
	children = null, 
	style,
	color = THEME.COLORS.white,
	underline,
	...otherProps 
}) => {
	return <Text 
		style={[
			GStyles.text[EText[kind]], 
			color && {color}, 
			underline && {textDecorationLine: "underline"},
			style
		]}
		{...otherProps}
	>
		{children && children}
	</Text>
}