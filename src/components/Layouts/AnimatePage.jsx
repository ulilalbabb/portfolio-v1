import { motion } from "framer-motion";

const animations = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } },
};

const AnimatePage = ({ children }) => {
  return (
    <motion.div 
        initial="hidden" 
        animate="visible" 
        exit="exit"
        variants={animations} 
        >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
