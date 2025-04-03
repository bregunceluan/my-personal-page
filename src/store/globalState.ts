import { BlogPostData } from "@/models/entity";
import { reactive } from "vue";

export enum Language{
    ENG,
    PT
}

export interface GlobalStateValues{
    language:Language,
    blogPosts:BlogPostData[]
}

export const globalState = reactive<GlobalStateValues>({
    language:Language.PT,
    blogPosts:[]
})