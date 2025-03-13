import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const stats = [
    { value: "+10", label: t("about.stats.experience") },
    { value: "+100", label: t("about.stats.projects") },
    { value: "+50", label: t("about.stats.clients") },
    { value: "+20", label: t("about.stats.developers") },
  ];

  return (
    <section className="py-20 bg-black" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("about.title")}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-400 mb-6">{t("about.paragraph1")}</p>
            <p className="text-gray-400 mb-6">{t("about.paragraph2")}</p>
            <p className="text-gray-400">{t("about.paragraph3")}</p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 text-center backdrop-blur-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <AnimatedCounter
                    from={0}
                    to={parseInt(stat.value.replace(/\D/g, ""))}
                    formatter={(value) => `+${value}`}
                  />
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
                <motion.div
                  className="mt-4 w-12 h-1 bg-blue-500 rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
