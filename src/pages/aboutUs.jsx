import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamImg from "../assets/team/team.webp";

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  

  const imageVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 60, stiffness: 80 },
    },
  };

  return (
    <motion.div
      className="relative w-screen h-screen mb-24"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="relative flex flex-col-reverse w-screen h-full pb-20 font-semibold text-white md:pb-0 md:flex-row font-poppins bg-primary">
        <motion.div
          className="px-[5vw] py-7 h-4/5 md:h-screen  flex flex-col justify-center w-full md:w-1/2 relative z-[2]"
          variants={containerVariants}
        >
          <h1 className="sm:text-h1-sm text-h1  leading-[8vh] sm:leading-[8vw] lg:leading-[7.2vh] xl:leading-[7.2vh]">
            Ratkaisuja,
            <br />
            joihin luotat.
            <br />
          </h1>
          <h2 className="sm:w-[75vh] sm:text-h2-sm mb-10 md:mb-5 text-h2 sm:h-[20vh] h-[37vh] pt-[3vh] font-medium">
            Meidän vahvuutemme on kustannustehokkaiden IT-ratkaisujen
            luomisessa, jotka nostavat liiketoimintasi uudelle tasolle. Voimme
            tehostaa toimintaasi ja luoda yrityksellesi ainutlaatuisen
            kilpailuedun.
          </h2>
          <div className="relative sm:mt-[20vh] mt-[5vh] ">
            <div className="absolute hidden z-[1] bg-secondary filter blur-md w-[23.4vw] h-[4.3vw] px-[1vw] py-[2vw]"></div>
            <Link
              to={"./price-estimate"}
              className="relative z-[3] sm:text-[2.43vh] text-[4.6vw] text-left py-[1.5vh] px-[2vh] bg-gray-800 rounded-lg"
            >
              Kustannusarvio sekunneissa! &rarr;
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="justify-center pt-[10vw] px-[5vw] md:py-0 md:pr-[5vw] items-center hidden md:flex"
          variants={imageVariants}
        >
          <motion.img
            className="transition-opacity duration-500 rounded-sm"
            src={teamImg}
            alt="Team Image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
