"use client";
import Navbar from "@/components/Navbar";
import { PageWrapper } from "./pageWrapper";
import Footer from "@/components/Footer";
import TitleNavigation from "@/components/TitleNavigation";
import AuthForm from "../components/auth-form";
import { motion, AnimatePresence } from "framer-motion";
import supabase from "@/utils/supabase";
import { useState } from "react";

const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  const [show, setShow] = useState(false);

  const toggleAuth = () => {
    setShow(!show);
  };

  return (
    <>
      <Navbar toggleAuth={toggleAuth} />
      <PageWrapper>
        <section className="min-h-screen">
          <AnimatePresence>
            {show && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                <AuthForm />
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={`transition duration-500 ease-in ${
              !show ? "opacity-100" : "opacity-0"
            }`}
          >
            {!show && <TitleNavigation />}
          </div>
        </section>
        <Footer />
      </PageWrapper>
    </>
  );
}
