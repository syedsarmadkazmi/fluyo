import { ButtonPressable } from "../Base"
import { View } from "react-native"
import { Row } from "../Base/Row"
import { btnStyles } from "./elements"


export const QOptions = () => {

	return (
		<View style={btnStyles.container}>
			<Row>
				<ButtonPressable style={btnStyles.button} textStyles={btnStyles.text} title=" 1" />
				<ButtonPressable style={btnStyles.button} textStyles={btnStyles.text} title="Option 2" />
				<ButtonPressable style={btnStyles.button} textStyles={btnStyles.text} title="Option 3" />
				<ButtonPressable style={btnStyles.button} textStyles={btnStyles.text} title="Option 4" />
			</Row>
		</View>
	)
}


