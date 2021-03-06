import path from 'path';
import fs from 'fs';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import grayMatter from 'gray-matter';

export const POSTS_DIR = path.join(process.cwd(), 'posts');

export type PostMetadata = {
  id: string,
  title: string,
  description: string,
  date: string,
  image?: string,
  tags?: string[],
}

export type PostData = PostMetadata & {
  content: string,
}

export async function getPostData(id: string): Promise<PostData> {
  const filePath = path.join(POSTS_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const {
    data: metadata,
    content: markdown,
  } = grayMatter(fileContents);

  const remarked = await remark()
    .use(remarkHtml)
    .process(markdown);

  return {
    id,
    content: remarked.toString(),
    ...metadata as PostMetadata,
  };
}

export function getPostsData(sorted = true): PostMetadata[] {
  const postFilenames = fs.readdirSync(POSTS_DIR);
  const postsData: PostMetadata[] = postFilenames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');

    return {
      id,
      ...grayMatter(fileContents).data as PostMetadata,
    };
  });

  return sorted ? postsData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }) : postsData;
}

export function getPostIds() {
  return fs.readdirSync(POSTS_DIR).map((filename) => ({
    params: {
      id: filename.replace(/\.md/, ''),
    },
  }));
}
