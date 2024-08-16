import React from "react"
import Head from "next/head"
import Image from "next/image";
import AnimationT from './components/AnimationT';
import Layoutt from "./components/Layoutt";
import Researchint from "./components/Researchint";
import Experiance from "./components/Experiance";
import sir from "../public/images/profile/sir.jpg";




export default function About() {
    return (
      <>
      <Head>
        <title>About</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layoutt className="pt-4">
          <AnimationT text="About" className=" font-titleFont" />

          {/* Use grid with adjusted column sizes and gap */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-80">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-2xl font-bold font-titleFont text-blue-600">Biography</h1>
              <p className=" text-justify font-titleFont text-xl">
                Dr. Sajal Mukhopadhyay is an Associate Professor in the Department of Computer Science and Engineering at NIT Durgapur, India. 
                He received his PhD in Engineering in 2013 from the Department of Computer Science and Engineering of NIT Durgapur, India. 
                He has published papers in many reputed conferences and journals such as IEEE HealthCom, IEEE AINA, LNCS Transactions on 
                Computational Collective Intelligence (Springer), Journal of Ambient Intelligence and Humanized Computing (Springer), and 
                Enterprise Information Systems (Taylor & Francis), Sensors (MDPI), and others. He has received the Young Faculty Research 
                Fellowship under Visvesvaraya PhD Scheme and Best Paper awards for his conference publications. His research interests include 
                algorithmic game theory and its applications to healthcare, crowdsourcing, behavioural economics, mobile and spatial crowdsourcing, 
                participatory sensing, cloud computing, spectrum trading, multi-armed bandits, IoT, matching and market design.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="relative w-full max-w-md h-auto rounded-2xl border-solid border-dark bg-light p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
                <Image src={sir} alt="sir" className="rounded-2xl w-full h-auto" />
              </div>
            </div>
          </div>

          <Researchint />
          <Experiance />
        </Layoutt>
      </main>
    </>
    )
    }