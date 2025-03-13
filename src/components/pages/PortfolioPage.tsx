import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "web" | "mobile" | "desktop" | "security";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  client: string;
  year: string;
  link?: string;
}

const PortfolioPage = () => {
  const { i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "منصة التعليم الإلكتروني",
      description:
        "منصة تعليمية متكاملة تتيح للمدرسين إنشاء وإدارة الدورات التدريبية وللطلاب الوصول إلى المحتوى التعليمي بسهولة.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      client: "وزارة التعليم",
      year: "2023",
      link: "#",
    },
    {
      id: 2,
      title: "تطبيق توصيل الطلبات",
      description:
        "تطبيق موبايل لتوصيل الطلبات يتيح للمستخدمين طلب المنتجات من المتاجر المحلية وتتبع الطلبات في الوقت الفعلي.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      client: "شركة توصيل",
      year: "2022",
    },
    {
      id: 3,
      title: "نظام إدارة المستشفيات",
      description:
        "نظام متكامل لإدارة المستشفيات يشمل إدارة المرضى والمواعيد والسجلات الطبية والفواتير.",
      category: "desktop",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
      client: "مجموعة مستشفيات الرعاية",
      year: "2022",
    },
    {
      id: 4,
      title: "بوابة الدفع الإلكتروني",
      description:
        "بوابة دفع إلكتروني آمنة تتيح للشركات قبول المدفوعات عبر الإنترنت بطرق متعددة وبشكل آمن.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      client: "بنك الاستثمار",
      year: "2021",
      link: "#",
    },
    {
      id: 5,
      title: "تطبيق إدارة المهام",
      description:
        "تطبيق موبايل لإدارة المهام والمشاريع يساعد الفرق على تنظيم العمل وتتبع التقدم وتحسين الإنتاجية.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      client: "شركة تقنية",
      year: "2021",
    },
    {
      id: 6,
      title: "نظام مراقبة الشبكات",
      description:
        "نظام متطور لمراقبة أمن الشبكات واكتشاف التهديدات والاستجابة للحوادث الأمنية في الوقت الفعلي.",
      category: "security",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      client: "شركة اتصالات",
      year: "2020",
    },
    {
      id: 7,
      title: "منصة التجارة الإلكترونية",
      description:
        "منصة تجارة إلكترونية متكاملة تتيح للشركات عرض وبيع منتجاتها عبر الإنترنت مع نظام إدارة مخزون متطور.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      client: "شركة تجارية",
      year: "2020",
      link: "#",
    },
    {
      id: 8,
      title: "برنامج المحاسبة والفواتير",
      description:
        "برنامج محاسبة متكامل لإدارة الفواتير والمصروفات والتقارير المالية للشركات الصغيرة والمتوسطة.",
      category: "desktop",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      client: "شركة استشارات مالية",
      year: "2019",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "جميع المشاريع" },
    { value: "web", label: "تطوير الويب" },
    { value: "mobile", label: "تطبيقات الموبايل" },
    { value: "desktop", label: "برامج سطح المكتب" },
    { value: "security", label: "الأمن السيبراني" },
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
              أعمالنا
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              استعرض بعض المشاريع التي قمنا بتنفيذها لعملائنا في مختلف المجالات
            </p>
          </motion.div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category.value ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.5)",
                }}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-500">{project.client}</span>
                    <span className="text-gray-500">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
