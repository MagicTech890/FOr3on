import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // إزالة أي موانع للتمرير قد تكون موجودة
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "auto";

    // التأكد من أن الصفحة قابلة للتمرير
    const handleScroll = (e: Event) => {
      e.stopPropagation();
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-visible">
      <Navbar />
      <main className="scroll-smooth overflow-visible">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
