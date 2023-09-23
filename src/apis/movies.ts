import { ENV } from "~config"
import { AXIOS } from "~services"

const API_ROUTES = {
	UPCOMING: "/movie/upcoming",
	POPULAR: "/movie/popular",
	DETAILS: (movieId) => `movie/${movieId}`,
	VIDEOS: (movieId) => `movie/${movieId}/videos`,
	SEARCH: "/search/movie"
}

const GENERAL_PARAMS = {
	api_key: ENV.API_KEY,
}

export const MOVIES = {
	UPCOMING: async (params?: object) => {
		return await AXIOS.get(API_ROUTES.UPCOMING, {
			params: {
				...params,
				...GENERAL_PARAMS,
			},
		})
	},

	POPULAR: async (params?: object) => {
		return await AXIOS.get(API_ROUTES.POPULAR, {
			params: {
				...params,
				...GENERAL_PARAMS,
			},
		})
	},

	DETAILS: async (id: string, params?: object) => {
		return await AXIOS.get(API_ROUTES.DETAILS(id), {
			params: {
				...params,
				...GENERAL_PARAMS,
				append_to_response: "videos",
			},
		})
	},

	VIDEOS: async (id: string, params?: object) => {
		return await AXIOS.get(API_ROUTES.VIDEOS(id), {
			params: {
				...params,
				...GENERAL_PARAMS,
			},
		})
	},

	SEARCH: async (keyword: string, params?: object) => {
		return await AXIOS.get(API_ROUTES.SEARCH, {
			params: {
				query: keyword,
				...params,
				...GENERAL_PARAMS,
			},
		})
	},
}
