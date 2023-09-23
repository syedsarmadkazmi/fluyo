import { View } from "react-native"
import { SpaceProps } from "~types"


export const Space:React.FC<SpaceProps> = ({
	size = 10,
}) => {

	return (
		<View style={{ height: size }} />
	)
}