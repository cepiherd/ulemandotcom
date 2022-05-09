import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
const item = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Header(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isUserExist = () => {
      if (props?.user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    isUserExist();
  }, []);

  let navigate = useNavigate();

  const DirectLoginPage = (user) => {
    if (user) {
      return false;
    }
    navigate("/auth");
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        animate={{ opacity: 1 }}
        variants={item}
        className="md:border-b md:border-slate-50/25 py-2 md:shadow-sm w-full"
      >
        <div className="md:container mx-auto w-full bg-transparent flex justify-between">
          <div className="px-3 self-center font-bold md:text-lg text-2xl">
            <Link to={"/"}>
              <span className="text-red-600">U</span>
              <span className="text-slate-500 border-l ">LEMAN</span>
            </Link>
          </div>
          <m.div
            animate={{ opacity: 1 }}
            className="px-3 md:flex self-center transition-all "
          >
            <div className=" hidden md:flex">
              <div className="text-xs self-center mx-3 font-smooth cursor-pointer hover:text-red-300 transition-all">
                Community
              </div>
            </div>
            <button
              onClick={() => DirectLoginPage(props?.user)}
              className="bg-gradient-to-r from-red-300 to-indigo-500 py-2 shadow-md text-white font-semibold px-4 rounded-md text-xs hover:shadow-sm hover:ring-4 hover:ring-red-300/20 transition-all"
            >
              {isLogin ? props?.user : "Login"}
            </button>
          </m.div>
        </div>
      </m.nav>
    </LazyMotion>
  );
}

export default Header;
