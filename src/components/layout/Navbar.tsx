import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import UmbrellaLogo from "./UmbrellaLogo";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <div className={`${isRTL ? "ml-2" : "mr-2"}`}>
                <UmbrellaLogo />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-8 ${isRTL ? "space-x-reverse" : ""}`}
          >
            <Link
              to="/"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {t("navbar.services")}
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {t("navbar.portfolio")}
            </Link>
            <Link to="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
                {t("navbar.contact")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden bg-black/95 absolute top-full left-0 right-0 p-4 flex flex-col ${isRTL ? "items-end" : "items-start"} space-y-4`}
          >
            <Link
              to="/"
              className={`text-white hover:text-blue-400 transition-colors duration-300 w-full ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/services"
              className={`text-white hover:text-blue-400 transition-colors duration-300 w-full ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("navbar.services")}
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-blue-400 transition-colors duration-300 w-full ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/portfolio"
              className={`text-white hover:text-blue-400 transition-colors duration-300 w-full ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("navbar.portfolio")}
            </Link>
            <Link to="/contact" className="w-full">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300 w-full">
                {t("navbar.contact")}
              </Button>
            </Link>
            <div className="flex justify-end w-full">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
