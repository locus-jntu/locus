import { ButtonGroup, Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import lightTheme from "../styles/theme/lightTheme"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRecoilValue } from "recoil"
import { jwtTokenAtom } from "../recoil/atoms"
import Footer from "../components/Footer"
import ShortCompanyCard from "../components/company-cards/shortCompanyCard"
import ShortAnnouncement from "../components/announcements/shortAnnouncement"
import Link from "next/link"
import { data as companyData } from "../components/company-cards/data";

const Home = () => {
  const data = {
    name: "Taduri saimahesh",
    rollNumber: "19011p0525",
    department: "CSE-IDP",
    total: 60,
    applied: 26,
    ongoing: 13
  }

  const jwtToken = useRecoilValue(jwtTokenAtom);

  console.log("index jwt : ", jwtToken);

  
  const [stats, setStats] = useState({total: 0, applied: 0, ongoing: 0})

  useEffect(() => {

  }, []);
  

  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="dashboard" />

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='student' />
          <div className="flex relative">
            <div className="hidden md:block h-96 p-16">
              <p className="text-xl md:text-4xl font-semibold mb-4">Browse. Apply.</p>
              <p className="text-xl md:text-4xl font-semibold mb-8">Prepare Your Future.</p>
              <p className="text-xl md:text-xl font-bold">w/ <span style={{textDecorationColor: lightTheme.palette.primary.main}} className="ml-4 pb-1 text-secondary cursor-pointer border-b-2 border-rose-900">LOCUS</span></p>
            </div>
            <img className="hidden md:block absolute left-36 lg:left-52 bottom-0" style={{ transform: 'scale(0.8)'}} src="./up-curve.png" />
            <div className="flex-grow flex flex-col pr-4 md:pr-8 lg:pr-12 mt-8 md:mt-0 md:items-end md:justify-end">
              <div className="mb-12 flex flex-col items-end font-bold font-josefin text-3xl">
                <p className="mb-2 text-sm font-medium underline tracking-wider"> COMPANIES </p>
                <p className="mb-2"> <span className="text-sm font-medium pr-2">TOTAL - </span> {data.total} </p>
                <p className="mb-2"> <span className="text-sm font-medium pr-2">APPLIED - </span> {data.applied} </p>
                <p><span className="text-sm font-medium pr-2">ONGOING - </span> {data.ongoing} </p>
              </div>
              <p className="font-bold text-lg mb-6 border-b-2 lg:text-2xl border-rose-900">Good morning !</p>
              <p className="font-bold text-2xl uppercase mb-1">{data.name}</p>
              <p className="tracking-wider mb-2 "><span className="mr-2">{data.rollNumber}</span> | <span className="ml-2">{data.department}</span></p>
            </div>
          </div>
          <Link href="/companies">
            <p className="text-center my-24 text-xl hover:underline underline-offset-4 cursor-pointer"> Apply for your dream companies &nbsp;&nbsp;&nbsp;<span className="text-3xl"> &rarr; </span> </p> 
          </Link>

       <div className="m-12 mx-8">
         <div className="flex justify-between">
           <p className="py-4 px-8 font-comforta text-2xl font-bold">Reminders !</p>
           <div className="py-4 px-8">
             <ButtonGroup size="small" variant="outlined" >
                <Button>Total</Button>
                <Button>Applied</Button>
                <Button>Ongoing</Button>
              </ButtonGroup>
           </div>
         </div>
         <div className="py-2 px-2 bg-white h-96 rounded-lg shadow-2xl">
           <p className="text-right font-gray-400 mb-2"><span className="bg-primary text-white rounded py-1 text-sm px-4"> Total </span></p>
           {
             companyData.map(item => <ShortCompanyCard data={item} />)
           }
         </div>
       </div>

       <div className="m-12 mx-8">
         <div className="flex justify-between">
           <p className="py-4 px-8 font-comforta text-2xl font-bold">Announcements !</p>
           <p className="pr-8 pt-8 hover:underline underline-offset-4">show all <span>&nbsp;&nbsp;&nbsp;&rarr;</span></p>
         </div>
         <div className="bg-white w-full h-96 rounded-lg shadow-2xl p-4">
              <ShortAnnouncement />
              <ShortAnnouncement />
              <ShortAnnouncement />
         </div>
       </div>

       <Footer />


      </div>
    </div>
  )
}

export default Home
