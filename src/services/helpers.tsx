import moment from "moment"
import { Typography } from "~components"
import { EText } from "~types"


export const humanizeString = (text: string) => {
	return text.trim().slice(0, 1).toUpperCase().concat(text.slice(1)).replace(/[^A-Za-z]/g, " ")
}

export const formatDate = (date: string) => {
	return moment(date).format("MMMM DD, YYYY")
}

export const replaceJSX = (string, find, replace) => {
	return string.split(find).flatMap((item) => [item, replace]).slice(0, -1)
}

export const getQuestionJSX = (questionText, keyword, replaceJSX) => {
	const updatedJSX = replaceJSX(questionText, keyword, <Typography underline={true} kind={EText.LG_600}>{"                            "}</Typography>)
	return (
		<>{updatedJSX}</>
	)
}

export const getPreSubString = (str: string, key: string) => {
	return str.substring(0, str.indexOf(key))
} 

export const getPostSubString = (str: string, key: string) => {
	return str.substring(str.indexOf(key) + key.length, str.length)
} 

export const findObjectById = (arr, id) => {
	return arr?.find((item) => item.id == id)
}