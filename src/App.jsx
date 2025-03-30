import Articles from "./components/Articles";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import WhatsNew from "./components/WhatsNew";

function App() {
  return (
    <>
      <main className="font-Inter text-Very-dark-blue mx-auto min-h-screen w-9/10 lg:w-8/10">
        <Nav></Nav>

        <section className="items-start gap-8 md:flex">
          <Hero></Hero>
          <WhatsNew></WhatsNew>
        </section>

        <Articles></Articles>
      </main>
    </>
  );
}

export default App;
