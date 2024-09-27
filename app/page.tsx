import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Popular from "./components/Popular";
import Mail from "./components/Mail";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Head />
      <Features />
      <Categories />
      <Popular />
      <Mail />
      <Footer />
    </main>
  );
}
