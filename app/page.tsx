"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { PageWrapper } from "./pageWrapper";
import Footer from "@/components/Footer";
import TitleNavigation from "@/components/TitleNavigation";
import AuthForm from "./auth-form";
import supabase from "@/utils/supabase";
import { useEffect } from "react";
export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <AuthForm />
        <TitleNavigation />
        <Footer />
      </PageWrapper>
    </>
  );
}
