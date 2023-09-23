import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { BottomSheet, ButtonPressable, QOptions, QStatement, Space, Typography } from "~components"
import { CONSTANTS, collectionName, firebaseDB } from "~config"
import { findObjectById, replaceJSX } from "~services"
import { GStyles, THEME } from "~theme"
import { EButtonSize, EButtonVariant, EModalType, EText, IQuestionOption, IQuestions, IScreenProps } from "~types"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { Routes } from "src/navigation/MainStackNavigator"
import Toast from "react-native-root-toast"

export const Home: React.FC<IScreenProps> = ({
	navigation,
	route,
}) => {

	/* state definations */
	const [questions, setQuestions] = useState<IQuestions>(null)
	const [selectedOption, setSelectedOption] = useState<IQuestionOption>(null)
	const [dialogVisible, setDialogVisible] = useState<boolean>(false)
	const [correctAns, setCorrectAns] = useState<IQuestionOption>(null)
	const [currentStep, setCurrentStep] = useState<number>(0)

	useEffect(() => {
		const questionIndex = route?.params?.questionIndex || currentStep

		const dbQuery = query(collection(firebaseDB, collectionName), orderBy("order"))

		const unsubscribe = onSnapshot(dbQuery, (querySnapshot) => {
			const questions = []
			querySnapshot.forEach((doc) => {
				questions.push(doc.data())
			})

			if(questions?.length) {
				setQuestions(questions)
				setCorrectAns(findObjectById(questions[questionIndex]?.options, questions[questionIndex]?.correct_ans_id))
				setCurrentStep(questionIndex)
			} 
		})

		// Stop listening for updates when no longer required
		return () => unsubscribe()
	}, [])

	
	const question = questions?.[currentStep]


	const handleContinue = () => {
		Toast.show("Please select an option to proceed forward.", {
			duration: Toast.durations.LONG,
			position: Toast.positions.BOTTOM,
			shadow: true,
			animation: true,
			hideOnPress: true,
			delay: 0,
		})
	}
	const handleSelect = (option) => {
		if(selectedOption && option?.id == selectedOption?.id) setSelectedOption(null)
		else
			setSelectedOption(option)
	}

	const handleNext = () => {
		const isLastQuestion = questions?.length - 1 == currentStep
		if(isLastQuestion) navigation.replace(Routes.Finish)
		else navigation.replace(Routes.Home, { questionIndex: currentStep + 1 })
		
		setDialogVisible(false)
	}

	const validateAnswer = async () => {
		setDialogVisible(true)
	}

	const isAnsValid = correctAns?.id == selectedOption?.id


	const commonProps = {
		question: question,
		selected: selectedOption,
		onSelect: handleSelect,
	}

	if(question)
		return (
			<View style={[GStyles.container, styles.container]}>
				<View style={[GStyles.roundedView, styles.contentContainer]}>
					<Typography kind={EText.SM}>Fill in the missing word</Typography>
					<Space size={30}/>

					<Typography kind={EText.LG}>
						{replaceJSX(question?.statement?.source?.text, CONSTANTS.blankKeyword, <Typography underline={true} kind={EText.LG_600}>{question?.statement?.source?.replace_by}</Typography>)}
					</Typography>
				
					<View style={styles.questionContainer}>
						<QStatement {...commonProps} isIncorrect={dialogVisible && !isAnsValid} />
						<Space size={50} />
						<QOptions {...commonProps} />
					</View>

					<View style={styles.buttonsContainer}>
						{selectedOption ?
							<ButtonPressable size={EButtonSize.LG} variant={EButtonVariant.PRIMARY} title="CHECK ANSWER" onPress={validateAnswer} />
							:
							<ButtonPressable size={EButtonSize.LG} variant={EButtonVariant.SECONDARY} title="CONTINUE" onPress={handleContinue} />
						}
					</View>
				</View>

				<BottomSheet
					visible={dialogVisible}
					onClose={() => setDialogVisible(false)}
					onProceed={handleNext}
					type={isAnsValid ? EModalType.SUCCESS : EModalType.ERROR} 
					title={isAnsValid ? "Great Job!" : <Typography kind={EText.MD}>Answer: <Typography kind={EText.MD_600}>{correctAns?.name}</Typography></Typography>}
				/>
			</View>
		)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
	},
	contentContainer: {
		height: "80%",
		backgroundColor: THEME.COLORS.darkGray,
		paddingHorizontal: 20,
		paddingVertical: 50,
		alignItems: "center",
	},
	questionContainer: {
		flex: 1,
		width: "100%",
		padding: 40,
		alignItems: "center",
	},
	buttonsContainer: {
		paddingVertical: 20,
		width: "100%",
		alignItems: "center",
		
	}
})