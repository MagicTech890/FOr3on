import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import {
  Globe,
  Smartphone,
  Shield,
  Database,
  Code,
  Server,
  Cloud,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceItem = ({
  icon,
  title,
  description,
  features,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full mr-4">{icon}</div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <p className="text-gray-400 mb-6">{description}</p>

          <h4 className="text-lg font-semibold text-white mb-4">المميزات:</h4>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() =>
              (window.location.href =
                "/contact?service=" + encodeURIComponent(title))
            }
          >
            طلب الخدمة
          </Button>
        </div>

        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { i18n } = useTranslation();
  const services = [
    {
      icon: <Globe size={24} className="text-blue-500" />,
      title: "تطوير الويب",
      description:
        "نقدم خدمات تطوير مواقع الويب الاحترافية باستخدام أحدث التقنيات والأدوات لإنشاء تجارب مستخدم استثنائية.",
      features: [
        "تصميم وتطوير واجهات المستخدم التفاعلية",
        "تطوير المتاجر الإلكترونية وبوابات الدفع",
        "تحسين محركات البحث (SEO)",
        "تطوير المواقع المتجاوبة مع جميع الأجهزة",
        "صيانة وتحديث المواقع الحالية",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    },
    {
      icon: <Database size={24} className="text-blue-500" />,
      title: "البرامج الإدارية",
      description:
        "نطور أنظمة إدارية متكاملة مخصصة لتلبية احتياجات عملك وتحسين كفاءة العمليات التجارية.",
      features: [
        "أنظمة إدارة الموارد البشرية",
        "أنظمة إدارة المخزون والمبيعات",
        "أنظمة إدارة علاقات العملاء (CRM)",
        "أنظمة إدارة المشاريع",
        "لوحات تحكم تحليلية وتقارير مفصلة",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      icon: <Smartphone size={24} className="text-blue-500" />,
      title: "تطبيقات الموبايل",
      description:
        "نطور تطبيقات الهواتف الذكية عالية الأداء لأنظمة iOS و Android بتصاميم عصرية وتجربة مستخدم سلسة.",
      features: [
        "تطبيقات أصلية لأنظمة iOS و Android",
        "تطبيقات هجينة متعددة المنصات",
        "تطبيقات الواقع المعزز والواقع الافتراضي",
        "تكامل مع خدمات الطرف الثالث والواجهات البرمجية",
        "صيانة وتحديث التطبيقات",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    },
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: "الأمن السيبراني",
      description:
        "نقدم حلول أمنية متكاملة لحماية بياناتك وأنظمتك من التهديدات الإلكترونية وضمان استمرارية عملك.",
      features: [
        "تقييم المخاطر والثغرات الأمنية",
        "حماية البنية التحتية والشبكات",
        "أمن التطبيقات وقواعد البيانات",
        "الاستجابة للحوادث الأمنية",
        "التدريب والتوعية الأمنية",
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
    {
      icon: (
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
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
      title: "الذكاء الاصطناعي",
      description:
        "نطور حلول ذكاء اصطناعي مخصصة لتحسين أعمالك وأتمتة العمليات وتحليل البيانات بكفاءة عالية.",
      features: [
        "تطوير نماذج التعلم الآلي المخصصة",
        "أنظمة معالجة اللغة الطبيعية",
        "روبوتات المحادثة الذكية (Chatbots)",
        "أنظمة التوصيات والتنبؤات",
        "تحليل البيانات الضخمة باستخدام الذكاء الاصطناعي",
      ],
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80",
    },
    {
      icon: <Code size={24} className="text-blue-500" />,
      title: "تطوير البرمجيات المخصصة",
      description:
        "نطور حلول برمجية مخصصة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك التجارية.",
      features: [
        "تحليل وتصميم النظم",
        "تطوير برمجيات سطح المكتب",
        "تطوير واجهات برمجة التطبيقات (APIs)",
        "اختبار وضمان الجودة",
        "التوثيق والدعم الفني",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
    {
      icon: <Cloud size={24} className="text-blue-500" />,
      title: "الحوسبة السحابية",
      description:
        "نساعدك على الانتقال إلى السحابة وتحسين بنيتك التحتية التقنية لتحقيق أقصى قدر من الكفاءة والمرونة.",
      features: [
        "استراتيجيات الانتقال إلى السحابة",
        "تصميم وتنفيذ البنية السحابية",
        "إدارة الخدمات السحابية",
        "حلول النسخ الاحتياطي والتعافي من الكوارث",
        "تحسين التكاليف والأداء",
      ],
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
  ];

  return (
    <Layout>
      <div
        className="bg-black pt-32 pb-20"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6">
              خدماتنا
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات البرمجية والتقنية لمساعدة عملائنا
              على تحقيق النجاح في العصر الرقمي
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
