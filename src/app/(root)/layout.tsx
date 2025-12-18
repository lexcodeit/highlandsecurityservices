import Footer from "@/components/global/frontend/footer";
import MobileNav from "@/components/global/frontend/mobile-nav";
import Navbar from "@/components/global/frontend/navbar";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            {/* Desktop */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <MobileNav />
            </div>
            <div className="">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
