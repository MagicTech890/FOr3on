import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const ContactPage = () => {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  // استخراج اسم الخدمة من الرابط إذا كان موجودًا
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        subject: `طلب خدمة: ${serviceParam}`,
        service: serviceParam,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
    });
    // Show success message
    alert(
      "تم إرسال طلبك بنجاح! سيتم التواصل معك قريبًا لمناقشة تفاصيل الخدمة المطلوبة.",
    );
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      label: "البريد الإلكتروني",
      text: "info@umbrella-programming.com",
    },
    {
      icon: <Phone className="text-blue-500" size={24} />,
      label: "رقم الهاتف",
      text: "+201065686528",
    },
    {
      icon: <MapPin className="text-blue-500" size={24} />,
      label: "العنوان",
      text: "الأقصر، جمهورية مصر العربية",
    },
    {
      icon: <Clock className="text-blue-500" size={24} />,
      label: "ساعات العمل",
      text: "الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً",
    },
  ];

  return (
    <Layout>
      <div
        className="bg-black pt-32 pb-20"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              تواصل معنا
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك التقنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-gray-900 p-8 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                أرسل لنا رسالة
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      الاسم الكامل
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="أدخل رقم هاتفك"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 mb-2"
                    >
                      الموضوع
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="أدخل موضوع الرسالة"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                {formData.service && (
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-300 mb-2"
                    >
                      الخدمة المطلوبة
                    </label>
                    <div className="bg-blue-500/20 p-3 rounded-md text-white border border-blue-500/30">
                      {formData.service}
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="أدخل رسالتك هنا"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white h-40"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded transition-colors duration-300"
                >
                  <Send className="ml-2" size={18} />
                  إرسال الرسالة
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  معلومات التواصل
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="p-3 bg-gray-800 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.label}</h3>
                        <p className="text-gray-400">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">تابعنا</h2>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
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
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
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
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
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
                      className="lucide lucide-instagram"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
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
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 p-4 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114432.21096307054!2d32.5896115!3d25.6872431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915c613c99d59%3A0x75680da6535f6e40!2sLuxor%2C%20Luxor%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
