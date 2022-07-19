import Linm from "next/link";
import Image from 'next/image';
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout title="Home">
      <h1 className= "text-9xl m-5 text-center font-bold">公開中の映画</h1>
      <h1 className= "text-9xl m-5 text-center font-bold">人気の映画</h1>
    </Layout>
  );
}
