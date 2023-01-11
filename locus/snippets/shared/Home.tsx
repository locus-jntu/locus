import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import NoAccess from "../../snippets/shared/NoAccess"
import HomeIntro from "../../snippets/shared/HomeIntro"
import CompaniesSM from "../../snippets/shared/Companies-sm"
import AnnouncementsSM from "../../snippets/shared/Announcements-sm"
import LButton from "../../components/LButton"
import useFetch from "../../utility/hooks/useFetch"

interface HomeProps {
   role: string
}

const Home = (props: HomeProps) => {

  const payload = {
    newStudents: [
      {
        mail_id: "test@gmail.com",
        roll_number: "19011P0525"
      },
      {
        mail_id: "test2@gmail.com",
        roll_number: "19011P0512"
      },
      {
        mail_id: "tes32t@gmail.com",
        roll_number: "19011P0506"
      },

    ]
  }

  const registerStudentsFunction = useFetch(payload, `api/tpo/registerNewStudents`, "POST");

  const registerStudents = async () => {
    const resp = await registerStudentsFunction();
    console.log("resgitering response: ", resp);
  }

  return (
       <Layout role={props.role} component="dashboard">
          <HomeIntro role={props.role}/>
          <CompaniesSM />
          <AnnouncementsSM role={props.role} />
          {
            props.role=='tpo' && 
             <div className="w-full flex justify-end p-8">
                 <LButton width={200} onClick={registerStudents} name="Register New Students" />
             </div>
          }
        </Layout>
  )
}

export default Home
