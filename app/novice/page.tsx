'use client'
import React from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";

function Novice() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="relative flex flex-col md:flex-row ">
          <div
            className={`flex-start paddings min-h-screen flex  flex-row items-center backgroundOverlay
             w-full`}
          >
            <div className="flex  justify-start py-4  flex-col  paddings   ">
              <h1 className="py-4 font-bold text-4xl 	">Novice</h1>
            </div>
          </div>
          <div className="w-[50%] relative flex items-center justify-center flex-col">
            <PdfContainer />
          </div>{" "}
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Novice;
