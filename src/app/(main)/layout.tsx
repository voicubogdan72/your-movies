import React from "react";
import { ToastContainer } from "react-toastify";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="w-full">
        <ToastContainer />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
