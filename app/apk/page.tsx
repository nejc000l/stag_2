"use client";

import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";
import { CiMenuBurger} from "react-icons/Ci";
import {AiOutlineClose,AiOutlineFilePdf } from 'react-icons/Ai'
import {motion} from 'framer-motion'

function Apk() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="relative flex flex-row z-[4] ">
          <div
            className={`flex-start paddings min-h-screen flex flex-col justify-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            }`}
          >
            <div className="flex  justify-start py-4  flex-col   ">
            {isOpen === true ? 
              <AiOutlineFilePdf className="relative z-10 w-[40px] items-end h-[40px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}/> : 
''}
              <h1 className="py-4 font-bold text-4xl	">
                Afriška prašičja kuga(APK)
              </h1>

              <h4 className="text-justify">

                Afriška prašičja kuga (APK) je nalezljiva virusna bolezen
                domačih in divjih prašičev, za katero ni cepiva. Bolezen ne
                predstavlja nevarnosti za zdravje drugih živalskih vrst in
                ljudi.Bolezen v Sloveniji še ni bila ugotovljena, vendar pa
                predstavlja njeno širjenje iz vzhoda Evrope proti zahodu vse
                večje tveganje tudi za populacije domačih in divjih prašičev v
                Sloveniji. Za bolezen so značilne velike izgube, predvsem zaradi
                omejitev trgovanja in izvoza v tretje države. V preteklosti je
                bila bolezen, kot že ime pove, omejena na države Afrike, v
                zadnjih letih pa se je po vnosu v Gruzijo in Rusijo razširila v
                Baltske države, na Poljsko, Češko in v Romunijo. APK je že vrsto
                let prisotna tudi na Sardiniji, kjer je bolezen endemična.V letu
                2020 je bilo v Evropi prijavljenih 11.208 pojavov APK pri divjih
                prašičih in 1.247 pojavov pri domačih prašičih.V letu 2019 je
                bilo v Evropi prijavljenih 6.456 pojavov APK pri divjih prašičih
                in 1.912 pojavov pri domačih prašičih.V letu 2018 je bilo v
                Evropi prijavljenih 5.429 pojavov APK pri divjih prašičih in
                1.465 pojavov pri domačih prašičih,V letu 2017 je bilo v Evropi
                prijavljenih 4.002 pojavov APK pri divjih prašičih in 265
                pojavov pri domačih prašičih.
              </h4>
              <span className="pt-4 text-sm font-light">
                Spremenjeno: 19.04.2022 ob 16.08
              </span>
            </div>
          </div>
          <motion.div  animate={{ x: isOpen ? "-100%" : "0%" }} className={`relative  flex w-[100%] items-center justify-center flex-col z-0`}>
        {isOpen === true ? 
              '': 
              <AiOutlineClose className="relative z-10 w-[40px] items-end h-[40px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>}
            <PdfContainer/>
          </motion.div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Apk;
