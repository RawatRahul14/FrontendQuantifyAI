/**
 * Node Modules 
 */
import { ReactLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";

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
import SignUpForm from './components/SignUpForm';
import ProfilePage from "./components/ProfilePage";

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
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;