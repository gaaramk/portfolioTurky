import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <main className="min-h-screen py-12">
        <Header />
        <About />
        <Service />
        <Work />
        <Contact />
      </main>
    </>
  );
}
