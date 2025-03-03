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
import Review from "./components/Review";
import Blog from "./components/Blog";

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
        <Review />
      </main>
      <Blog />
    </div>
    </ReactLenis>
  );
};

export default App;