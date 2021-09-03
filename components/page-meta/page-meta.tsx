import Head from 'next/head';

export type PageMetaProps = {
  title: string,
  description: string,
  image?: string,
  url?: string,
  type: 'website' | 'article',
};

export default function PageMeta({
  title,
  description,
  image = '/images/principled-engineer-social-card.png',
  url = '',
  type = 'website',
}: PageMetaProps): React.ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content={description} />
      <meta name="twitter:creator" content="phillipluther" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
