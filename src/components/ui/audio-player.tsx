import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  audioSrc: string;
  autoPlay?: boolean;
  loop?: boolean;
  initialVolume?: number;
}

export function AudioPlayer({
  audioSrc,
  autoPlay = true,
  loop = true,
  initialVolume = 0.2,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(initialVolume);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // تحميل ملف الصوت مرة واحدة عند تحميل المكون
  useEffect(() => {
    try {
      // التأكد من أن المسار صحيح بمسار مطلق يبدأ من الجذر
      const fullPath = audioSrc.startsWith("/") ? audioSrc : `/${audioSrc}`;
      const audio = new Audio(fullPath);
      audio.loop = loop;
      audio.volume = volume;
      audio.preload = "auto";

      // إضافة مستمع لحدث تحميل الصوت
      audio.addEventListener("canplaythrough", () => {
        setAudioLoaded(true);
        console.log("Audio loaded and ready to play");
      });

      audioRef.current = audio;
      audio.load();

      console.log("Audio created with source:", fullPath);
    } catch (error) {
      console.error("Error creating audio:", error);
    }

    // دالة التنظيف
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", () => {});
        audioRef.current = null;
      }
    };
  }, [audioSrc, loop, volume]);

  // محاولة تشغيل الصوت تلقائيًا بدون تفاعل المستخدم
  useEffect(() => {
    if (!audioLoaded || !audioRef.current) return;

    // تقنية لتجاوز قيود المتصفح للتشغيل التلقائي
    const autoPlayAudio = () => {
      if (isPlaying && audioRef.current) {
        // إضافة خاصية muted لتجاوز قيود المتصفح
        audioRef.current.muted = true;
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playing successfully (muted)");
              // بعد التشغيل الناجح، نزيل كتم الصوت تدريجيًا
              setTimeout(() => {
                if (audioRef.current) {
                  // إلغاء كتم الصوت تدريجيًا
                  const fadeIn = setInterval(() => {
                    if (audioRef.current) {
                      if (audioRef.current.volume < volume) {
                        audioRef.current.volume = Math.min(
                          audioRef.current.volume + 0.05,
                          volume,
                        );
                      } else {
                        audioRef.current.muted = false;
                        clearInterval(fadeIn);
                      }
                    } else {
                      clearInterval(fadeIn);
                    }
                  }, 100);
                }
              }, 1000);
            })
            .catch((error) => {
              console.error(
                "Autoplay failed, trying alternative method:",
                error,
              );
              // محاولة بديلة باستخدام تقنية أخرى
              tryAlternativeMethod();
            });
        }
      }
    };

    // طريقة بديلة لتشغيل الصوت
    const tryAlternativeMethod = () => {
      // إنشاء عنصر صوت مؤقت وإضافته للصفحة
      const tempAudio = document.createElement("audio");
      tempAudio.src = audioSrc.startsWith("/") ? audioSrc : `/${audioSrc}`;
      tempAudio.muted = true;
      tempAudio.autoplay = true;
      tempAudio.style.display = "none";
      document.body.appendChild(tempAudio);

      // محاولة تشغيل الصوت الأصلي مرة أخرى بعد تفاعل المستخدم المحاكى
      const simulateUserInteraction = () => {
        if (audioRef.current && isPlaying) {
          audioRef.current.muted = true;
          audioRef.current
            .play()
            .then(() => {
              console.log("Audio playing after simulation");
              // إلغاء كتم الصوت تدريجيًا
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.volume = 0.01;
                  const fadeIn = setInterval(() => {
                    if (audioRef.current) {
                      if (audioRef.current.volume < volume) {
                        audioRef.current.volume = Math.min(
                          audioRef.current.volume + 0.05,
                          volume,
                        );
                      } else {
                        audioRef.current.muted = false;
                        clearInterval(fadeIn);
                      }
                    } else {
                      clearInterval(fadeIn);
                    }
                  }, 100);
                }
              }, 500);
            })
            .catch((e) => console.error("Simulation failed:", e));
        }
        // إزالة العنصر المؤقت
        document.body.removeChild(tempAudio);
      };

      // تشغيل العنصر المؤقت ثم محاكاة التفاعل
      tempAudio
        .play()
        .then(simulateUserInteraction)
        .catch(() => {
          // إذا فشلت كل المحاولات، نستخدم طريقة التفاعل التقليدية
          setupUserInteractionHandlers();
          document.body.removeChild(tempAudio);
        });
    };

    // إعداد معالجات التفاعل التقليدية كحل أخير
    const setupUserInteractionHandlers = () => {
      const enableAudio = () => {
        if (isPlaying && audioRef.current) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("Audio playing after user interaction");
              })
              .catch((error) => {
                console.error("Play error after user interaction:", error);
                setTimeout(() => {
                  if (audioRef.current && isPlaying) {
                    audioRef.current
                      .play()
                      .catch((e) => console.error("Retry failed:", e));
                  }
                }, 1000);
              });
          }
        }

        // إزالة المستمعين بعد التفاعل الأول
        window.removeEventListener("click", enableAudio, true);
        window.removeEventListener("touchstart", enableAudio, true);
        window.removeEventListener("keydown", enableAudio, true);
        window.removeEventListener("scroll", enableAudio, true);
      };

      window.addEventListener("click", enableAudio, true);
      window.addEventListener("touchstart", enableAudio, true);
      window.addEventListener("keydown", enableAudio, true);
      window.addEventListener("scroll", enableAudio, true);
    };

    // بدء محاولة التشغيل التلقائي
    autoPlayAudio();

    return () => {
      // تنظيف أي مستمعي أحداث متبقية
      window.removeEventListener("click", () => {}, true);
      window.removeEventListener("touchstart", () => {}, true);
      window.removeEventListener("keydown", () => {}, true);
      window.removeEventListener("scroll", () => {}, true);
    };
  }, [isPlaying, audioLoaded, volume, audioSrc]);

  // تحديث مستوى الصوت عند تغييره
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // تبديل حالة التشغيل/الإيقاف
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-800 flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="text-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
        aria-label={isPlaying ? "كتم الموسيقى" : "تشغيل الموسيقى"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </Button>
    </motion.div>
  );
}
