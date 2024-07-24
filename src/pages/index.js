import Head from "next/head";
import HomeSection from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miguel Ureña Dev Portfolio</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-4">
        <HomeSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
