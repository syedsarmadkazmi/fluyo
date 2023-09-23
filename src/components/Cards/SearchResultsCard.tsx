import { Center, Flex, Image } from "native-base"
import { Entypo } from "@expo/vector-icons"
import React from "react"
import { PressableItem } from "../Base/PressableItem"
import { EText, SearchResultsCardProps } from "~types"
import { GStyles, THEME } from "~theme"
import { useNavigation } from "@react-navigation/native"
import { Routes } from "src/navigation/MainStackNavigator"
import { Typography } from "../Base/Typography"
import { constructImageURL } from "~services"

export const SearchResultsCard: React.FC<SearchResultsCardProps>  = ({ 
	id,
	title,
	imageURL,
	subTitle = null,
}) => {

	const navigation = useNavigation()

	return <Flex direction="row" h={130} my={3}>
		<Flex w={"40%"} overflow={"hidden"} borderRadius={10} bgColor={THEME.COLORS.gray} >
			<Image 
				source={{ uri: `${constructImageURL(imageURL)}` }} 
				resizeMode="cover"
				alt=""
				flex={1}
				borderRadius={10} overflow={"hidden"}
			/>
		</Flex>
		<Center w={"50%"} pt={2} px={3} alignItems={"flex-start"}>
			<Typography kind={EText.LG} numberOfLines={3}>{title}</Typography>
			<Typography kind={EText.SM} color={THEME.COLORS.gray}>{subTitle}</Typography>
		</Center>

		<Center w={"10%"} alignItems={"flex-start"}>
			<PressableItem extraStyles={GStyles.center} onPress={() => navigation.navigate(Routes.Details, { movieId: id })}>
				<Entypo name="dots-three-horizontal" size={20} color={THEME.COLORS.skyBlue} />
			</PressableItem>
		</Center>
			
	</Flex>
}