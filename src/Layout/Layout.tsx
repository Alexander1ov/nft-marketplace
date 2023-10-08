import { FC } from "react";
import { Outlet } from "react-router-dom";

import style from "./Layout.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
