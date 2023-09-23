export const orientationTypes = {
	vertical: {
		container: {
		},
		col1: {
			width: null,
			height: "60%"
		},
		col2: {
			width: null,
			height: "40%"
		},
	},
	horizontal: {
		container: {
			flexDirection: "row",
		},
		col1: {
			width: "50%",
			height: null
		},
		col2: {
			flex: 1,
			width: "%50",
			height: null,
		},
	},
}

export const orientationStyles = {
	1: orientationTypes.vertical,
	2: orientationTypes.vertical,
	3: orientationTypes.horizontal,
	4: orientationTypes.horizontal,
}

export const badgeVariants = [
	"default",
	"success",
	"error",
	"info",
	"warning",
]