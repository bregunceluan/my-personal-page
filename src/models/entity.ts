export interface GitHubFile {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: {
      self: string;
      git: string;
      html: string;
    };
  }

  export interface BlogPostData {
    id: string;
    title: string;
    name: string;
    content: string;
    date: string;
    tags: string[];
    preview?: string;
    image?: string;
  }
  
  
  