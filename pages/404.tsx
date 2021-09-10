import PageMeta from '../components/page-meta';
import Layout from '../components/layout';

export default function About(): React.ReactElement {
  return (
    <Layout>
      <PageMeta
        title="Page Not Found | The Principled Engineer"
        description="The requested page doesn't exist. More specifically, the requested page doesn't exist here."
      />
      <h1>Page Not Found</h1>
    </Layout>
  );
}
