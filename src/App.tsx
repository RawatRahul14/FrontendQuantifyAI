/**
 * Node Modules 
 */
import { ReactLenis } from "lenis/react";

/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Feature from "./components/Feature";
import Process from "./components/Process";
import Overview from "./components/Overview";

const App = () => {
  return (
    <ReactLenis root>
    <div className="relative isolate overflow-hidden">
      <Header />

      <main>
        <Hero />
        <Brand />
        <Feature />
        <Process />
        <Overview />
      </main>
    </div>
    </ReactLenis>
  );
};

export default App;