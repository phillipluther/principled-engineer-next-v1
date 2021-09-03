import Layout from '../components/layout';
import PageMeta from '../components/page-meta';

export default function Home() {
  return (
    <Layout home>
      <PageMeta
        title="The Principled Engineer | Home"
        description="HTML/CSS/JavaScript tutorials, modern engineering techniques, and stories from 20 years in the frontend trenches"
      />
      <p>The Home page!</p>
    </Layout>
  );
}
