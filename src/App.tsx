import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;