import { StyleSheet, View } from "react-native"
import { ButtonPressable, QOptions, QStatement, Space, Typography } from "~components"
import { GStyles, THEME } from "~theme"
import { EButtonSize, EButtonVariant, EText } from "~types"

const sampleQuestion = "Das [blank] ist klen."

export function Home() {
	return (
		<View style={[GStyles.container, styles.container]}>
			<View style={styles.contentContainer}>
				<Typography kind={EText.SM}>Fill in the missing word</Typography>
				<Space size={30}/>
				<Typography kind={EText.LG}>
					The <Typography underline={true} kind={EText.LG_600}>house</Typography> is small.
				</Typography>
				
				<View style={styles.questionContainer}>
					<QStatement statement={sampleQuestion} />
					<Space size={50} />
					<QOptions />
				</View>

				<View style={styles.buttonsContainer}>
					<ButtonPressable size={EButtonSize.LG} variant={EButtonVariant.SECONDARY} title="CONTINUE" />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
	},
	contentContainer: {
		height: "80%",
		backgroundColor: THEME.COLORS.darkGray,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		overflow: "hidden",
		paddingHorizontal: 20,
		paddingVertical: 50,
		alignItems: "center",
	},
	questionContainer: {
		flex: 1,
		width: "100%",
		padding: 40,
		alignItems: "center",
	},
	buttonsContainer: {
		paddingVertical: 20,
		width: "100%",
		alignItems: "center",
		
	}
})