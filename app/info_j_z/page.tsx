import { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tab } from "@headlessui/react";
import {Data} from '@/constants/data';
import { CiMenuBurger } from "react-icons/Ci";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/Ai";
import PdfContainer from "@/components/PdfContainer";
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
            className={`paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
          >
            <div className="flex cursor-pointer py-4  flex-col paddings mr-[15%] ml-[15%] ">
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

              <h1 className="py-4 font-bold text-4xl 	">
                Infomarcije Javnega značaja
              </h1>
              <h4 className="text-[12px] sm:text-[16px] text-justify ">
              <div key={Data[1].key}>{Data[1].description}</div>
              </h4>
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

export default Info_j_z;
