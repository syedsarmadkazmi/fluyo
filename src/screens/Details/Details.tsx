import { Flex, Box, Image, Center, Divider, VStack, HStack, Badge } from "native-base"
import { ScrollView, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ButtonPressable, NavHeader, Typography, VideoModal } from "~components"
import { THEME } from "~theme"
import { EText, ETheme } from "~types"
import { useEffect, useState } from "react"
import { API } from "~apis"
import { constructImageURL, formatDate, getTrailerVideoId } from "~services"
import { StatusBar } from "react-native"
import { orientationStyles, badgeVariants } from "./elements"
import { RootState } from "~redux"
import { useSelector } from "react-redux"

export function Details({ route }) {
	const [movieDetails, setMovieDetails] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [videoId, setVideoId] = useState("")
	const orientation = useSelector(({ movies }: RootState) => movies?.orientation)
	const { movieId } = route.params

	/* get movie details */
	useEffect(() => {
		async function fetchData() {
			const response = await API.MOVIES.DETAILS(movieId)
			setMovieDetails(response.data)
		}

		fetchData()
	}, [movieId])

	useEffect(() => {
		setVideoId(getTrailerVideoId(movieDetails))
	}, [movieDetails])


	if(movieDetails)
		return (
			<Flex style={[styles.container, orientationStyles[orientation]?.container]}>
				<StatusBar barStyle="light-content" />
				<Box style={{ ...orientationStyles[orientation]?.col1 }} {...orientationStyles[orientation]?.col1} >
					<Image source={{
						uri: constructImageURL(movieDetails?.backdrop_path, "w1280")
					}} alt="" flex={1} />

					<Box style={styles.overlayContainer}>
						<NavHeader title="Watch" theme={ETheme.dark} customStyle={styles.headerStyles} />

						<Center style={styles.buttonsContainer}>
							<Typography kind={EText.XL_600} color={THEME.COLORS.gold} style={styles.text} >{movieDetails?.original_title}</Typography>
							<Typography kind={EText.LG_600} color={THEME.COLORS.white} style={styles.text}>In Theaters {formatDate(movieDetails?.release_date)}</Typography>
							<ButtonPressable filled title={"Get Tickets"} />
							<ButtonPressable 
								title={"Watch Trailer"} 
								onPress={() => setIsModalOpen(true)}
								leftIcon={<Ionicons name="play" size={20} color={THEME.COLORS.white} />} 
							/>
						</Center>
					</Box>
				</Box>

				<Box style={{ ...orientationStyles[orientation]?.col2 }} {...orientationStyles[orientation]?.col2} pt={8} px={10}>
					<VStack space={3}>
						<Typography kind={EText.LG_600}>Genres</Typography>
						<HStack space={2}>
							{movieDetails?.genres.map((item) => {
								const randomIndex = Math.floor(Math.random()*badgeVariants.length)
								return (
									<Badge key={item.id} rounded={"2xl"} colorScheme={badgeVariants[randomIndex]}>{item.name}</Badge>
								)
							})}
						</HStack>
						<Divider/>
						<Typography kind={EText.LG_600}>Overview</Typography>
						<ScrollView>
							<Typography>{movieDetails?.overview}</Typography>
						</ScrollView>
					</VStack>
				</Box>

				<VideoModal 
					videoId={videoId}
					title={movieDetails?.original_title}
					visible={isModalOpen} 
					onClose={() => setIsModalOpen(false)} />
			</Flex>
		)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	overlayContainer: {
		position: "absolute",
		flex: 1,
		width: "100%",
		height: "100%"
	},
	headerStyles: {
		backgroundColor: null, 
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: "flex-end",
		paddingBottom: 30,
	},
	button: {
		width: "60%",
	},
	filledButton: {
		backgroundColor: THEME.COLORS.skyBlue
	},
	text: {
		paddingBottom: 10,
	}
})