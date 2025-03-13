import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Shield, Database } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 h-full backdrop-blur-sm"
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.5)",
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-blue-500 mb-4 p-4 rounded-full bg-blue-500/10 shadow-lg shadow-blue-500/20"
        animate={
          isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
      {isHovered && (
        <motion.div
          className="mt-4 w-12 h-1 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <Link
        to={`/contact?service=${encodeURIComponent(title)}`}
        className="mt-4"
      >
        <motion.button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          طلب الخدمة
        </motion.button>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const services = [
    {
      icon: <Globe size={32} />,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
    },
    {
      icon: <Database size={32} />,
      title: t("services.management.title"),
      description: t("services.management.description"),
    },
    {
      icon: <Smartphone size={32} />,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      icon: <Shield size={32} />,
      title: t("services.security.title"),
      description: t("services.security.description"),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      title: "الذكاء الاصطناعي",
      description:
        "تطوير حلول ذكاء اصطناعي مخصصة لتحسين أعمالك وأتمتة العمليات وتحليل البيانات بكفاءة عالية",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
