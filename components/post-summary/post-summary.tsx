import Image from 'next/image';
import Link from 'next/link';
import VisuallyHidden from '@reach/visually-hidden';
import { PostMetadata } from '../../lib/posts';

export default function PostSummary({ postMetadata }): React.ReactElement<PostMetadata> {
  return (
    <article>
      <header>
        <h3>
          <Link href={`/blog/${postMetadata.id}`}>
            <a tabIndex={-1}>{postMetadata.title}</a>
          </Link>
        </h3>
        <time>{postMetadata.date}</time>
        {postMetadata.image && (
          <Link href={`/blog/${postMetadata.id}`}>
            <a tabIndex={-1}>
              <Image
                src={postMetadata.image}
                alt={postMetadata.summary}
                aria-hidden="true"
              />
            </a>
          </Link>
        )}
      </header>
      <p>{postMetadata.summary}</p>
      <footer>
        <Link href={`/blog/${postMetadata.id}`}>
          <a>
            Read More
            <VisuallyHidden>{postMetadata.title}</VisuallyHidden>
          </a>
        </Link>

        {postMetadata.tags && (<section>
          <VisuallyHidden as="h4">
            More posts like {postMetadata.title}
          </VisuallyHidden>

          <ul>
            {postMetadata.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/tag/${tag}`}>
                  <a>{tag}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>)}
      </footer>
    </article>
  );
}
