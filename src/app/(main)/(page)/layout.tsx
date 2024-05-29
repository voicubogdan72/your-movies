import React from "react";
import { ToastContainer } from "react-toastify";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
      <ToastContainer />
      {children}
    </div>
  );
};

export default Layout;
