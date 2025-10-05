import Footer from "@/components/global/frontend/footer";
import Navbar from "@/components/global/frontend/navbar";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <div className="pt-[100px]">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
