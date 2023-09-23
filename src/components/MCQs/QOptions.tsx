import { ButtonPressable } from "../Base"
import { View } from "react-native"
import { Row } from "../Base/Row"
import { btnStyles } from "./elements"


export const QOptions = ({
	question,
	selected,
	onSelect
}) => {

	return (
		<View style={btnStyles.container}>
			<Row>
				{question?.options?.map((option) => {
					if(selected?.id == option?.id) return <ButtonPressable  style={btnStyles.button} isDisabled title="" />
					return <ButtonPressable
						key={option?.id}
						style={btnStyles.button}
						textStyles={btnStyles.text}
						title={option?.name}
						onPress={() => onSelect(option)}
					/>
				})}
			</Row>
		</View>
	)
}
