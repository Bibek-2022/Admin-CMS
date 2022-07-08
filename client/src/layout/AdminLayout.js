import React from "react";
import { SideMenu } from "../components/offCanvas/SideMenu";
import { Footer } from "./Footer";

import { Header } from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      <SideMenu />
      {/* mainbody */}
      <div className="main container">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
