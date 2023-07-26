"use client";
import { useEffect, useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import PdfContainer from "@/components/PdfContainer";
import { motion } from "framer-motion";

import { format } from "date-fns";
function Info_j_z() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? <Navbar /> : null}

      <PageWrapper>
        <section className=" relative  flex flex-col z-[4]  top-0 h-[100%] ">
          <div
            className={`paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
          >
            <div className="flex  justify-start py-4 h-ful flex-col  mr-[10%] ml-[10%]  md:mr-[15%] md:ml-[15%]  ">
              {isOpen === true ? (
                <div>
                  <BsFileEarmarkPdf
                    className="relative z-10 w-[40px] items-end h-[40px] md:w-[40px] md:h-[40px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <span className="text-sm"> Odpri PDF</span>
                </div>
              ) : (
                ""
              )}

              <h1 className="py-4 font-bold text-2xl md:text-4xl"></h1>
              <h4 className="text-[9px] md:text-[16px] m-[10px] flex-wrap break-normal text-justify"></h4>
              <span className="pt-4 text-[9px] md:text-[12px] font-light"></span>
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
                <MdClose
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
export default Info_j_z;
