import { createSlice } from "@reduxjs/toolkit"
import { IQuizState } from "~types"


const quizSlice = createSlice({
	name: "questions",
	initialState: <IQuizState> {
		list: [],
	},

	reducers: {
		updateList: (state, action) => {
			state.list = action.payload
		},
	}
})

export const updateList = quizSlice.actions.updateList

export default quizSlice.reducer