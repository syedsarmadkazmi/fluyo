import { TextProps } from "react-native"
import { IQuestion, IQuestionOption } from "./general"

/*  COMPONENT PROPS */
export interface Props {
	style?
	children: React.ReactNode;
}


/* BASE COMPONENT PROPS */
export interface SpaceProps {
	size?: number;
}


/* BUTTON COMPONENT PROPS */
export enum EButtonSize {
	SM = "SM",
	MD = "MD",
	LG = "LG"
}

export enum EButtonVariant {
	DEFAULT = "DEFAULT",
	PRIMARY = "PRIMARY",
	SECONDARY = "SECONDARY",
	DANGER = "DANGER",
	DANGER_FILLED = "DANGER_FILLED",
}

export interface ButtonPressableProps {
    title: string
	filled?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	onPress?: (text) => void
	size?: EButtonSize
	variant?: EButtonVariant
	isDisabled?: boolean
	textStyles?,
	style?,
}


/* TEXT COMPONENT PROPS */
export enum EText {
	SM = "SM",
	SM_600 = "SM_600",
	MD = "MD",
	MD_600 = "MD_600",
	LG = "LG",
	LG_600 = "LG_600",
	XL_600 = "XL_600",
}

export interface TypographyProps extends TextProps {
	kind?: EText
	color?: string
	underline?: boolean,
}


/* LOADER COMPONENT PROPS */
export interface LoaderProps {
	loading: boolean,
}


/* MODAL COMPONENT PROPS */
export enum EModalType {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
}

export interface BottomSheetProps {
    title?: string | React.ReactNode
	visible: boolean
	onClose: () => void
	onProceed?: () => void
	type?: EModalType
}


/* CUSTOM COMPONENT PROPS */
export interface IMCQProps {
	question: IQuestion,
	selected: IQuestionOption,
	onSelect: (selected: IQuestionOption) => void
	isIncorrect?: boolean
}
