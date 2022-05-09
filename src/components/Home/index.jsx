import { LazyMotion ,domAnimation } from "framer-motion";
import Banner from "./Banner.jsx";
import Feature from "./Feature.jsx";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <Banner />
      <Feature />
    </LazyMotion>
  );
}
