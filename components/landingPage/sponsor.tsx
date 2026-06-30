

import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import React, {FunctionComponent} from "react";

//@ts-ignore
import Google from "@/public/assets/GoogleForStartups_Horizontal1.png"

// @ts-ignore
import brex from "@/public/assets/BrexBlack.png"

// @ts-ignore
import deel from "@/public/assets/deel.png"

// import ecell from "@/public/assets/iitbhulogo.png";

const ListOfSponsor =[
    {
    src:Google,
    href:"https://startup.google.com/",
    alt:"google"
    },
    
    {
        src:brex,
        href:"https://www.brex.com/",
        alt:"brex"
    },
    
    
    {
        src:deel,
        href:"https://www.deel.com/",
        alt:"deel"
    }
    // {
    //     src:ecell,
    //     href:"https://www.ecelliitbhu.com/",
    //     alt:"ecell"
    // }
]
interface OwnProps {}

type Props = OwnProps;
export const Sponsor: FunctionComponent<Props> = (props) => {
    return (
        <div  className="mt-7 max-w-screen">
            <div className="font-semibold text-2xl text-foreground uppercase text-center mb-7">global sponsors</div>
            <div className="flex flex-wrap justify-center items-center" >
                {
                    ListOfSponsor.map((data,index)=>
                        <div className="border border-zinc-800 bg-zinc-900/40 m-2 flex justify-center items-center h-40 w-72 rounded-lg p-4 shadow-sm hover:border-[#00b0f0]/30 transition" key={index}>
                            <a
                                target={"_blank"}
                                href={data.href}
                                className="flex justify-center items-center hover:opacity-80 transition"
                            >
                                <Image 
                                    src={data.src} 
                                    alt={data.alt} 
                                    height={200} 
                                    width={250} 
                                    className={cn(
                                        "object-contain max-h-20 w-auto",
                                        (data.alt === "brex" || data.alt === "deel") && "invert brightness-200"
                                    )}
                                />
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}