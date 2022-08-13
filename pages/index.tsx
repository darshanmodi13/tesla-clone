import type { NextPage } from "next";
import Header from "../components/Header";
import ImageComponent from "../components/ImageComponent";
import Navbar from "../components/Navbar";

// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-full min-w-full">
      <nav
        className={"sticky top-0 pt-3 pb-3 bg-white right-0 z-10 border-black"}
      >
        <Header />
        <nav className="fixed top-11 z-10 pl-10 pr-10 pt-5 w-full"><Navbar/></nav>
      </nav>

      <div>
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
      </div>
    </div>
  );
};

export default Home;
