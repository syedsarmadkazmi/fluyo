import { Box, Input, Square } from "native-base"
import { Ionicons, Feather } from "@expo/vector-icons"
import React from "react"
import { StyleSheet } from "react-native"
import { PressableItem } from "./PressableItem"
import { TextInputProps } from "~types"
import { THEME } from "~theme"


export const TextInput: React.FC<TextInputProps>  = ({ 
	onClear,
	...otherProps
}) => {

	const rightElement = <Square style={styles.inputButton} w="50px" h="50px">
		<PressableItem extraStyles={styles.pressable} onPress={onClear}>
			<Feather name="x" size={20} color="black" />
		</PressableItem>
	</Square>

	const leftElement = <Square style={styles.inputButton} w="40px" h="40px" alignItems={"flex-end"}>
		<Ionicons name="search" size={20} color="black" />
	</Square>
	

	return (
		<Box style={styles.inputBox}>
			<Input 
				h={50} 
				w="100%"
				placeholder="Search"
				variant={"unstyled"}
				rightElement={rightElement}
				leftElement={leftElement}
				{...otherProps}
				style={styles.inputStyle}
			/>
		</Box>
	)
}

const styles = StyleSheet.create({
	inputBox: {
		elevation: 5,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { width: 4, height: 4 },
		borderWidth: 0,
		borderRadius: 30,
		overflow: "hidden",
		backgroundColor: THEME.COLORS.grayLight
	},
	inputStyle: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 16,
		backgroundColor: THEME.COLORS.grayLight
	},
	inputButton: {
		height: "100%",
	},
	pressable: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	}
})