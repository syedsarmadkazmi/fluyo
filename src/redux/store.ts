import { configureStore } from "@reduxjs/toolkit"

import quizReducer from "./questions"

export const store = configureStore({
	reducer: {
		questions: quizReducer
	}
})

export type RootState = ReturnType<typeof store.getState>