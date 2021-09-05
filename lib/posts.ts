import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';

export const POSTS_DIR = path.join(process.cwd(), 'posts');

export type PostMetadata = {
  id: string,
  title: string,
  summary: string,
  date: string,
  image?: string,
  tags?: string[],
}

export function getSortedPostsData(): PostMetadata[] {
  const postFilenames = fs.readdirSync(POSTS_DIR);
  const postData: PostMetadata[] = postFilenames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');

    return {
      id,
      ...grayMatter(fileContents).data as PostMetadata,
    };
  });

  return postData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
}
