"use client";
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/Ci";
import { Document, Page } from "react-pdf";
import contractPdf from "../public/LD_Pugled_Katalog_javnega.pdf";

function PdfContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }:any) {
    setNumPages(nextNumPages);
  }
  return (
    <div className="w-[100%] ">
      <div className="bg-[#0411042f] min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative z-[2]  ">
          <nav className="w-[100%] paddingNav ">
            <button className="pointer " onClick={handleClick}>
              <CiMenuBurger className="w-[40px] h-[40px]" />{" "}
            </button>
          </nav>
          <div className="h-screen w-full overflow-scroll absolute">
            <div className="absolute text-center w-[100%] h-[100%] ">
            <div>helloo</div>

            </div>
            <motion.div
              className={`bg-[#0c16078e] z-[2] relative top-0 h-[87vh] left-0 w-[40%]`}
              animate={{ x: isOpen ? "-100%" : "0%" }}
            >
              <div className="flex justify-center items-center h-screen w-full">
         
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
