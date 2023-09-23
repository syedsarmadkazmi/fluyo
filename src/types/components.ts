import { TextProps } from "react-native"
import { ETheme } from "./general"

export interface Props {
	children: React.ReactNode;
}

export interface SpaceProps {
	size?: number;
}
  

export interface SearchResultsCardProps {
	id: string
	title: string
	imageURL: string
	subTitle: React.ReactNode
}

export interface VideoModalProps {
    title: string
	visible: boolean
	onClose: () => void
	videoId: string
}

export interface NavHeaderProps {
    onBackPress?: () => void
	showBackButton?: boolean
	title?: string
	theme?: ETheme
	custom?: React.ReactNode
	customStyle?,
}

export interface TextInputProps {
    onClear?: () => void
	onFilter?: () => void
    value?: string
    isFilterOn?: boolean
	onChangeText: (text) => void
	placeholder?: string
	onSubmitEditing?: () => void
}

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
	textStyles?,
	style?,
}

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

export interface LoaderProps {
	loading: boolean,
}