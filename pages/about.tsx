import PageMeta from '../components/page-meta';
import Layout from '../components/layout';

export default function About(): React.ReactElement {
  return (
    <Layout>
      <PageMeta
        title="The Principled Engineer | About"
        description="Topics covered by The Principled Engineer, a JavaScript and frontend engineering blog, and information about Phillip Luther, its author."
      />
      <p>The About page!</p>
    </Layout>
  );
}
