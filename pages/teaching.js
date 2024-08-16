import React from "react";
import AnimationT from './components/AnimationT';
import Layoutt from "./components/Layoutt";
import { LiaBookSolid } from "react-icons/lia";
import Head from "next/head";

export default function Teaching() {
  return (
    <>
    <Head>
         <title>Teaching</title>
         <meta name="description" content="Dr. Sajal Mukhopadhyay NIT Durgapur" />
       </Head>
      <main className="flex flex-col min-h-screen justify-between w-full items-center">
        <Layoutt className="pt-4 flex-grow">
          <AnimationT text="Teaching" className="font-titleFont" />
          
          <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-80">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-2xl font-bold font-titleFont text-blue-600">Courses taught</h1>

              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h1 className="font-titleFont text-2xl">CS1002: Advanced Algorithms</h1>
              </div>

              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h4 className="font-titleFont text-2xl">CSE726: Incentives in Computer Science</h4>
              </div>

              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h5 className="font-titleFont text-2xl">CSC01: Computer Programming</h5>
              </div>

              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h6 className="font-titleFont text-2xl">Randomized Algorithms</h6>
              </div>

              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h7 className="font-titleFont text-2xl">Game Theory and Its Applications</h7>
              </div>
              <div className="flex items-center justify-start mt-3">
                <LiaBookSolid style={{ fontSize: '30px', marginRight: '8px' }} />
                <h7 className="font-titleFont text-2xl">Online Algorithms</h7>
              </div>
            </div>
          </div>

          <div className="flex-col justify-center gap-y-32 pt-24">
            <div className="mb-4 text-2xl font-bold font-titleFont text-blue-600">Some Materials</div>
          </div>
        </Layoutt>

      </main>
    </>
  );
}