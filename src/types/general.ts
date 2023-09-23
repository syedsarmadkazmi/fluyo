export interface IENV {
    API_URL: string
	IMAGE_BASE_URL: (size: string) => string
    API_KEY: string
}

export interface IItem {
    id?: string
}

export enum ETheme {
    dark = "dark",
    default = "default"
}