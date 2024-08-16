import Layoutt from "./components/Layoutt";
import Head from "next/head";
import Image from "next/image";
import sir from "../public/images/profile/sir.jpg"
import AnimationT from './components/AnimationT';
import { SiGooglescholar, SiDblp, SiArxiv } from "react-icons/si";
import Link from 'next/link';




export default function Home() {
  return (
    <>
       <Head>
         <title>Sajal Mukhopadhyay</title>
         <meta name="description" content="Dr. Sajal Mukhopadhyay NIT Durgapur" />
       </Head>
       <Layoutt className="pt-0">
       <main className="flex items-center text-dark w-full min-h-screen">
          <Layoutt className="pt-0">
           <div className="flex items-center justify-between w-full ">
             <div className="col-span-3 relative w-max h-max rounded-2xl border-solid border-dark bg-light p-8">
               <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
               <div className="w-max">
                 <Image src={sir} alt='sir' className="w-max h-max rounded-xl" />
               </div>
             </div>
             <div className="w-1/2 flex flex-col items-center self-center">
               <AnimationT text='Dr. Sajal Mukhopadhyay' className="!text-3xl font-titleFont"/>
               <h1 className=" font-titleFont text-4xl ">Associate Professor </h1>
               <h className=" font-titleFont text-xl">sajal[at]cse[dot]nitdgp[dot]ac[dot]in</h>
               
               
               {/* Add the icons below the text animations */}
               <div className="flex gap-6 mt-4">
                 <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                   <SiGooglescholar size={40} className="text-[#4285F4]" />
                 </a>
 
                 <a href="https://dblp.org" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                   <SiDblp size={40} className="dblp-half-blue-yellow" />
                 </a>
 
                 <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                   <SiArxiv size={40} className="text-[#B31B1B]" />
                 </a>
               </div>
               <div className="flex flex-wrap gap-6 mt-4 w-full">
                     <p className="text-lg text-justify font-titleFont">
                            My broad research interests include: algorithmic game theory and its applications, 
                            behavioural economics, mobile and spatial crowdsourcing, multi-armed bandits, matching and market design.
                            You can find out more about my work{" "}
                            <Link href="/about" legacyBehavior>
                             <a className="text-blue-500 ">here.</a>
                               </Link>
                     </p>
              </div>
 
             </div>
           </div>
           </Layoutt>
       </main>
       </Layoutt>
     </>
  )
}