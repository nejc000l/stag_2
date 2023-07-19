"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import PdfContainer from "@/components/PdfContainer";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/Ai";
import { motion } from "framer-motion";

function Info_j_z() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="relative flex flex-col md:flex-row z-[4] min-h-screen ">
          <div
            className={`flex-start paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
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

export default Info_j_z;
