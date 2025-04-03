import { GitHubFile } from "./entity";

const branchTarget = 'main'
const baseArticlesFolder = `https://api.github.com/repos/bregunceluan/my-personal-page/contents/articles`
const baseContent = `https://raw.githubusercontent.com/bregunceluan/my-personal-page/${branchTarget}/articles`

export const getBlogPostFolders = async () => {
    try {
        
        const articlePathFolder = baseArticlesFolder + `?ref=${branchTarget}`;
        const response = await fetch(articlePathFolder);
        const dirs = await response.json() as GitHubFile[];
        
        return dirs;
        
    } catch (error) {
        
    }    
}

export const getBlogPostFolderContent = async (postName:string) =>{
    
    try {
        
        const contentPath = baseArticlesFolder + `/${postName}`+ `?ref=${branchTarget}`;
        const response = await fetch(contentPath);
        const files = await response.json() as GitHubFile[];
    
        return files;

    } catch (error) {
        throw error;
    }
    
}

export const getBlogPostText = async (postName:string) =>{
    
    try {
        
        const contentPath = baseContent + `/${postName}` + `/${postName}.txt`;
        const response = await fetch(contentPath);
        const text = await response.text();
    
        return text;

    } catch (error) {
        throw error;
    }
    
}