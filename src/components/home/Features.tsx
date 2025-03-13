import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code, Lock, Zap, Layers, Cpu, Server } from "lucide-react";

const Features = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const features = [
    {
      icon: <Code className="text-blue-500" size={24} />,
      title: "تطوير مخصص",
      description: "نطور حلول برمجية مخصصة تلبي احتياجات عملك الفريدة",
    },
    {
      icon: <Lock className="text-blue-500" size={24} />,
      title: "أمان متقدم",
      description: "نضمن أمان بياناتك وأنظمتك باستخدام أحدث تقنيات الحماية",
    },
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: "أداء عالي",
      description: "نطور برمجيات عالية الأداء تعمل بسرعة وكفاءة",
    },
    {
      icon: <Layers className="text-blue-500" size={24} />,
      title: "تصميم متجاوب",
      description: "نصمم واجهات متجاوبة تعمل على جميع الأجهزة والشاشات",
    },
    {
      icon: <Cpu className="text-blue-500" size={24} />,
      title: "تقنيات حديثة",
      description: "نستخدم أحدث التقنيات والأدوات لتطوير حلول متطورة",
    },
    {
      icon: <Server className="text-blue-500" size={24} />,
      title: "دعم مستمر",
      description: "نقدم دعمًا فنيًا مستمرًا لضمان استمرارية عمل أنظمتك",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            مميزاتنا
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
            نقدم مجموعة من المميزات التي تجعلنا الخيار الأمثل لتنفيذ مشروعك
            التقني
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)",
              }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-500/10 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
