import { Modal, StyleSheet, View } from "react-native"
import { BottomSheetProps, EButtonVariant, EModalType, EText } from "~types"
import { ButtonPressable, PressableItem, Typography } from "../Base"
import { GStyles, THEME } from "~theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Row } from "../Base/Row"


export const BottomSheet: React.FC<BottomSheetProps> = ({
	title,
	visible,
	onClose,
	onProceed,
	type = EModalType.ERROR,
}) => {

	const buttonVariant = type == EModalType.ERROR ? EButtonVariant.DANGER : EButtonVariant.DEFAULT
	const backgroundColor = type == EModalType.ERROR ? THEME.COLORS.redLight : THEME.COLORS.primaryBlue

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
			supportedOrientations={["portrait", "landscape"]}
		>
			<PressableItem style={styles.backdrop} onPress={onClose}>
				<View style={[GStyles.roundedView, styles.body, { backgroundColor }]}>
					<Row style={styles.rowStyle}>
						<Typography kind={EText.MD_600}>{title}</Typography>
						<MaterialCommunityIcons name="flag-variant" size={24} color={THEME.COLORS.white} />
					</Row>

					<View style={styles.buttonContainer}>
						<ButtonPressable variant={buttonVariant} title={"CONTINUE"} onPress={onProceed} />
					</View>
				</View>
			</PressableItem>
		</Modal>
	)
}

const styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		backgroundColor: THEME.COLORS.backdrop,
		justifyContent: "flex-end",
	},
	rowStyle: {
		justifyContent: "space-between",
		paddingVertical: 20,
	},
	body: {
		paddingHorizontal: 40,
		minHeight: 180,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "center",
	}
})