import { reactive } from "vue";

export enum Language{
    ENG,
    PT
}

export interface GlobalStateValues{
    language:Language,
    myVariable: string
}

export const globalState = reactive<GlobalStateValues>({
    language:Language.PT,
    myVariable: 'initialValue'
})