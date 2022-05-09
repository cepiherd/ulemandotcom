import {motion} from 'framer-motion'
export default function Dashboard(props) {
  return (<motion.div className="bg-slate-900/10 flex ">
    <div className="sticky left-0 min-w-[350px] max-w-[350px] bg-[#1c1c24] text-white px-2 h-screen">
        <div>
            sidebar
        </div>
    </div>
    <div className='bg-white min-w-max m-10 col-span-1 w-full shadow'>
        
    </div>
  </motion.div>);
}
