import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { MovieCard, NavHeader, SearchResultsCard, TextInput, Typography } from "~components"
import { GStyles } from "~theme"
import { Box, Divider } from "native-base"
import { API } from "~apis"
import { formatDate } from "~services"
import { useNavigation } from "@react-navigation/native"
import { EText } from "~types"


export function Search() {
	const [moviesList, setMoviesList] = useState([])
	const [popularMovies, setPopularMovies] = useState([])
	const [keyword, setKeyword] = useState("")
	const [showResults, setShowResults] = useState(false)

	const navigation = useNavigation()

	/* Search keyword input callbacks */
	const handleChange = text => {
		setKeyword(text)
	}

	const handleClearSearch = async () => {
		await setKeyword("")
		await setShowResults(false)
		setMoviesList(popularMovies)
	}

	const onSubmitEditing = () => {
		setShowResults(true)
		fetchData()
	}

	/* fetch data */
	async function fetchData() {
		let response = null

		if(keyword) {
			response = await API.MOVIES.SEARCH(keyword)
		}
		else if (popularMovies.length == 0) {
			response = await API.MOVIES.POPULAR()
			setPopularMovies(response?.data?.results)
		}

		setMoviesList(response?.data?.results)
	}

	/** fetch data everytime the screen is focused */
	useEffect(() => {
		const unsubscribe = navigation?.addListener("focus", () => {
			fetchData()
		})
	
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe
	}, [navigation])

	/* get updated results on search query */
	useEffect(() => {
		if(!keyword)
			fetchData()
	}, [showResults, keyword])


	/* render flatlist item */
	const renderItem = ({ item }) => {
		if(showResults)
			return(
				<SearchResultsCard
					id={item.id}
					title={item.original_title} 
					imageURL={item.backdrop_path}
					subTitle={formatDate(item.release_date)}
				/>
			)
		else
			return(
				<MovieCard 
					key={item.id}
					id={item.id}
					title={item.original_title} 
					imageURL={item.backdrop_path}
					variant="small"
				/>
			)
	}

	return (
		<View style={GStyles.container}>
			{!showResults ?
				<NavHeader 
					custom={
						<Box w={"100%"}>
							<NavHeader 
								title="Search"
								customStyle={{ marginTop: null }}
							/>	
							<Box px={4}>
								<TextInput 
									value={keyword}
									onChangeText={handleChange}
									placeholder="Search"
									onClear={handleClearSearch}
									onSubmitEditing={onSubmitEditing}
								/>
							</Box>
						</Box>
					}
			
				/>
				:
				<NavHeader 
					title={`${moviesList?.length} Results Found`}
					onBackPress={handleClearSearch}
				/>	
			}
			
			<View style={GStyles.screen}>
				<Box px={2}>
					<Typography kind={EText.SM}>{keyword ? "Top Results" : "Popular Movies"}</Typography>
					<Divider mt={1} mb={2}/>
				</Box>
				<FlatList
					numColumns={2}
					data={moviesList}
					keyExtractor={(item) => item.id}
					renderItem={(data) => renderItem(data)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}