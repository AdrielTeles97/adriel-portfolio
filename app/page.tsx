import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { About } from "@/components/About/About"
import { Education } from "@/components/Education/Education"
import { Curriculum } from "@/components/Curriculum/Curriculum"
import { Footer } from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Curriculum />
        <Footer />

    </>
  );
}
