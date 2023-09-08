import { motion } from "framer-motion";
const SectionHeading = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-xl font-extrabold transition-all dark:text-slate-200"
    >
      <span className="text-[#990d35]">&lt;</span>
      {children}
      <span className="text-[#990d35]">/ &gt;</span>
    </motion.h2>
  );
};
export default SectionHeading;
