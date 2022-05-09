import { motion } from "framer-motion";
import LoginSvg from "../../loginsvg.svg";
import { Link } from "react-router-dom";
function Auth(props) {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      className="relative h-screen bg-red-300/30 overflow-hidden"
    >
      <motion.div
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto  p-2 absolute top-20 left-0 right-0  rounded  z-10"
      >
        <motion.div animate={{ opacity: 2 }} className="flex justify-center">
          <motion.img
            animate={{ scale: 1.3, rotateZ: 10 }}
            src={LoginSvg}
            width={200}
            height={200}
            alt="https://storyset.com/phone"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: 2 }}
          className="bg-white p-3 rounded shadow-md"
        >
          <label for="username" className="text-sm ">
            Username
          </label>
          <input
            type="text"
            className="border rounded py-2 px-2 w-full font-light text-slate-500 text-sm mb-2"
          />
          <label for="password" className="text-sm ">
            Password
          </label>
          <input
            type="password"
            className="border rounded py-2 px-2 w-full font-light text-slate-500 text-sm mb-2"
          />
          <button className="w-full border-dashed border hover:border-red-300 hover:bg-red-400/20  font-semibold text-sm text-slate-600 font-smooth py-2 mb-2 ">
            Login
          </button>
          <h1 className="text-xs font-smooth font-normal mb-2">
            Forgot Password ?
            <Link to="/forgot">
              <span className="text-red-400/80  ml-2">
              Click Here
              </span>
            </Link>
          </h1>

          <button className="w-full border-dashed border border-green-500 hover:border-green-300 hover:bg-green-400/20  font-semibold text-sm text-slate-600 font-smooth py-2 mb-2 ">
            Register
          </button>

          <div>
              <h1 className="text-xs text-center">Or login with <span className="font-semibold">SSO</span></h1>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ scale: 6, x: 600 }}
        className="path-round-wt  w-56 h-56 shadow-md top-0"
      ></motion.div>
      <motion.div
        animate={{ scale: 2, y: -200 }}
        className="path-round-wt  w-56 h-56 shadow-md top-0"
      ></motion.div>
      <motion.div
        animate={{ scale: 2 }}
        className="path-round  w-56 h-56  bottom-0 "
      ></motion.div>
    </motion.div>
  );
}

export default Auth;
