import { Battery2, FilePower, Menu2, Power, Home } from 'tabler-icons-react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect, useState } from 'react';
import { motion, useAnimation, useTime } from "framer-motion"
import Terminal from './Terminal';



const Navbar  = () => {
    const [time, setTime] = useState<string>()
    const [drop, setDrop] = useState<boolean>(false)
    const sections = [
        {
            name: 'Favorites',
            icon : 'favorits.png'
        },
        {
            name: 'Recently Used',
            icon : 'recent.png'
        },
        {
            name : 'All',
            icon : 'all.png'
        },
        {
            name : 'Settings',
            icon : 'settings.png'
        },
        {
            name : '01 - Information Gathering',
            icon : 'search.png'
        },
        {
            name : '02 - Vulnerability Analysis',
            icon : 'vulnerability.png'
        },
        {
            name : '03 - Exploitation',
            icon : 'exploitation.png'
        },
        {
            name : '04 - Post-Exploitation',
            icon : 'post.png'
        },
        {
            name : '05 - Password Attacks',
            icon : 'password.png'
        },
        {
            name : '06 - Wireless Attacks',
            icon : 'wireless.png'
        },
        {
            name : '07 - Web Applications',
            icon : 'browser.png'
        },
        {
            name : '08 - Sniffing & Spoofing',
            icon : 'sniffing.png'
        },
        {
            name : '09 - Maintaining Access',
            icon : 'access.png'
        },
        {
            name : '10 - Reporting Tools',
            icon : 'report.png'
        }
    ]

    const content = [
        {
            name: 'Terminal Emulator',
            icon : 'terminal.png',
        },
        {
            name: 'File Manager',
            icon : 'recent.png',
        },
        {
            name: 'Web Browser',
            icon : 'web.png',
        },
        {
            name: 'Text Editor',
            icon : 'note.png',
        }
    ]

    useEffect(() => {
    
       const timer = new Date()
       setTime(timer.getFullYear() + '-' + (timer.getMonth() + 1) + '-' + timer.getDate());


    })
    return (
        
        <motion.div className='flex justify-between px-2 items-center  h-10 bg-gray-800 text-gray-200 text-sm opacity-[0.8] z-50 relative'>
            <motion.div onClick={() => setDrop(!drop)} className={`${drop ? 'block' : 'hidden'} absolute top-10 bg-kali-200 pr-32 pl-10 py-4 left-0 z-50 rounded flex justify-between `}>
                <motion.ul>
                    {sections.map((section, index) => (
                        <motion.div key={index} className={`flex items-center gap-2 pr-32 pl-2 rounded  hover:bg-kali-100 cursor-pointer`}>
                            <motion.img  src={section.icon} className='h-5'/>
                            <motion.li className='py-2'>{section.name}</motion.li>

                        </motion.div>

                    ))}

                </motion.ul>
                <motion.div className='h-[500px] w-[1px] bg-black rounded ml-20'></motion.div>
                <motion.ul className='ml-8'>
                    {content.map((section, index) => (
                        <motion.div key={index} className='flex items-center gap-2  pr-32 pl-2 rounded  hover:bg-kali-100 cursor-pointer'>
                            <motion.img src={section.icon} className='h-5'/>
                            <motion.li className='py-2'>{section.name}</motion.li>
                        </motion.div>
                    ))}
                </motion.ul>
            </motion.div>
            <motion.div className='flex'>
            <motion.button onClick={() => setDrop(!drop)}><motion.img className='w-6 h-6 mr-4' src="log.png"></motion.img></motion.button>
            <motion.div>|</motion.div>
            <motion.button><motion.img className='w-6 h-4 ml-4' src="display.png"></motion.img></motion.button>
            <motion.button><motion.img className='w-6 h-6 ml-2' src="terminal.png"></motion.img></motion.button>
            <motion.button><motion.img className='w-6 h-4 ml-2 mr-4' src="folder.png"></motion.img></motion.button>
            <motion.div>|</motion.div>
            </motion.div>
            
            <motion.div className='flex items-center gap-2'>
                <motion.span><Menu2 size={17} /></motion.span>
                <motion.span><Battery2  size={17} /></motion.span>

                <motion.h1>en_IN.utf8</motion.h1>
                <motion.h1>{time}</motion.h1>
                <motion.span><Power size={17} /></motion.span>
            </motion.div>
        </motion.div>
    )
}


export default Navbar