import Device from "../../Devices-bro.svg";
import Payment from "../../Payment Information-bro.svg";

import { LazyMotion, domAnimation, m ,AnimatePresence } from "framer-motion";
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
export default function Feature(){
    return (
        <LazyMotion features={domAnimation}>
              <m.div variants={container} className="mt-20 relative">
                <h1 className="md:text-2xl font-smooth  text-xl font-extrabold  text-slate-700 text-center">
                  Hai , Mari coba fitur ini.
                </h1>
                <m.div variants={item} className="flex container justify-center mx-auto mt-10 md:gap-20 z-50">
                  <div className="text-center relative z-50">
                    <m.img  animate={{opacity:1}} src={Device} width="300" height="300" alt="device-bro" />
                    <h1 className="absolute bottom-2 flex justify-center w-full font-semibold text-slate-700 text-sm">
                      Responsive template
                    </h1>
                  </div>
                  <div className="text-center relative z-50">
                    <img src={Payment} width="300" height="300" alt="device-bro" />
                    <h1 className="absolute bottom-2 flex justify-center w-full font-semibold text-slate-700 text-sm">
                      Kamu Dapat laporan transfer
                    </h1>
                  </div>
                </m.div>
                <AnimatePresence>
                   <m.div animate={{y:50}} className="path-round absolute w-56 h-56"></m.div>
                </AnimatePresence>
               
              </m.div>
            </LazyMotion>
    )
    
}
