import PageMeta from '../components/page-meta';
import Layout from '../components/layout';

export default function Contact(): React.ReactElement {
  return (
    <Layout>
      <PageMeta
        title="The Principled Engineer | Contact"
        description="Questions, comments, feedback, and/or complaint? Here's how to get in touch with the people behind The Principled Engineer."
      />
      <p>The Contact page!</p>
    </Layout>
  );
}
