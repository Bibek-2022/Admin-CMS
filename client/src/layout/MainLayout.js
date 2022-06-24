import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ chilldren }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main */}
      <div className="main">{chilldren}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};
