"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { PageWrapper } from "../pageWrapper";
import PdfContainer from "@/components/PdfContainer";


function Info_j_z() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);

  return (
    <>
     <Navbar />
      <PageWrapper>
        <section className="relative flex flex-col md:flex-row ">
          <div
            className={`flex-start paddings min-h-screen flex  flex-row justify-center items-center  ${
              showBackgroundOverlay ? "backgroundOverlay" : ""
            } w-full`}
          >
            <div className="flex  justify-start py-4  flex-col  paddings   ">
            <h1 className="py-4 font-bold text-4xl 	">Načrt ravnanja upravljalca lovišča (APK)
</h1>

              <h4 className="text-[12px] sm:text-[18px] md:text-[15px]  text-justify">
              Lovci bodite posebej pozorni na spremembe zdravstvenega stanja v populaciji divjih prašičev. Če najdete poginulega divjega prašiča ali pri rednem odstrelu divjih prašičev opazite znake, na podlagi katerih bi lahko posumili na APK (nenavadno obnašanje divjih prašičev, neboječi, zaostajajo za tropom, ležijo…), to nemudoma javite na UVHVVR ali Center za obveščanje (112). Če imate doma prašiče, po lovu oziroma stiku z divjimi prašiči obleko in obutev zamenjajte, očistite in razkužite, prav tako si, preden pridete v stik z domačimi prašiči, temeljito umijte in razkužite roke. Z lovskega turizma ne prinašajte izdelkov (lovske trofeje, surovine in živila) z območij, kjer veljajo omejitve zaradi APK oziroma se prepričajte, da je to dovoljeno.
              </h4>
            
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
