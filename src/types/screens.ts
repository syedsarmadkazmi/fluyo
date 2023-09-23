export interface ITabScreenProps {
	isLoading: boolean
	setCurrentTab: (tab: string) => void
}

export interface IResultProps {
	isLoading: boolean
	tabName: string
	data: []
}