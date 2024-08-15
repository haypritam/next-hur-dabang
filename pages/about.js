import React from "react"
import Head from "next/head"
import Image from "next/image";
import AnimationT from './components/AnimationT';




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