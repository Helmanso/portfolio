import { FilePower, Power } from 'tabler-icons-react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { PageContext } from "../pages/index"


type Props = {
    page: number,
    setPage: any
}

const Boot = () => {
    const { page, setPage } = useContext(PageContext)
    const controls = useAnimation()
    const [isFullScreen, setFullScreen] = useState<boolean>(false)
    const [li, setLi] = useState<number>(0)

    useEffect(() => {
        async function effects() {
            await controls.start({
                scale : [1,1.5,1],
                transition: { duration: 3 },
              })
            await controls.start({
                x: 660,
                y: 400,
                transition: { duration: 2 },
            })
        }
        effects()
    }, [])

    useEffect(() => {

    document.body.onkeydown = (e) => {


        if (e.key === "ArrowUp") {
            setLi(li <= 0 ? 8 : li - 1)
        }
        else if (e.key === "ArrowDown") {
            setLi(li >= 8 ? 0 : li + 1)
        }
        else if (e.key == "Enter"
        ) {
            document.body.onkeydown = null
            setPage(page + 1)
        }
    }
    })

   

    return (
        <motion.div className="bg-gradient-to-l w-screen h-screen from-cyan-500 to-blue-500 flex flex-col items-center justify-center">
            <motion.img    animate={controls} className={`${isFullScreen ? 'hidden' : 'block'} h-[250px]`} src="dragon.png" />
            <motion.button onClick={() => {setFullScreen(true)}} className={`${isFullScreen ? 'hidden' : 'block'} hover:text-blue-100`} animate={{scale: [0,1], y: -150}} transition={{delay: 5}}><Power size={80}/></motion.button>
            <motion.div  className={`${!isFullScreen ? 'hidden' : 'block'} w-full h-full flex flex-col justify-center items-center gap-20 relative`}>
                <motion.img className='h-[200px]'  src="logo.png"/>
                <motion.div className='w-1/2 bg-gray-800 blur-[1px] shadow-xl opacity-20 w-3/6 h-1/2 rounded	'></motion.div>
                <motion.div className='absolute  w-3/6 h-1/2 bottom-32 py-4 px-12'>
                    <motion.h1 className='text-center mb-12  font-bold text-gray-200 '>Boot Menu</motion.h1>
                    <motion.ul className='flex flex-col gap-2 font-bold text-gray-200 text-xl tracking-wider'>
                        <motion.li className={`${li === 0  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Live (amd64)</motion.li>
                        <motion.li className={`${li === 1  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Live (amd64 failsafe)</motion.li>
                        <motion.li className={`${li === 2  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Live (forensic mode)</motion.li>
                        <motion.li className={`${li === 3  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Live Usb Persistence</motion.li>
                        <motion.li className={`${li === 4  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Live Usb Encrypted Persistence</motion.li>
                        <motion.li className={`${li === 5  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Graphical Install</motion.li>
                        <motion.li className={`${li === 6  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Install</motion.li>
                        <motion.li className={`${li === 7  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Install with speech synthesis</motion.li>
                        <motion.li className={`${li === 8  ? "bg-blue-300 px-2 relative right-2 text-white rounded" : 'bg-none'} `}>Advanced options</motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Boot