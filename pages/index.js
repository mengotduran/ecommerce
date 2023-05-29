import Head from "next/head";
// import styles from "../src/components/home/home.module.css";
import { HomePage } from "../src/components/home/home-page.jsx";

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>E-commerce App</title>
        <meta name="description" content="Generated by Create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data}/>
    </div>
  );
}

export async function getStaticProps() {
  const {therapy} = await import('/data/data.json')

  return {
    props: {
      data: therapy,
    }
  }
}
