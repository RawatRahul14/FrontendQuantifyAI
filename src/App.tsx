/**
 * Node Modules 
 */
import { ReactLenis } from "lenis/react";
import { Routes, Route, Navigate } from "react-router-dom";

/**
 * Components
 */

import Header from "./components/common/Header";

import Hero from "./components/home/Hero";
import Brand from "./components/home/Brand";
import Feature from "./components/home/Feature";
import Process from "./components/home/Process";
import Overview from "./components/home/Overview";
import Review from "./components/home/Review";
import Blog from "./components/home/Blog";
import Cta from "./components/home/Cta";

// import Chatbot from "./components/bot/Chatbot"

import Footer from "./components/common/Footer";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from './components/auth/SignUpForm';

import ProfilePage from "./components/common/ProfilePage";

import ProtectedRoute from "./components/auth/ProtectedRoute";



/**
 * Home Page 
 */

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

/**
 * Chatbot Page
 */

// const ChatBot = () => (
//   <div className="relative isolate overflow-hidden">
//     {/* <Header /> */}
//     <main>
//       <Chatbot />
//     </main>
//     <Footer />
//   </div>
// );


const App = () => {
  return (
  <ReactLenis root>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        
        {/* Protected routes group */}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<HomeLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* <Route path="/chatbot" element={<ChatBot />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
  </ReactLenis>
  );
};


export default App;