import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              It is challenging to learn coding from scratch, but it is an
              amazing experience. I recommend it to anyone who is interested in
              it, no matter the age.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
