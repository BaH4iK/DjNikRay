import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.png';

// simple explosion + pulse animation until unmount
export default function SplashScreen() {
  const explosion = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
      >
        <motion.img
          variants={explosion}
          initial="hidden"
          animate="visible"
          className="w-40 h-40 object-contain"
          src={logo}
          alt="DJ Nik Ray Logo"
          // pulse until unmount
          whileInView={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.2 } }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
