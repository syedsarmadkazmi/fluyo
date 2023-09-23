import { StyleSheet, View } from "react-native"
import { ButtonPressable, Typography } from "~components"
import { THEME } from "~theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { EButtonSize, EButtonVariant, EText, IScreenProps } from "~types"
import { Routes } from "src/navigation/MainStackNavigator"


export const Finish: React.FC<IScreenProps> = ({
	navigation
}) => {

	const handleRestart = () => {
		navigation.replace(Routes.Home)
	}
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name="playlist-check" size={200} color={THEME.COLORS.white} />
			<Typography color={THEME.COLORS.darkGray} style={styles.text} kind={EText.LG}>Congratulations!! you have answered all of the questions.</Typography>
			<ButtonPressable size={EButtonSize.LG} variant={EButtonVariant.SECONDARY} title="Restart" onPress={handleRestart} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: THEME.COLORS.secondaryBlue,
		paddingHorizontal: 20,
	},
	text: {
		textAlign: "center",
		paddingVertical: 20,
	}
})