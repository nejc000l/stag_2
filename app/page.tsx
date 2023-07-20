import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { PageWrapper } from './pageWrapper'
import Footer from '@/components/Footer'
import TitleNavigation from '@/components/TitleNavigation'

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
       <TitleNavigation/>
       <Footer/>
      </PageWrapper>
    </>
  )
}
