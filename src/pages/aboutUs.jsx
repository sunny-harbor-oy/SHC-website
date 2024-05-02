import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamImg from "../assets/team/team.webp";
import BubbleText from "../elements/BubbleText";

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    delayed: { opacity: 0, transition: { delay: 2 } }, // Add a delay of 2 seconds
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const imageVariants = {
    hidden: { x: "100vw" },
    delayed: { x: "100vw", transition: { delay: 2 } }, // Add a delay of 2 seconds
    visible: {
      x: 0,
      transition: { type: "spring", damping: 60, stiffness: 80 },
    },
  };

  return (
    <div className="pt-5">
      <motion.div
        className="relative w-screen mb-20 md:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div className="relative flex flex-col-reverse w-screen mt-10 font-semibold text-white md:mt-0 md:flex-row font-poppins bg-primary">
          <motion.div
            className="px-[5vw]  h-4/5 md:h-screen  flex flex-col justify-center w-full md:w-1/2 relative z-[2]"
            variants={containerVariants}
          >
            <BubbleText />
            <h2 className="sm:w-[75vh] mb-10 md:mb-5 text-xl md:text-2xl font-thin mt-2">
              Tavoitteemme on tarjota alan läpinäkyvin ja luotettavin apu
              asiakkaidemme IT-ratkaisuihin! Taidokkaasti suunnittelemamme
              mobiili- ja verkkosovellukset on tarkoitettu juuri sinulle, jos
              tavoitteesi on luoda yrityksellesi ainutlaatuinen kilpailuetu.
            </h2>
            <div className="relative sm:mt-[10vh] transition hover:cursor-pointer duration-500 hover:scale-105 hover:text-ilmoCardColor hover:font-semibold ">
              <div className="absolute hidden z-[1] bg-secondary filter blur-md w-[23.4vw] h-[4.3vw] px-[1vw] py-[2vw]"></div>
              <Link
                to={"./price-estimate"}
                className="relative z-[3] sm:text-xl text-base text-secondary  text-left py-[1.5vh] px-[2vh] shadow-md bg-card2 transition duration-500 hover:scale-225 hover:text-white hover:bg-secondary rounded-lg"
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
              className="transition-opacity duration-500 rounded-md shadow-sm"
              src={teamImg}
              alt="Team Image"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
