import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleMouseEnter = (technology) => {
    setHoveredTechnology(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTechnology(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>기술 스택</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 relative"
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(technology)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            <AnimatePresence>
              {hoveredTechnology === technology && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 rounded-md"
                >
                  {technology.name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
