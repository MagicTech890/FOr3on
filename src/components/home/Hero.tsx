import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UmbrellaLogo from "../layout/UmbrellaLogo";
import { TypingEffect } from "@/components/ui/typing-effect";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // تمكين التمرير في القسم الرئيسي
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener(
        "wheel",
        (e) => {
          e.stopPropagation();
        },
        { passive: true },
      );
    }
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `rgba(0, 153, 255, ${Math.random() * 0.5 + 0.25})`,
        });
      }
    };

    createParticles();

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 153, 255, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      connectParticles();
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-black overflow-visible hero-section"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="transform scale-[2.5] mb-8">
            <UmbrellaLogo />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {isRTL ? (
              <>
                <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  <TypingEffect text="مظلة" typingSpeed={100} />
                </span>{" "}
                <TypingEffect text="البرمجة" typingSpeed={100} delay={600} />
              </>
            ) : (
              <>
                <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  <TypingEffect text="Umbrella" typingSpeed={100} />
                </span>{" "}
                <TypingEffect
                  text="Programming"
                  typingSpeed={100}
                  delay={800}
                />
              </>
            )}
          </h1>
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
              {t("hero.contactButton")}
            </Button>
          </Link>
          <Link to="/services">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md transition-all duration-300 hover:border-blue-400 hover:scale-105"
            >
              {t("hero.servicesButton")}
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="animate-bounce">
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
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
