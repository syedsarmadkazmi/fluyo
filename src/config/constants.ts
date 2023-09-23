import { Platform } from "react-native"

export const CONSTANTS = {
	STATUS_BAR_HEIGHT: Platform.OS === "ios" ? 50 : 15
}