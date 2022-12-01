import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import NoAccess from "../../snippets/shared/NoAccess"
import HomeIntro from "../../snippets/shared/HomeIntro"
import CompaniesSM from "../../snippets/shared/Companies-sm"
import AnnouncementsSM from "../../snippets/shared/Announcements-sm"

interface HomeProps {
   role: string
}

const Home = (props: HomeProps) => {

  return (
       <Layout role={props.role} component="dashboard">
          <HomeIntro role={props.role}/>
          <CompaniesSM />
          <AnnouncementsSM role={props.role} />
        </Layout>
  )
}

export default Home
