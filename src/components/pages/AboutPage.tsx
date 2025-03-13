import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { CheckCircle, Award, Users, Briefcase } from "lucide-react";

const AboutPage = () => {
  const { i18n } = useTranslation();
  const stats = [
    {
      icon: <CheckCircle className="text-blue-500" size={24} />,
      value: "+10",
      label: "سنوات خبرة",
    },
    {
      icon: <Briefcase className="text-blue-500" size={24} />,
      value: "+100",
      label: "مشروع منجز",
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      value: "+50",
      label: "عميل راضٍ",
    },
    {
      icon: <Award className="text-blue-500" size={24} />,
      value: "+20",
      label: "مطور محترف",
    },
  ];

  const team = [
    {
      name: "أحمد جلال",
      position: "المدير التنفيذي",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmedgalal",
      bio: "خبرة أكثر من 15 عامًا في مجال تطوير البرمجيات وإدارة المشاريع التقنية.",
    },
    {
      name: "محمد سمير",
      position: "مطور .NET وFull Stack",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamedsamir",
      bio: "متخصص في تطوير تطبيقات الويب باستخدام تقنيات .NET وFull Stack مع خبرة 8 سنوات في تطوير الحلول المتكاملة.",
    },
    {
      name: "محمد علي",
      position: "خبير الأمن السيبراني",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamedali",
      bio: "خبير متخصص في مجال الأمن السيبراني وحماية البيانات مع خبرة أكثر من 10 سنوات في اكتشاف الثغرات وتأمين الأنظمة والشبكات.",
    },
    {
      name: "محمد نور",
      position: "مسؤول الذكاء الاصطناعي",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamednour",
      bio: "متخصص في تطوير حلول الذكاء الاصطناعي وتعلم الآلة مع خبرة واسعة في تطبيق التقنيات الذكية في مختلف المجالات.",
    },
  ];

  const values = [
    {
      title: "الجودة",
      description:
        "نلتزم بتقديم منتجات وخدمات عالية الجودة تلبي وتتجاوز توقعات عملائنا.",
    },
    {
      title: "الابتكار",
      description:
        "نسعى دائمًا للابتكار وتبني أحدث التقنيات والمنهجيات لتقديم حلول مبتكرة وفعالة.",
    },
    {
      title: "النزاهة",
      description:
        "نعمل بشفافية ونزاهة في جميع تعاملاتنا مع العملاء والشركاء والموظفين.",
    },
    {
      title: "التعاون",
      description:
        "نؤمن بقوة العمل الجماعي والتعاون لتحقيق أفضل النتائج وتجاوز التحديات.",
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
              من نحن
            </h1>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              شركة مظلة البرمجة هي شركة رائدة في مجال تطوير البرمجيات وتقديم
              الحلول التقنية المتكاملة
            </p>
          </motion.div>

          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">قصتنا</h2>
              <div className="h-1 w-16 bg-blue-500 mb-6"></div>
              <p className="text-gray-400 mb-6">
                تأسست شركة مظلة البرمجة في عام 2013 بهدف تقديم حلول برمجية
                مبتكرة وعالية الجودة للشركات والمؤسسات في المملكة العربية
                السعودية والشرق الأوسط.
              </p>
              <p className="text-gray-400 mb-6">
                بدأنا رحلتنا بفريق صغير من المطورين المتحمسين، وتوسعنا على مر
                السنين لنصبح واحدة من الشركات الرائدة في مجال تطوير البرمجيات
                وتقديم الحلول التقنية المتكاملة.
              </p>
              <p className="text-gray-400">
                نفخر اليوم بفريقنا المكون من أكثر من 20 مطورًا ومصممًا وخبيرًا
                في مجال التقنية، ونعتز بثقة أكثر من 50 عميلًا وضعوها فينا لتنفيذ
                مشاريعهم التقنية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="فريق العمل"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)",
                }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Our Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              قيمنا
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)",
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Team */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              فريقنا
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-500 mb-4">{member.position}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
