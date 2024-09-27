import Hero from "./_components/Hero/Hero";
import Experience from "./_components/Experience/Experience";
import Projects from "./_components/Project/Projects";
import Contact from "./_components/Contact/Contact";
import Footer from "./_components/Contact/Footer";
import dynamic from "next/dynamic";

const MouseBlob = dynamic(() => import("./_components/Utils/MouseBlob"), {
  ssr: false,
});

const Header = dynamic(() => import("./_components/Nav/Header"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className=" bg-no-repeat bg-cover bg-center bg-gray-50 text-black">
      <MouseBlob />
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
