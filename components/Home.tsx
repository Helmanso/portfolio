import { FilePower, Power } from 'tabler-icons-react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import Terminal from './Terminal';
import NavBar from './NavBar'

type Props = {
    page: number,
    setPage: any
}

const Home = () => {

    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setShow(true)
        }, 8000)
    }, [])


    return (
        <motion.div className='bg-[url("../public/login.png")] w-screen  h-screen bg-cover '>
            <NavBar />
            <motion.div className='w-full h-full flex items-center justify-center'>
            <Terminal />
            </motion.div>
            <motion.div  className={`${show ? 'block' : 'hidden'} absolute h-16 w-16 left-8 top-14 text-xs flex  z-0 flex-col items-center gap-3`}>
            <a href="/resume.pdf"><motion.img className='' src="pdf.png" /></a>
                <motion.h1>Resume.pdf</motion.h1>
            </motion.div>


        </motion.div>
    )
}

export default Home