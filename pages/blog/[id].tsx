import Layout from '../../components/layout';
import { PostMetadata, getPostIds, getPostData } from '../../lib/posts';

const BlogPost = ({ postData }: { postData: PostMetadata}): React.ReactElement => (
  <Layout contentTag="article">
    <main>
      <header>
        <h1>{postData.title}</h1>
        <time>{postData.date}</time>
      </header>
      <section>...</section>
      <footer>
        
      </footer>
    </main>
  </Layout>
);

export default BlogPost;

export async function getStaticPaths() {
  return {
    paths: getPostIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: getPostData(params.id),
    },
  };
}
