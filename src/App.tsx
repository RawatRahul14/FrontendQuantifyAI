/**
 * Node Modules 
 */
import { ReactLenis } from "lenis/react";

/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ReactLenis root>
    <div className="relative isolate overflow-hidden">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
    </ReactLenis>
  );
};

export default App;