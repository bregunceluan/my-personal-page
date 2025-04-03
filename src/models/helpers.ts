import { BlogPostData } from "./entity";

export function parseHeaderAndContent(text: string): BlogPostData {
    const [headerBlock, ...contentLines] = text.split('---').map(s => s.trim()).filter(Boolean);
    const header: Partial<BlogPostData> = {};
    const lines = headerBlock.split('\n').filter(line => line.trim());
  
    lines.forEach(line => {
      const [key, value] = line.split(/:(.+)/).map(s => s.trim());
      const headerKey = key as keyof BlogPostData;
      
      if (headerKey === 'tags') {
        header[headerKey] = JSON.parse(value);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        header[headerKey] = JSON.parse(value);
      } else {
        header[headerKey] = value.replace(/^"|"$/g, '');
      }
    });
  
    header.content = contentLines.join('\n').trim();
    return header as BlogPostData;
  }