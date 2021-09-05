import Layout from '../components/layout';
import PageMeta from '../components/page-meta';
import PostSummary from '../components/post-summary';
import { getPostsData, PostMetadata } from '../lib/posts';

export default function Home({
  posts,
}: {
  posts: PostMetadata[],
}) {
  return (
    <Layout home>
      <PageMeta
        title="The Principled Engineer | Home"
        description="HTML/CSS/JavaScript tutorials, modern engineering techniques, and stories from 20 years in the frontend trenches"
      />
      
      <section>
        <h2>All Blog Posts</h2>
        <ul>
          {posts.map((postMetadata) => (
            <li key={postMetadata.id}>
              <PostSummary postMetadata={postMetadata} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPostsData(),
    },
  };
}
