/**
 * Node Modules 
 */
import { ReactLenis } from "lenis/react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

const HomeLayout = () => (
  <div className="relative isolate overflow-hidden">
    <Header />
    <main>
      <Hero />
      <Brand />
      <Feature />
      <Process />
      <Overview />
      <Review />
      <Blog />
      <Cta />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomeLayout />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;