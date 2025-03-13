import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer
      className="bg-gradient-to-t from-black to-gray-900 text-white pt-16 pb-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">مظلة البرمجة</h3>
            <p className="text-gray-400 mb-4">
              شركة رائدة في مجال تطوير البرمجيات وتقديم الحلول التقنية
              المتكاملة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  تطوير الويب
                </Link>
              </li>
              <li>
                <Link
                  to="/services/management"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  البرامج الإدارية
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  تطبيقات الموبايل
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  الأمن السيبراني
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  الذكاء الاصطناعي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">الأقصر، جمهورية مصر العربية</li>
              <li className="text-gray-400">info@umbrella-programming.com</li>
              <li className="text-gray-400">+201065686528</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {currentYear} مظلة البرمجة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
