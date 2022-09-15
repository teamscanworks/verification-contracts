import { FC, ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {
  children?: ReactElement;
}

const FadeIn: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ ease: "easeOut", delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
