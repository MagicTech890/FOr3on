import { Suspense, useEffect, useState } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ServicesPage from "./components/pages/ServicesPage";
import AboutPage from "./components/pages/AboutPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import ContactPage from "./components/pages/ContactPage";
import routes from "tempo-routes";
import { useTranslation } from "react-i18next";
import { ScrollIndicator } from "./components/ui/scroll-indicator";
import { BackToTop } from "./components/ui/back-to-top";

function App() {
  const { i18n } = useTranslation();
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  useEffect(() => {
    // Set the HTML dir attribute based on the current language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;

    // تمكين التمرير
    document.body.style.overflow = isScrollEnabled ? "auto" : "hidden";
    document.documentElement.style.overflow = isScrollEnabled
      ? "auto"
      : "hidden";

    // إضافة مستمع للتمرير للتأكد من أنه يعمل
    const enableScroll = () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      setIsScrollEnabled(true);
    };

    window.addEventListener("wheel", enableScroll, { passive: true });
    window.addEventListener("touchmove", enableScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", enableScroll);
      window.removeEventListener("touchmove", enableScroll);
    };
  }, [i18n.language, isScrollEnabled]);
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
          جاري التحميل...
        </div>
      }
    >
      <>
        <ScrollIndicator />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
