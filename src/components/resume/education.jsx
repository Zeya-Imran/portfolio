import { motion } from "framer-motion";
import { education } from "../../constants";
import TitleText from "./titletext";
import { Divider } from "antd";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <section id="education" className="py-8 w-11/12 md:w-4/5 mx-auto">
      <TitleText title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((education) => (
          <motion.div
            key={education.id}
            className="p-6 resume-ex-box flex flex-col gap-2 mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <FaGraduationCap style={{ fontSize: "24px" }} />{" "}
              <h1 className="">{education.degree}</h1>
            </div>
            <Divider
              type="horzontal"
              style={{ borderColor: "rgb(221 221 221 / 0.2)" }}
            />
            <p>
              {education.institution} ({education.year})
            </p>
            <p>{education.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
