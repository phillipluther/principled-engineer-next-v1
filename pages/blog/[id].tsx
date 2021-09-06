import Layout from '../../components/layout';
import PageMeta from '../../components/page-meta';
import Date from '../../components/date';
import { PostData, getPostIds, getPostData } from '../../lib/posts';

const BlogPost = ({ postData }: { postData: PostData}): React.ReactElement => {
  const {
    content: __html,
    ...postMetadata
  } = postData;

  return (
    <Layout contentTag="article">
      <PageMeta {...postMetadata} />
      <main>
        <header>
          <h1>{postData.title}</h1>
          <Date dateString={postData.date} />
        </header>
        <section dangerouslySetInnerHTML={{ __html }} />
        <footer>
          
        </footer>
      </main>
    </Layout>
  );
};

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
      postData: await getPostData(params.id),
    },
  };
}
