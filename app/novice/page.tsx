"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import PdfContainer from "@/components/PdfContainer";
import {BsFileEarmarkPdf } from "react-icons/bs";
import {MdClose} from "react-icons/md";
import { motion } from "framer-motion";

function Info_j_z() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? <Navbar /> : null}

      <PageWrapper>
        <section className="relative flex flex-col md:flex-row z-[4] overflow-scroll">
          <div
            className={`flex-start paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
          >
            <div className="flex  justify-start py-4  flex-col  mr-[15%] ml-[15%]  ">
              {isOpen === true ? (
                <div>
                  <BsFileEarmarkPdf
                    className="relative z-10 w-[40px] items-end h-[40px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <span>Odpri PDF</span>
                </div>
              ) : (
                ""
              )}
              <h1 className="py-4 font-bold text-4xl 	">Novice</h1>
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
                <MdClose
                  className="relative z-10 w-[40px] items-end h-auto  cursor-pointer"
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

export default Info_j_z;
