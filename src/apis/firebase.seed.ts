import { writeBatch, doc, collection, setDoc, getCountFromServer } from "firebase/firestore" 
import { collectionName, firebaseDB } from "~config"


const questions = [
	{
		order: 1,
		correct_ans_id: "1",
		source_lang: "English",
		target_lang: "German",
		statement: {
			source: {
				text: "The [blank] is small.",
				replace_by: "house"
			},
			target: {
				text: "Das [blank] ist klein.",
				replace_by: ""
			}
		},
		options: [
			{
				id: "1",
				name: "Hause"
			},
			{
				id: "2",
				name: "Folgen"
			},
			{
				id: "3",
				name: "Schaf"
			},
			{
				id: "4",
				name: "Bereiden"
			},
		]
	},
	{
		order: 2,
		correct_ans_id: "3",
		source_lang: "English",
		target_lang: "German",
		statement: {
			source: {
				text: "Thanks for your [blank].",
				replace_by: "help"
			},
			target: {
				text: "Danke für deine [blank].",
				replace_by: ""
			}
		},
		options: [
			{
				id: "1",
				name: "Bitte"
			},
			{
				id: "2",
				name: "Entschuldigung"
			},
			{
				id: "3",
				name: "Hilfe"
			},
			{
				id: "4",
				name: "Dienstag"
			},
		]
	},
	{
		order: 3,
		correct_ans_id: "4",
		source_lang: "English",
		target_lang: "German",
		statement: {
			source: {
				text: "Am I [blank]?",
				replace_by: "early"
			},
			target: {
				text: "Bin ich zu [blank].",
				replace_by: ""
			}
		},
		options: [
			{
				id: "1",
				name: "Nein"
			},
			{
				id: "2",
				name: "Entschuldigung"
			},
			{
				id: "3",
				name: "Samstag"
			},
			{
				id: "4",
				name: "Fruh"
			},
		]
	},
	{
		order: 4,
		correct_ans_id: "2",
		source_lang: "English",
		target_lang: "German",
		statement: {
			source: {
				text: "What's [blank] address?",
				replace_by: "your"
			},
			target: {
				text: "Wie ist [blank] addresse.",
				replace_by: ""
			}
		},
		options: [
			{
				id: "1",
				name: "Wasser"
			},
			{
				id: "2",
				name: "Deine"
			},
			{
				id: "3",
				name: "Guten"
			},
			{
				id: "4",
				name: "Nein"
			},
		]
	},
	{
		order: 5,
		correct_ans_id: "3",
		source_lang: "English",
		target_lang: "German",
		statement: {
			source: {
				text: "I'd like a [blank].",
				replace_by: "room"
			},
			target: {
				text: "Ich hätte gerne ein [blank].",
				replace_by: ""
			}
		},
		options: [
			{
				id: "1",
				name: "Donnerstag"
			},
			{
				id: "2",
				name: "Warum"
			},
			{
				id: "3",
				name: "Zimmer"
			},
			{
				id: "4",
				name: "Sprechen"
			},
		]
	},
]

export const seedFirebaseDB = async () => {
	const count = await totalDocCount()

	//abort seeding the database if few questions already exists
	if(count >= questions.length) return

	// Get a new write batch
	const batch = writeBatch(firebaseDB)

	await questions.map(async (item)=> {
		const collectionRef = doc(collection(firebaseDB, collectionName))

		// Add a new document with auto generated id
		await setDoc(collectionRef, item)

	})
    
	await batch.commit()
}


export const totalDocCount = async () => {
	const coll = collection(firebaseDB, collectionName)
	const snapshot = await getCountFromServer(coll)

	return snapshot.data().count
}
