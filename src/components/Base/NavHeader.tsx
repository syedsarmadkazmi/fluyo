import { Box, Flex, Square } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { THEME } from "~theme"
import { PressableItem } from "./PressableItem"
import { EText, NavHeaderProps } from "~types"
import { CONSTANTS } from "~config"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Typography } from "./Typography"

const colorStyle = {
	dark: { text: THEME.COLORS.white, bg: THEME.COLORS.black },
	default: { text: THEME.COLORS.black, bg: THEME.COLORS.white },
}

export const NavHeader: React.FC<NavHeaderProps>  = ({ 
	onBackPress,
	showBackButton = true,
	title,
	theme = "default",
	custom,
	customStyle
}) => {

	const navigation = useNavigation()

	if(custom) {
		return <Flex style={styles.header} >{custom}</Flex>
	}

	const handleBackPress = () => {
		onBackPress ? onBackPress() : navigation.goBack()
	}


	return <Flex backgroundColor={colorStyle[theme].bg} style={customStyle ? [styles.header, customStyle] : styles.header} >
		{showBackButton &&
			<Box style={styles.backButton}>
				<PressableItem onPress={handleBackPress}>
					<Square h={50} px={5}>
						<AntDesign name="left" size={20} color={colorStyle[theme].text} />
					</Square>
				</PressableItem>
			</Box>
		}

		<Typography kind={EText.LG_600} style={{ color: colorStyle[theme].text }}>{title}</Typography>
	</Flex>
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: CONSTANTS.STATUS_BAR_HEIGHT,
		width: "100%",
		paddingBottom: 15,
	},
	backButton: {
		width: 60,
	}
})