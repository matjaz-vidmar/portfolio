import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Please feel free to contact me any time, I will be glad to answer
              any questions.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: wei.majiang@gmail.com</li>
              <li className="contact-item">Phone: +38641318184</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
