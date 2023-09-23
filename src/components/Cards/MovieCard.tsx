import { Heading, Image, Box } from "native-base"
import { GStyles, THEME } from "~theme"
import { PressableItem } from "../Base/PressableItem"
import { Routes } from "src/navigation/MainStackNavigator"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import { constructImageURL } from "~services"

const variantStyles = {
	"large": {
		styles: {
			height: 180,
		},
		textMargin: 5
	},
	"small": {
		styles: {
			height: 150,
			width: "44%",
			marginHorizontal: 10,
		},
		textMargin: 2
	}
}

export const MovieCard = ({ 
	title,
	imageURL,
	variant = "large",
	id
}) => {

	const navigation = useNavigation()

	return <Box h={150} borderRadius={10} my={2} style={[styles.container, { ...variantStyles[variant].styles }]} >
		<PressableItem extraStyles={GStyles.container} onPress={() => navigation.navigate(Routes.Details, { movieId: id })}>
			<Image 
				source={{ uri: `${constructImageURL(imageURL)}` }} 
				resizeMode="cover"
				alt=""
				flex={1}
				borderRadius={10} overflow={"hidden"}
			/>
		
			<Box position={"absolute"} bottom={variantStyles[variant].textMargin} left={variantStyles[variant].textMargin} px={2}>
				<Heading fontSize={"xl"} color={THEME.COLORS.white} numberOfLines={2} >{title}</Heading>
			</Box>
		</PressableItem>
	</Box>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: THEME.COLORS.primaryBlack,
		overflow: "hidden",
	}
})