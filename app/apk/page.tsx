"use client";

import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";

import { Disclosure, Transition } from "@headlessui/react";

import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Data } from "../../constants/data";
function Apk() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [showRest, setShowRest] = useState(false);

 const [firstSentence, secondSentence, thirdSentence, fourthSentence] = Data[0].description.split('.').slice(0, 4);
  
  return (
    <>
      {isOpen ? <Navbar /> : null}

      <PageWrapper>
        <section className=" relative  flex flex-col z-[4]  top-0 h-[100%] pb-24">
          <div
            className={`flex-start  flex flex-col justify-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            }`}
          >
            <div className="flex  justify-start py-4 h-ful flex-col  mr-[10%] ml-[10%]  md:mr-[15%] md:ml-[15%] ">
              {isOpen === true ? (
                <div>
                  <BsFileEarmarkPdf
                    className="relative z-10 w-[40px] items-end h-[40px] md:w-[40px] md:h-[40px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <span className="text-[9px] md:text-lg">Odpri PDF</span>
                </div>
              ) : (
                ""
              )}
              <h1 className="py-4 font-bold text-2xl md:text-4xl	">
                Afriška prašičja kuga(APK)
              </h1>

              <h4 className="text-[9px] md:text-[16px] m-[10px] flex-wrap break-normal text-justify">
                <div key={Data[0].key}>
                {firstSentence}. {secondSentence}. {thirdSentence}. {fourthSentence}.
                  {showRest &&
                    Data[0].description.slice(
                      firstSentence.length + secondSentence.length + 4
                    )}
                  <span
                    onClick={() => setShowRest(!showRest)}
                    className="text-[#3f8629d3] font-bold cursor-pointer"
                  >
            {showRest ?  <span className="text-[9px] md:text-lg"> Pokaži manj</span> : <span className="text-[9px] md:text-lg"> Pokaži več</span> }
                  </span>
                </div>
              </h4>
              <div className=" relative flex text-center justify-center flex-col ">
                <div className="absolute w-full h-[40vh] overflow-scroll top-0  pt-[1rem] p-[3rem]">
                  <Disclosure>
                    <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px]  md:text-lg ">
                      Leto 2017
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <li className="p-4 text-[9px] flex-wrap md:text-[14px]">
                          V letu 2017 je bilo v Evropi prijavljenih 4.002
                          pojavov APK pri divjih prašičih in 265 pojavov pri
                          domačih prašičih.
                        </li>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <div>
                    <Disclosure>
                      <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px]  md:text-lg">
                        Leto 2018
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          <li className=" p-4 text-[9px] flex-wrap md:text-[14px]">
                            V letu 2018 je bilo v Evropi prijavljenih 5.429
                            pojavov APK pri divjih prašičih in 1.465 pojavov pri
                            domačih prašičih.
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div>
                    <Disclosure>
                      <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px] md:text-lg ">
                        Leto 2019
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          <li className="p-4 text-[9px] flex-wrap md:text-[14px]">
                            V letu 2019 je bilo v Evropi prijavljenih 6.456
                            pojavov APK pri divjih prašičih in 1.912 pojavov pri
                            domačih prašičih.
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div>
                    <Disclosure>
                      <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px] md:text-lg ">
                        Leto 2020
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          <li className="p-4 text-[9px] flex-wrap md:text-[14px] ">
                            V letu 2020 je bilo v Evropi prijavljenih 11.208
                            pojavov APK pri divjih prašičih in 1.247 pojavov pri
                            domačih prašičih.
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
              </div>

              <span className="pt-4 text-[9px] md:text-[12px] font-light">
                Spremenjeno: 19.04.2022 ob 16.08
              </span>
            </div>
          </div>
          <motion.div
            animate={{ x: isOpen ? "-100%" : "0%" }}
            className={`relative   flex w-[100%] items-center justify-center flex-col z-0`}
          >
            {isOpen === true ? (
              ""
            ) : (
              <div className="pt-4 ">
                {" "}
                <MdClose
                  className="relative w-[40px] items-end h-auto  cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            )}
            <PdfContainer />
          </motion.div>
        </section>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default Apk;
