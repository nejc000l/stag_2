"use client";

import React, { useEffect, useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";
import { Disclosure, Transition } from "@headlessui/react";
import { getData } from "../server-renderd/page";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Harmonica from "@/components/Harmonica";
import { format } from 'date-fns';

function Apk() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [showRest, setShowRest] = useState(false);
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      let result = await getData();
      setData(result);
  result.map((item: any) => console.log(item));
    }
    fetchData();
  }, []);

  let firstSentence, secondSentence, thirdSentence, fourthSentence;

  if (data) {
    [firstSentence, secondSentence, thirdSentence, fourthSentence] =
      data[1].Text.split(".").slice(0, 4);
  }

  return (
    <>
      {isOpen ? <Navbar /> : null}

      <PageWrapper>
        <section className=" relative  flex flex-col z-[4]  top-0 h-[100%] ">
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
              <h1 className="py-4 font-bold text-2xl md:text-4xl">
                {data && <div>{data[1].Title}</div>}
              </h1>
              <h4 className="text-[9px] md:text-[16px] m-[10px] flex-wrap break-normal text-justify">
                <div>
                  {data && (
                    <div key={data[1].key}>
                      {firstSentence}.{secondSentence}.{thirdSentence}.
                      {fourthSentence}.
                      {showRest &&
                        data[1].Text.slice(
                          firstSentence.length + secondSentence.length + 4
                        )}
                    </div>
                  )}
                  <span
                    onClick={() => setShowRest(!showRest)}
                    className="text-[#3f8629d3] font-bold cursor-pointer"
                  >
                    {showRest ? (
                      <span className="text-[9px] md:text-lg">Pokaži manj</span>
                    ) : (
                      <span className="text-[9px] md:text-lg"> Pokaži več</span>
                    )}
                  </span>
                </div>
              </h4>
              <div className=" relative flex text-center justify-center flex-col ">
                <Harmonica />
              </div>

              <span className="pt-4 text-[9px] md:text-[12px] font-light">
                Objavljeno: {data && <>{format(new Date(data[1].created_at), "  kk:mm dd/M/yyy")}</>}
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
