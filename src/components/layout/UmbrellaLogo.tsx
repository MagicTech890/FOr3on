import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const UmbrellaLogo = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Umbrella Handle */}
      <motion.div
        className="absolute w-1.5 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full bottom-0 z-10"
        initial={{ height: 0 }}
        animate={{ height: 12 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      ></motion.div>

      {/* Umbrella Top */}
      <motion.div
        className="absolute w-16 h-8 bg-gradient-to-r from-blue-500 to-blue-300 rounded-t-full top-0"
        initial={{ width: 0 }}
        animate={{ width: 16 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Code Lines */}
      <div className="absolute top-2 left-3 right-3 flex flex-col gap-1">
        <motion.div
          className="h-0.5 w-6 bg-black/30"
          initial={{ width: 0 }}
          animate={{ width: 6 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        ></motion.div>
        <motion.div
          className="h-0.5 w-8 bg-black/30"
          initial={{ width: 0 }}
          animate={{ width: 8 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        ></motion.div>
        <motion.div
          className="h-0.5 w-4 bg-black/30"
          initial={{ width: 0 }}
          animate={{ width: 4 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        ></motion.div>
      </div>

      {/* Umbrella Ribs */}
      <motion.div
        className="absolute w-14 h-7 border-t-2 border-l-2 border-r-2 border-black/20 rounded-t-full top-0.5 left-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>

      {/* Binary Code Rain */}
      <motion.div
        className="absolute inset-0 overflow-hidden opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[8px] text-blue-300 font-mono"
            style={{
              left: `${i * 12 + 4}%`,
              top: "20%",
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 20,
              opacity: [0, 1, 0],
              transition: {
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
                repeatType: "loop",
              },
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20 filter blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      ></motion.div>
    </motion.div>
  );
};

export default UmbrellaLogo;
