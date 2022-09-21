import { motion, useAnimation } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"
import { PageContext } from "../pages/index"

type Props = {
    page: number,
    setPage: any
}


const Logs = () => {
    
    const dummy = useRef<null | HTMLDivElement>(null); 
    const [log, setLog] = useState<string[]>([])
    const { page, setPage } = useContext(PageContext)
    const timer = useRef<number>(0);
    const scrollDown = () => {
        if (dummy && dummy.current)
        {dummy.current.scrollIntoView({ behavior: "smooth" });}
    }

    const logs = [
        '04:49:01.393401          ERROR [COM]: aRC=VBOX_E_OBJECT_NOT_FOUND (0x80bb0001) aIID={d0a0163f-e254-4e5b-a1f2-011cf991c38d} aComponent={VirtualBoxWrap} aText={Could not find a registered machine named Kali-Linux-2022.2-virtualbox-amd64}, preserve=false aResultDetail=0',
        'Log opened 2022-07-17T03:24:18.269783700Z',
        'Build Type: release',
        'Build Version: 1.0.0',
        'Build Time: 2022-07-17T03:24:18.269783700Z',
        'Build Commit: 1',
        'Build Branch: main',
        'Build Tag: v1.0.0',
        'Build OS: linux',
        'Build Arch: amd64',
        '03:27:49.601002 USBPROXY Getting USB descriptor (id 0) failed (dwErr=31) on hub USB#ROOT_HUB30#4&232973a9&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8} port 13',
        '01:12:32.735033 USBPROXY Getting USB descriptor (id 0) failed (dwErr=31) on hub USB#ROOT_HUB30#4&232973a9&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8} port 14',
        '01:13:15.610540 USBPROXY Getting USB descriptor (id 0) failed (dwErr=31) on hub USB#ROOT_HUB30#4&232973a9&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8} port 13',
        '04:49:01.393401          ERROR [COM]: aRC=VBOX_E_OBJECT_NOT_FOUND (0x80bb0001) aIID={d0a0163f-e254-4e5b-a1f2-011cf991c38d} aComponent={VirtualBoxWrap} aText={Could not find a registered machine named Kali-Linux-2022.2-virtualbox-amd64}, preserve=false aResultDetail=0',
        '05:02:09.468623Launched VM: 65057888 pid: 18568 (0x4888) frontend: GUI/Qt name: Kali-Linux-2022.2-virtualbox-amd64',
        '[    0.071516] clocksource: Switched to clocksource arch_sys_counter \
        [    0.148325] VFS: Disk quotas dquot_6.6.0 \
        [    0.148407] VFS: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes) \n \
        [    0.148590] FS-Cache: Loaded \
        [    0.148772] CacheFiles: Loaded \
        [    0.156832] NET: Registered protocol family 2 \
        [    0.157550] TCP established hash table entries: 4096 (order: 2, 16384 bytes) \
        [    0.157612] TCP bind hash table entries: 4096 (order: 3, 32768 bytes) \
        [    0.157709] TCP: Hash tables configured (established 4096 bind 4096) \
        [    0.157806] UDP hash table entries: 256 (order: 1, 8192 bytes) \
        [    0.157833] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes) \
        [    0.158044] NET: Registered protocol family 1',
        '[    0.192843] vc-mem: phys_addr:0x00000000 mem_base=0x3ec00000 mem_size:0x40000000(1024 MiB) \
        [    0.193264] vc-sm: Videocore shared memory driver \
        [    0.193537] gpiomem-bcm2835 3f200000.gpiomem: Initialised: Registers at 0x3f200000 \
        [    0.203171] brd: module loaded \
        [    0.211926] loop: module loaded \
        [    0.211938] Loading iSCSI transport class v2.0-870. \
        [    0.212594] libphy: Fixed MDIO Bus: probed \
        [    0.212690] usbcore: registered new interface driver lan78xx \
        [    0.212750] usbcore: registered new interface driver smsc95xx \
        [    0.212765] dwc_otg: version 3.00a 10-AUG-2012 (platform bus) \
        [    0.240645] dwc_otg 3f980000.usb: base=0xf0980000 \
        [    0.440827] Core Release: 2.80a \
        [    0.440836] Setting default values for core params \
        [    0.440865] Finished setting default values for core params \
        [    0.641115] Using Buffer DMA mode \
        [    0.641121] Periodic Transfer Interrupt Enhancement - disabled \
        [    0.641126] Multiprocessor Interrupt Enhancement - disabled \
        [    0.641133] OTG VER PARAM: 0, OTG VER FLAG: 0 \
        [    0.641145] Dedicated Tx FIFOs mode \
        [    0.641565] WARN::dwc_otg_hcd_init:1046: FIQ DMA bounce buffers: virt = 0x9f514000 dma = 0xdf514000 len=9024 \
        [    0.641589] FIQ FSM acceleration enabled for : \
                       Non-periodic Split Transactions \
                       Periodic Split Transactions \
                       High-Speed Isochronous Endpoints \
                       Interrupt/Control Split Transaction hack enabled',
        '[    0.641759] dwc_otg 3f980000.usb: new USB bus registered, assigned bus number 1',
        '[    0.641828] dwc_otg 3f980000.usb: irq 62, io mem 0x00000000 \
        [    0.641877] Init: Port Power? op_state=1 \
        [    0.641882] Init: Power Port (0) \
        [    0.642000] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 5.04 \
        [    0.642005] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1 \
        [    0.642009] usb usb1: Product: DWC OTG Controller \
        [    0.642013] usb usb1: Manufacturer: Linux 5.4.83-v8+ dwc_otg_hcd \
        [    0.642016] usb usb1: SerialNumber: 3f980000.usb \
        [    0.642125] hub 1-0:1.0: USB hub found \
        [    0.642155] hub 1-0:1.0: 1 port detected \
        [    0.642260] dwc_otg: FIQ enabled \
        [    0.642264] dwc_otg: NAK holdoff enabled',
        '[    0.643222] dwc_otg: FIQ split-transaction FSM enabled',
        '[    0.643229] Module dwc_common_port init',
        '[    0.643235] usbcore: registered new interface driver uas',
        '[    0.643240] usbcore: registered new interface driver usb-storage',
        '[    0.643246] mousedev: PS/2 mouse device common for all mice',
        '[    0.643270] bcm2835-wdt 3f100000.watchdog: Broadcom BCM2835 watchdog timer',
        '[    0.643299] bcm2835-cpufreq: min=600000 max=1500000',
        '[    0.643305] sdhci: Secure Digital Host Controller Interface driver',
        '[    0.643310] sdhci: Copyright(c) Pierre Ossman',
        '[    0.643319] mmc-bcm2835 3f300000.mmcnr: could not get clk, deferring probe',
        '[    0.643326] sdhost-bcm2835 3f202000.mmc: could not get clk, deferring probe',
        '[    0.643332] sdhci-pltfm: SDHCI platform and OF driver helper',
        '[    0.643350] ledtrig-cpu: registered to indicate activity on CPUs',
        '[    0.643356] hidraw: raw HID events driver (C) Jiri Kosina',
        '[    0.643362] usbcore: registered new interface driver usbhid',
        '[    0.643366] usbhid: USB HID core driver',
        '[    0.643378] vchiq: vchiq_init_state: slot_zero = 0x9f500000, is_master = 0',
        '[    0.643384] [vc_sm_connected_init]: start',
        '[    0.643389] [vc_sm_connected_init]: end - returning 0',
        '[    0.643394] Initializing XFRM netlink socket',
        '[    0.643400] NET: Registered protocol family 17',
        '[    0.643405] Key type dns_resolver registered',
        '[    0.643410] Registering SWP/SWPB emulation handler',
        '[    0.643416] registered taskstats version 1',
        '[    0.643421] Loading compiled-in X.509 certificates',
        '[    0.643428] uart-pl011 3f201000.serial: cts_event_workaround enabled',
        '[    0.643434] uart-pl011 3f201000.serial: no DMA platform data',
        '[    0.643441] mmc-bcm2835 3f300000.mmcnr: mmc_debug:0 mmc_debug2:0',
        '[    0.643447] mmc-bcm2835 3f300000.mmcnr: DMA channel allocated',
        '[    0.643454] sdhost: log_buf @ 9f514000 (9f514000)',
        '[    0.643460] mmc1: queuing unknown CIS tuple 0x80 (2 bytes)',
        '[    0.643466] mmc1: queuing unknown CIS tuple 0x80 (3 bytes)',
        '[    0.643471] mmc1: queuing unknown CIS tuple 0x80 (3 bytes)',
        '[    0.643477] mmc1: queuing unknown CIS tuple 0x80 (7 bytes)',
        '[    0.643482] mmc1: queuing unknown CIS tuple 0x80 (3 bytes)',
    ]
    
    useEffect(() => {
        scrollDown()
    }, [log])

   
    useEffect(() => {
        let interval = setInterval(() => {
            let item = logs[Math.floor(Math.random() * logs.length)];
            setLog([...log, item])
        }, 200);
        timer.current += 200;
        if (timer.current === 12000)
            setPage(page + 1)
        // remember to clear timers
        return function cleanup() {
            clearInterval(interval);
        };
    });

   
    return (
        <motion.div className="px-10 pt-8">
            <motion.ol        initial="hidden" animate="show"    className="font-thin tracking-wide flex flex-col gap-1">
              
                {log.map((item, index) => {
                    return (
                            <motion.li key={index}  className="text-sm">

                                {!(index % 8 === 0) ? <span className="text-green-300">[&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span className="text-yellow-400">[&nbsp;&nbsp;&nbsp;&nbsp;Warning&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                                {item}
                            
                                </motion.li>
                        ) 
                }
                )}
            </motion.ol>
            <div ref={dummy}></div>
        </motion.div>
    )
}

export default Logs