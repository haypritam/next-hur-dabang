import React from "react"
import Head from "next/head"
import Image from "next/image";
import { AnimationT } from "./components/AnimationT"
import { Layoutt } from "./components/Layoutt"
import sir from "../public/images/profile/sir.jpg"
import { Researchint } from "./components/Researchint";
import { Experiance } from "./components/Experiance";




export default function About() {
    return (
      <>
      <Head>
        <title>About</title>
        <meta name="description" content="any description" />
      </Head>
      <AnimationT text='About' />

      </>
    )
    }