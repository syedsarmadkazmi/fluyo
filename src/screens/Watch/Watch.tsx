import { Flex } from "native-base"
import { FlatList, StyleSheet, View } from "react-native"
import { MovieCard, NavHeader, PressableItem, Typography } from "~components"
import { GStyles } from "~theme"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { API } from "~apis"
import { Routes } from "src/navigation/MainStackNavigator"
import { EText } from "~types"


export function Watch({ navigation }) {
	const [moviesList, setMoviesList] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await API.MOVIES.UPCOMING()
			setMoviesList(response?.data?.results)
		}

		fetchData()
	}, [])

	const renderItem = ({ item }) => {
		return(
			<MovieCard 
				id={item.id}
				title={item.original_title} 
				imageURL={item.backdrop_path}
			/>
		)
	}

	return (
		<View style={GStyles.container}>
			<NavHeader 
				title="Watch" 
				showBackButton={false} 
				custom={
					<Flex style={styles.searchBar}>
						<Typography kind={EText.LG_600}>Watch</Typography>
						<PressableItem extraStyles={GStyles.touchable} onPress={() => navigation.navigate(Routes.Search)}>
							<Ionicons name="search" size={24} color="black" />
						</PressableItem>
					</Flex>
				}
			
			/>

			<View style={GStyles.screen}>
				<FlatList
					data={moviesList}
					extraData={moviesList}
					keyExtractor={(item) => item.id}
					renderItem={(data) => renderItem(data)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		width: "100%"
	},
})