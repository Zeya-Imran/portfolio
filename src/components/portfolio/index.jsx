import { Link } from "react-router-dom";
import { projects } from "../../constants";
import LayoutSection from "../shared/layout";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../animations";
import Recommendations from "./recommended";
import { FaArrowTurnDown } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <LayoutSection>
      <h1 className="text-[#1e1e38] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[70%] text-[15vw] montserrat-bold z-0">
        Portfolio
      </h1>
      <section className="min-h-screen w-11/12 md:w-4/5 mx-auto flex flex-col gap-6 md:gap-8 z-20 snap-center">
        <motion.h1
          className="text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h1>

        <motion.div
          className="flex justify-between"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <div className="ex-box">
            <h1>2 +</h1>
            <p>Yeare Experience</p>
          </div>
          <div className="ex-box ">
            <h1>100 + </h1>
            <p>Completed Projects</p>
          </div>
          <div className="ex-box ">
            <h1>104 +</h1>
            <p>Satisfied Customer</p>
          </div>
          <div className="ex-box ">
            <h1>20 +</h1>
            <p>Honors and Awards</p>
          </div>
        </motion.div>

        {/*   projects box  */}
        <div className="flex items-end gap-5">
          <motion.h1
            className="text-2xl md:text-4xl text-[#ddd] palanquin-semibold tracking-wide"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50, y: -12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <FaArrowTurnDown style={{ color: "white", fontSize: "24px" }} />
          </motion.div>
        </div>

        <div className="text-[#848484] grid md:grid-cols-3 grid-cols-1 mt-5 gap-x-8">
          {projects.map((item, i) => {
            // console.log(item.url);
            return (
              <Link to={item.url} key={i}>
                <motion.div
                  className="projects-box-wraper flex flex-col gap-5 relative bg-[#2b2b38] mb-5"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                >
                  <div className="projects-box text-white">
                    <img src={item.imgUrl} alt={item.id} />
                  </div>
                  <motion.div
                    className="mb-5 px-2 flex justify-between items-end overflow-hidden"
                    initial={{ y: -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h1 className="text-[#848484] montserrat-medium text-xl">
                        {item.title}
                      </h1>
                      <p className="text-[#ddd] palanquin-regular">
                        {item.description}
                      </p>
                    </div>
                    <FaExternalLinkAlt
                      className="icon-hover"
                      style={{ fontSize: "24px", marginRight: "10px" }}
                    />
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="">
          <Recommendations />
        </div>
      </section>
    </LayoutSection>
  );
};

export default Portfolio;
