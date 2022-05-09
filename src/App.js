import { Component, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Loading from "./components/Fallback/Loading.jsx";
import { motion } from "framer-motion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 10 },
    };
    const Home = lazy(() => import("./components/Home/index.jsx"));
    const Auth = lazy(() => import("./components/Auth/login.jsx"));
    const Register = lazy(() => import("./components/Auth/register.jsx"));
    const Dashboard = lazy(() => import("./components/Dashboard/index.jsx"));

    return (
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <Header user="" />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense fallback={<Loading />}>
                <Auth />
              </Suspense>
            }
          />
          <Route
            path="/auth /register"
            element={
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </motion.div>
    );
  }
}

export default App;
