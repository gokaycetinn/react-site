import About from "./components/About";
import { AppProvider } from "./components/AppProvider";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ScrollProgress } from "./components/MotionPrimitives";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <AppProvider>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </AppProvider>
  );
}
