export interface IENV {
    
}

export enum ETheme {
    dark = "dark",
    default = "default"
}

export interface IQuestionOption {
    id: string
    name: string
}

export interface IQuestionStatement {
    text: string
    replace_by?: string
}

export interface IQuestion {
    order: number,
    correct_ans_id: string,
    source_lang: string,
    target_lang: string,
    statement: {
        source: IQuestionStatement
        target: IQuestionStatement
    },
    options: IQuestionOption[]
}


export type IQuestions = IQuestion[]