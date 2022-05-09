import { motion} from 'framer-motion'
export default function Loading(){
    return (
        <motion.div className="absolute w-screen h-screen flex justify-center items-center">
            <motion.div animate={{opacity: 1 , scale : 1}} className="p-2 rounded-full bg-red-300 animate-bounce">
            </motion.div>
            <motion.div animate={{opacity: 1 , scale : 1}} className="p-2 rounded-full bg-red-300 mx-10">
            </motion.div>
            <motion.div animate={{opacity: 1 , scale : 1}} className="p-2 rounded-full bg-red-300 animate-bounce">
            </motion.div>
        </motion.div>
    )
}