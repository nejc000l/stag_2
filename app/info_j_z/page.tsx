" @client ";
"use client";
import { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tab } from "@headlessui/react";
import PdfContainer from "@/components/PdfContainer";

function Info_j_z() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="relative flex flex-col md:flex-row">
          <div
            className={`flex-start paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
          >
            <div className="flex  justify-start py-4  flex-col paddings  ">
              <h1 className="py-4 font-bold text-4xl 	">
                Infomarcije Javnega značaja
              </h1>

              <h4 className="text-[12px] sm:text-[16px] text-justify">
                Lovska družina Pugled mora v skladu z določili Zakona o dostopu
                do informacij javnega značaja vsakomur omogočiti dostop do
                informacije javnega značaja in ponovno uporabo informacij
                javnega značaja, le v tistem delu, v katerem se te nanašajo na
                področje izvajanja javne službe oz. javnega pooblastila lovske
                družine, to je na sodelovanje pri izvajanju ukrepov
                preventivnega zdravstvenega varstva divjadi in dostavljanja
                poginule divjadi v veterinarski pregled, sodelovanja pri
                znanstveno-raziskovalnem delu v zvezi z divjadjo in lovstvom ter
                na področje trajnostnega gospodarjenja z divjadjo.
              </h4>
              <span className="pt-4 text-sm font-light">
                Spremenjeno: 19.04.2022 ob 16.08
              </span>
            </div>
          </div>
          <div className="w-[50%] relative flex items-center justify-center flex-col">
            <PdfContainer/>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Info_j_z;
