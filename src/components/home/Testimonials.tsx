import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}

const Testimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد محمود",
      position: "المدير التنفيذي",
      company: "شركة التقنية المتطورة",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed",
      text: "تعاملنا مع شركة مظلة البرمجة في تطوير موقعنا الإلكتروني وتطبيق الهاتف المحمول، وكانت تجربة رائعة. الفريق محترف ومتعاون، والنتيجة النهائية تجاوزت توقعاتنا.",
    },
    {
      id: 2,
      name: "سارة علي",
      position: "مدير التسويق",
      company: "مؤسسة الإبداع",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
      text: "ساعدتنا مظلة البرمجة في تطوير نظام إدارة علاقات العملاء الخاص بنا، وكان لذلك أثر كبير في تحسين أدائنا وزيادة مبيعاتنا. أنصح بشدة بالتعامل معهم.",
    },
    {
      id: 3,
      name: "محمد خالد",
      position: "مدير تقنية المعلومات",
      company: "مجموعة الاتحاد",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed",
      text: "قامت شركة مظلة البرمجة بتطوير حلول أمنية متكاملة لشركتنا، وكانت النتائج مبهرة. الفريق يتمتع بخبرة عالية في مجال الأمن السيبراني وتطوير البرمجيات.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 bg-black" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            آراء عملائنا
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
            نفخر بثقة عملائنا وشهاداتهم حول تجربتهم معنا
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 shadow-xl"
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full border-2 border-blue-500"
                />
              </div>
              <div>
                <div className="mb-4 text-blue-500">
                  <Quote size={32} />
                </div>
                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].position},{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-blue-500 w-6" : "bg-gray-600"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-blue-500 rounded-full p-2 text-white hover:bg-blue-600 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isRTL ? (
                <polyline points="9 18 15 12 9 6"></polyline>
              ) : (
                <polyline points="15 18 9 12 15 6"></polyline>
              )}
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-blue-500 rounded-full p-2 text-white hover:bg-blue-600 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isRTL ? (
                <polyline points="15 18 9 12 15 6"></polyline>
              ) : (
                <polyline points="9 18 15 12 9 6"></polyline>
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
