"use client";
import React, { useEffect, useState } from "react";
import { PageWrapper } from "../pageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfContainer from "@/components/PdfContainer";
import { Disclosure, Transition } from "@headlessui/react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Harmonica from "@/components/Harmonica";
import { format } from "date-fns";

import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
export type Props = {
  params: { id: string };
};

export interface UpdatePagesParams {
  title: any;
  href: string | null;
  text: any;
  avatar: any;
}

export default function Page({ params }: Props) {
  const supabase = createClientComponentClient<Database>();
  const [page, setPage] = useState<UpdatePagesParams | null>(null);
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [showRest, setShowRest] = useState(false);
  const [data, setData] = useState<any[] | null>(null);

  let firstSentence, secondSentence, thirdSentence, fourthSentence;

  if (page) {
    [firstSentence, secondSentence, thirdSentence, fourthSentence] = page.text
      .split(".")
      .slice(0, 4);
  }

  useEffect(() => {
    async function fetchPage() {
      const { data, error } = await supabase
        .from("pages")
        .select("*")
        .eq("href, title, text, avatar", params.id)
        .single();
      if (error) {
        console.error(error);
      } else {
        setPage(data);
      }
    }

    fetchPage();
    if (page) {
      console.log(page.avatar);
    }
  }, [params.id]);

  return (
    <div className="brake-all">
      {page ? (
        <>
          {isOpen ? (
            <Navbar
              toggleAuth={function (): void {
                throw new Error("Function not implemented.");
              }}
              session={null}
            />
          ) : null}

          <PageWrapper>
            <section className=" relative  flex flex-col z-[4]  top-0 h-[100%] ">
              <div
                className={`flex-start  flex flex-col justify-center w-[100%] ${
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
                    <div>{page.title}</div>
                  </h1>
                  <h4 className="text-[9px] md:text-[16px] m-[10px] flex-wrap break-normal text-justify">
                    <div>
                      {page && (
                        <div>
                          {firstSentence}.{secondSentence}.{thirdSentence}.
                          {fourthSentence}.
                          {showRest &&
                            page &&
                            page.text.slice(
                              firstSentence.length + secondSentence?.length + 4
                            )}
                        </div>
                      )}
                      <span
                        onClick={() => setShowRest(!showRest)}
                        className="text-[#3f8629d3] font-bold cursor-pointer"
                      >
                        {showRest ? (
                          <span className="text-[9px] md:text-lg">
                            Pokaži manj
                          </span>
                        ) : (
                          <span className="text-[9px] md:text-lg">
                            {" "}
                            Pokaži več
                          </span>
                        )}
                      </span>
                    </div>
                  </h4>
                  <div className=" relative flex text-center justify-center flex-col ">
                    <Harmonica />
                  </div>

                  <span className="pt-4 text-[9px] md:text-[12px] font-light">
                    Objavljeno:{" "}
                    {data && (
                      <>
                        {format(
                          new Date(data[1].created_at),
                          "  kk:mm dd/M/yyy"
                        )}
                      </>
                    )}
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
                <PdfContainer page={page} />
              </motion.div>
            </section>
            <Footer />
          </PageWrapper>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
