import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeUpProps = {
    children: ReactNode;
    delay?: number;
}

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default FadeUp;

