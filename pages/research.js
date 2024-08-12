import React from "react"
import { AnimationT } from "./component/AnimationT"
import Head from "next/head"



export default function Research() {
    return (
      
      <div className=" pt-2 w-full flex flex-col items-center self-center"
      >
        <Head>
        <title>Research</title>
        <meta name="description" content="any description" />
      </Head> 
      <AnimationT text='Research' />

      </div>
    )
    }