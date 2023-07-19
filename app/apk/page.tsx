"use client";

import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";
import { CiMenuBurger } from "react-icons/Ci";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/Ai";
import { motion } from "framer-motion";
import { Data } from "../../constants/data";
import { Description } from "@headlessui/react/dist/components/description/description";
function Apk() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="relative flex flex-row z-[4] min-h-screen">
          <div
            className={`flex-start paddings min-h-screen flex flex-col justify-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            }`}
          >
            <div className="flex  justify-start py-4  flex-col  mr-[15%] ml-[15%]  ">
              {isOpen === true ? (
                <div>
                  <AiOutlineFilePdf
                    className="relative z-10 w-[40px] items-end h-[40px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <span>Odpri PDF</span>
                </div>
              ) : (
                ""
              )}
              <h1 className="py-4 font-bold text-4xl	">
                Afriška prašičja kuga(APK)
              </h1>

              <h4 className="text-[12px] sm:text-[16px] text-justify">
                <div key={Data[0].key}>{Data[0].description}</div>
              </h4>
              <div className="pt-4">
                <ul className="list-disc list-inside">
                  <li className="text-xs text-gray-700 mb-2">
                    V letu 2017 je bilo v Evropi prijavljenih 4.002 pojavov APK
                    pri divjih prašičih in 265 pojavov pri domačih prašičih.
                  </li>
                  <li className="text-xs text-gray-700 mb-2">
                    V letu 2018 je bilo v Evropi prijavljenih 5.429 pojavov APK
                    pri divjih prašičih in 1.465 pojavov pri domačih prašičih.
                  </li>
                  <li className="text-xs text-gray-700 mb-2">
                    V letu 2019 je bilo v Evropi prijavljenih 6.456 pojavov APK
                    pri divjih prašičih in 1.912 pojavov pri domačih prašičih.
                  </li>
                  <li className="text-xs text-gray-700 mb-2">
                    V letu 2020 je bilo v Evropi prijavljenih 11.208 pojavov APK
                    pri divjih prašičih in 1.247 pojavov pri domačih prašičih.
                  </li>
                </ul>
              </div>

              <span className="pt-4 text-sm font-light">
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
              <div className="pt-4">
                {" "}
                <AiOutlineClose
                  className="relative z-10 w-[40px] items-end h-[40px] cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            )}
            <PdfContainer />
          </motion.div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Apk;
