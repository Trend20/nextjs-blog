import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/Utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        I am a Software Developer based in Nairobi who converts complex problems to beautiful Web Solutions while helping Professionals and Businesses to build their Web Apps using 
        technologies like HTML&CSS, JavaScript, Typescript, Angular, React, Nodejs, Express, and MongoDB.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
