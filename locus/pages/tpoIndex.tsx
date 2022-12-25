import { ButtonGroup, Button, Fab } from "@mui/material"
import React, { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import lightTheme from "../styles/theme/lightTheme"
import { useRecoilValue } from "recoil"
import { jwtTokenAtom } from "../recoil/atoms"
import ShortCompanyCard from "../components/company-cards/shortCompanyCard"
import ShortAnnouncement from "../components/announcements/shortAnnouncement"
import Footer from "../components/Footer"
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import { data as companyData }  from "../components/company-cards/data";

const TpoHome = () => {
  const data = {
    name: "Bhramara",
    rollNumber: "19011p0525",
    department: "CSE-IDP",
    total: 60,
    applied: 26,
    ongoing: 13,
    designation: "TPO",
  }

  useEffect(() => {

  }, []);
  

  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="dashboard" />

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='tpo' />
          <div className="flex relative">
            <div className="hidden md:block h-96 p-16">
              <p className="text-xl md:text-4xl font-semibold mb-4">Organise. Track.</p>
              <p className="text-xl md:text-4xl font-semibold mb-4">Fasten your tasks. </p>
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
              <p className="tracking-wider mb-2 "><span className="mr-2">{data.designation}</span> | <span className="ml-2">JNTUH-UCEH</span></p>
            </div>
          </div>
          <p className="text-center my-24 text-xl hover:underline underline-offset-4 cursor-pointer"> Add a new company  &nbsp;&nbsp;&nbsp;<span className="text-3xl"> &rarr; </span> </p> 

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
         <div className="py-2 px-2 bg-white h-96 rounded-lg shadow-2xl overflow-auto">
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
         <div className="flex flex-col justify-end items-end bg-white h-96 rounded-lg shadow-2xl overflow-auto">
            <div className="flex-1 w-full p-4 rounded-lg">
              {

              }
              <ShortAnnouncement />
              <ShortAnnouncement />
              <ShortAnnouncement />
            </div>
            <Button
                // onClick={}
                className="flex self-end m-2 rounded py-1 px-6 bg-secondary text-white hover:text-white"
                sx={{
                boxShadow: "none",
                color: lightTheme.palette.secondary.main,
                }}
                color="secondary"
                variant="contained"
            >
              Add 
            </Button>
         </div>
       </div>

       <Footer />


      </div>
    </div>
  )
}

export default TpoHome
