import { createSlice } from "@reduxjs/toolkit"
import { IMovieState } from "~types"


const moviesSlice = createSlice({
	name: "movies",
	initialState: <IMovieState> {
		list: [],
		orientation: 1,
	},

	reducers: {
		updateList: (state, action) => {
			state.list = action.payload
		},
		updateOrientation: (state, action) => {
			state.orientation = action.payload
		},
	}
})

export const updateList = moviesSlice.actions.updateList
export const updateOrientation = moviesSlice.actions.updateOrientation

export default moviesSlice.reducer