import AsyncStorage from "@react-native-async-storage/async-storage"

/**
 * The function `storeData` is used to store data in AsyncStorage in JSON format.
 * @param value - The `value` parameter is the data that you want to store. It can be any valid
 * JavaScript object or value that can be converted to JSON format.
 */
export const storeData = async (value) => {
	try {
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem("my-key", jsonValue)
	} catch (e) {
		console.log(e)
	}
}

/**
 * The function `getData` retrieves data from AsyncStorage and returns it as a parsed JSON object, or
 * null if the data is not found.
 * @returns The `getData` function returns a Promise that resolves to the value stored in AsyncStorage
 * with the key "my-key". If there is no value stored with that key, it returns `null`.
 */
export const getData = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem("my-key")
		return jsonValue != null ? JSON.parse(jsonValue) : null
	} catch (e) {
		console.log(e)
	}
}