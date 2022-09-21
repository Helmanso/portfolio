import { motion, useAnimation, useTime } from "framer-motion"
import { useEffect, useState } from "react"



const Terminal = () => {

    const [close, setClose] = useState<boolean>(false)
    const [lines, setLines] = useState<string[]>([])
    const [input, setInput] = useState<string>('')

  
    const commands = [
        '<span><a class="text-green-400">[*]</a> Starting the metasploit Framework console .../<span>',
        '<span>metasploit v4.11.0-dev [core:4.11.0.pre.dev api:1.0.0]]</span>',
        '<span class="text-yellow-500">1980 exploits - 1053 auxiliary - 290 post</span>',
        '<span class="text-yellow-500">379 payloads - 45 encoders - 10 nops</span>',
        '0 evasion',
        'metasploit-framework',
        'msf5 >',
        'msf5 > use exploit/multi/handler',
        'msf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp',
        'payload => windows/meterpreter/reverse_tcp',
        'msf5 exploit(multi/handler) > set lhost 0.0.0.0',
        'msf5 exploit(multi/handler) > set lport 4444',
        'lport => 4444',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> exploit',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> [*] Started reverse TCP handler on',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> [*] Sending stage (179779 bytes) to',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> [*] Meterpreter session 1 opened',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> sessions -i 1 </h1>',
        '<span class="text-red-500">msf5 exploit(multi/handler) </span>> [*] Starting interaction with 1...',
        '<span class="text-green-400 text-sm">meterpreter > scp -r /home/username/Documents/resume.pdf /home/username/Desktop/resume.pdf</span>',
        '<h2 class="text-red-500 text-xl">Payload destination: /home/username/Desktop/resume.pdf</h2>',


    ]
   
    
    useEffect(() => {
     
        const interval = setInterval(() => {
            const msfElement = document.getElementById('msf')

            if (lines.length < commands.length && msfElement && msfElement?.innerHTML.length > 0) {
                let element = document.getElementById('list')
                if (element)
                {
                    element.innerHTML += commands[lines.length] + '<br/>'
                    setLines([...lines, commands[lines.length]])
                }
            }
            if (msfElement && msfElement?.innerHTML.length == 0) {
                msfElement.innerHTML = 'msfconsole'
            }
        }, 300)

        return () => clearInterval(interval)

      
    }, [lines])

    useEffect(() => {
        if (lines.length === commands.length && !close) {
            setInterval(() => {
                setClose(true)
            }, 3500)
        }
    })
    
    return (
        <motion.div className={`${close ? 'hidden' : 'flex'} w-full h-full  items-center justify-center relative`}>
            <motion.div className='absolute w-[800px] h-[500px] bg-kali-200 py-2 rounded px-3  opacity-[0.8] z-10 '></motion.div>
            <motion.div className='absolute  w-[800px] h-[500px]  py-2 rounded px-3 z-20 shadow-xl'>
                <motion.div className='flex items-center justify-between'>
                    <motion.h1 className='text-center text-gray-300 text-xs invisible'>root@Kali:li</motion.h1>
                    <motion.h1 className='text-center text-gray-300 text-xs'>root@Kali:/home/kali</motion.h1>
                    <motion.div className='flex gap-3 text-s, text-gray-300'>
                        <motion.h1>-</motion.h1>
                        <motion.h1>o</motion.h1>
                        <motion.h1>x</motion.h1>
                    </motion.div>
                </motion.div>

                <motion.div className=' text-gray-300  text-xs flex gap-2 mt-1'>
                    <motion.span>File</motion.span>
                    <motion.span>Actions</motion.span>
                    <motion.span>Edit</motion.span>
                    <motion.span>View</motion.span>
                    <motion.span>Help</motion.span>
                </motion.div>
                <motion.div className="mt-4 text-sm flex items-center ">
                    <motion.span className='text-red-500'>root@kali</motion.span>
                    <motion.span className=''>:</motion.span>
                    <motion.span className='text-kali-300'>/home</motion.span>
                    <motion.span className=''>#</motion.span>
                    <motion.div className='ml-2' id="msf"></motion.div>
                

                </motion.div>
                <motion.div className="text-xs mt-2" id="list">
                    
                </motion.div>
                
            </motion.div>

        </motion.div>
    )
}

export default Terminal