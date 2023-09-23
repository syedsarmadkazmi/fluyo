import { Box } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { Modal, StyleSheet, Dimensions, Platform } from "react-native"
import { ETheme, VideoModalProps } from "~types"
import YoutubePlayer from "react-native-youtube-iframe"
import { THEME } from "~theme"
import { NavHeader } from "../Base/NavHeader"
import { useSelector } from "react-redux"
import { RootState } from "~redux"

const screenDimensions = Dimensions.get("screen")

export const VideoModal: React.FC<VideoModalProps>  = ({ 
	title = "Trailer",
	visible,
	onClose,
	videoId,
}) => {

	const orientation = useSelector(({ movies }: RootState) => movies?.orientation)
	const [playing, setPlaying] = useState(true)

	const [dimensions, setDimensions] = useState({
		screen: screenDimensions,
	})
	
	useEffect(() => {
		const dimentions = Dimensions.get("screen")
		setDimensions({screen: dimentions})
		const subscription = Dimensions.addEventListener(
			"change",
			({screen}) => {
				setDimensions({screen})
			},
		)
		return () => subscription?.remove()
	}, [])

	const onStateChange = useCallback((state) => {
		if (state === "ended") {
			setPlaying(false)
			onClose()
		}
	}, [])

	const isVerticalOrientation = orientation <= 2

	return <Modal
		animationType="fade"
		transparent={true}
		visible={visible}
		onRequestClose={() => {
			onClose()
		}}
		supportedOrientations={["portrait", "landscape"]}
	>
		<Box style={styles.main}>
			<YoutubePlayer
				height={300}
				width={isVerticalOrientation ? dimensions.screen.width : dimensions.screen.width - 200}
				play={playing}
				videoId={videoId}
				onChangeState={onStateChange}
			/>
			<Box style={styles.headerContainer}>
				<NavHeader title={title} onBackPress={onClose} theme={ETheme.dark} customStyle={[{ backgroundColor: null }, (Platform.OS == "android" || !isVerticalOrientation) && { marginTop: null }]} />
			</Box>
		</Box>
	</Modal>
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: THEME.COLORS.black,
		justifyContent: "center",
		alignItems: "center",
	},
	headerContainer: {
		position: "absolute",
		top: 10,
		left: 5,
		width: 300
	}
})