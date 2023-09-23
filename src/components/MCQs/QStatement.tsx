import { ButtonPressable, Typography } from "../Base"
import { EText } from "~types"
import { StyleSheet, View } from "react-native"
import { btnStyles } from "./elements"
import { getPreSubString, getPostSubString } from "~services"
import { CONSTANTS } from "~config"

const blankKeyword = CONSTANTS.blankKeyword

export const QStatement = ({
	question,
	selected,
	onSelect
}) => {

	const text = question?.statement?.target?.text || ""

	return (
		<View style={styles.container}>
			<Typography kind={EText.LG} style={styles.text}>{getPreSubString(text, blankKeyword)}</Typography>
			{!selected ?
				<Typography kind={EText.LG} underline={true}>{Array(20).fill(0).map(() => <>&nbsp;</>)}</Typography>
				:
				<ButtonPressable
					style={[btnStyles.button, styles.selectedOption]}
					textStyles={btnStyles.text} title={selected?.name}
					onPress={() => onSelect(selected)}
				/>
			}
			<Typography kind={EText.LG} style={styles.text}>{getPostSubString(text, blankKeyword)}</Typography>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		minHeight: 80,
		flexDirection: "row",
		paddingVertical: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	selectedOption: {
		marginTop: 10,
		marginRight: null,
	},
	text: {
		marginHorizontal: 5,
	}
})