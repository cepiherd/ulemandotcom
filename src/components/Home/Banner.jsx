import Shy from "../../Shy-bro.svg";
import { LazyMotion, domAnimation, m , motion } from "framer-motion";

function Banner(props) {

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div  className="px-2 text-center md:min-h-[600px] min-h-[300px] bg-red-50 relative w-full">
        <div className="absolute  flex justify-center items-center self-center w-full left-0 h-full text-slate-700/80">
          <motion.div  id="content">
            <motion.div animate={{opacity:1}} className="flex justify-center mb-5">
              <a href="https://storyset.com/people">
                <m.img animate={{scale:1}}  src={Shy} width="250" height="250" alt="shy-bro" />
              </a>
            </motion.div>
            <h1 className="md:text-5xl font-smooth  text-xl font-extrabold  ">
              Kini bikin undangan ga perlu ribet.
            </h1>
            <p className="font-smooth font-semibold mt-2 text-sm">
              Di
              <span className="font-extrabold mx-1 text-indigo-800">
                uleman.com
              </span>
              kamu bisa coba trial sepuasnya
            </p>

            <m.button animate={{opacity:1}} className="border  hover:border-dashed text-sm md:text-base px-8 py-3 mt-4 transition-all font-semibold hover:border-red-400 hover:text-red-400 hover:shadow-lg bg-blue-700/5 hover:bg-transparent ">
              Cobain Sekarang
            </m.button>
          </motion.div>
        </div>
      </m.div>
    </LazyMotion>
  );
}

export default Banner;
