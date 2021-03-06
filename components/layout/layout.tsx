import Link from 'next/link';
import Head from 'next/head';
import VisuallyHidden from '@reach/visually-hidden';
import Logo from './principled-engineer-logo.svg';
import styles from './layout.module.css';

export type LayoutProps = {
  children: React.ReactNode,
  contentTag?: 'div' | 'article' | 'section',
  home?: boolean,
};

const NavMenu = ({ className, children = null }: {
  className: string,
  children?: React.ReactElement,
}): React.ReactElement => (
  <ul className={className}>
    {children}
    <li className={styles.navItem}>
      <Link href="/blog">
        <a className={styles.link}>Blog</a>
      </Link>
    </li>
    <li className={styles.navItem}>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>
    </li>
    <li className={styles.navItem}>
      <Link href="/contact">
        <a className={styles.link}>Contact</a>
      </Link>
    </li>
  </ul>
);

export default function Layout({
  children,
  home,
  contentTag: ContentTag = 'div',
}: LayoutProps) {
  const BrandingTag = home ? 'h1' : 'p';

  return (
    <div className={styles.container}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#384146" />
      </Head>

      <header className={styles.header}>
        <BrandingTag className={styles.branding} id="branding">
          <Link href="/">
            <a>
              <Logo
                alt=""
                aria-hidden
                className={styles.logo}
              />
              <VisuallyHidden>The Principled Engineer</VisuallyHidden>
            </a>
          </Link>
        </BrandingTag>
        <nav className={styles.nav}>
          <NavMenu className={styles.headerNav} />
        </nav>
      </header>

      <ContentTag className={styles.main}>
        {children}
      </ContentTag>

      <footer className={styles.footer}>
        <h2>Footer</h2>
        <section>
          <h3 className={styles.footerHeading}>Supplemental Navigation</h3>
          <nav className={styles.nav}>
            <NavMenu className={styles.footerNav}>
              <li className={styles.navItem}>
                <Link href="/">
                  <a className={styles.link}>Home</a>
                </Link>
              </li>
            </NavMenu>
          </nav>
        </section>
        <section className={styles.disclaimers}>
          <h3 className={styles.footerHeading}>Legal and Copyright Information</h3>
          <p>
            All content on <Link href="/">The Principled Engineer</Link> is Copyright &copy; 2021 by Phillip Luther unless otherwise noted.
          </p>
          <p>
            All opinions expressed on <Link href="/">The Principled Engineer</Link> belong to me, Phillip Luther, and do not necessarily reflect the views and opinions of any associated corporate entities or affiliated organizations.
          </p>
        </section>
      </footer>
    </div>
  );
}
