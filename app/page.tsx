"use client";
import Navbar from "@/components/Navbar";
import { PageWrapper } from "./pageWrapper";
import Footer from "@/components/Footer";
import TitleNavigation from "@/components/TitleNavigation";
import AuthForm from "@/components/auth-form";
import { motion } from "framer-motion";
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
      <Navbar toggleAuth={toggleAuth} session={null} />
      <PageWrapper>
        <section className="min-h-screen">
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
        </section>
        <div
          className={`  transition duration-100 ease-in  ${
            !show ? "opacity-100" : "opacity-50"
          }`}
        >
          {!show && <TitleNavigation />}
        </div>

        <Footer />
      </PageWrapper>
    </>
  );
}
