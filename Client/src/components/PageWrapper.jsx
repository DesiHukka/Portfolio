import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Fade-in start
      animate={{ opacity: 1 }} // Fade-in end
      exit={{ opacity: 0 }} // Fade-out
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
