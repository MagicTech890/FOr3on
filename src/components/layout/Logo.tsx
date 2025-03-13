import { useTranslation } from "react-i18next";
import UmbrellaLogo from "./UmbrellaLogo";
import { motion } from "framer-motion";

const Logo = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="flex items-center">
      <div className={`${isRTL ? "ml-2" : "mr-2"}`}>
        <UmbrellaLogo />
      </div>
      {isRTL ? (
        <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent text-2xl font-bold">
          مظلة البرمجة
        </span>
      ) : (
        <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent text-2xl font-bold">
          Umbrella Programming
        </span>
      )}
    </div>
  );
};

export default Logo;
