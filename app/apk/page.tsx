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

function Apk() {
  const [showBackgroundOverlay, setShowBackgroundOverlay] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [showRest, setShowRest] = useState(false);
  const [data, setData] = useState<any[] | null>(null);

  let firstSentence, secondSentence, thirdSentence, fourthSentence;

  if (data) {
    [firstSentence, secondSentence, thirdSentence, fourthSentence] =
      data[1].Text.split(".").slice(0, 4);
  }

  return <>nothing</>;
}

export default Apk;
