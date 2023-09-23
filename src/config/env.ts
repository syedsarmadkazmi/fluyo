import { IENV } from "~types"

export const ENV: IENV = {
	API_URL: "https://api.themoviedb.org/3/",
	IMAGE_BASE_URL: (size) => `https://image.tmdb.org/t/p/${size}`,

	API_KEY: "89d3fc9e7d2988e138754587d6de3bf4",
}