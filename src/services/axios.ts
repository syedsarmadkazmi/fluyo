import axios from "axios"
import { ENV } from "~config"

export const AXIOS = axios.create({
	baseURL: ENV.API_URL,
	withCredentials: true,
})

AXIOS.interceptors.response.use(
	(response) => response,
	(error) => {
		let errorMessage = "Something went wrong, please try again later"
		// whatever you want to do with the error
		if (window !== undefined) {
			if (error?.response?.data?.message) errorMessage = error?.response?.data?.message || error?.message
		}

		if (error?.response?.status == 401) {
			//
		}

		console.log("errorMessage" , errorMessage)

		// Notification({ type: "error", message: errorMessage })
		// throw error
	},
)
