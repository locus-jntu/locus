import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import NoAccess from "../../snippets/shared/NoAccess"
import HomeIntro from "../../snippets/shared/HomeIntro"
import CompaniesSM from "../../snippets/shared/Companies-sm"
import AnnouncementsSM from "../../snippets/shared/Announcements-sm"

interface HomeProps {
   roleName: string
}

const Home = (props: HomeProps) => {
 
  const router = useRouter();

  const [role, setRole] = useState('');

  useEffect(() => {
    if(localStorage.getItem("jwt")){
        setRole(localStorage.getItem("role"));
    }else{
      router.push('/login');
    }
  }, []);
  

  return (
    <>
      {
        role!= props.roleName ? <NoAccess />
       :
       <Layout component="dashboard">
          <HomeIntro role={role}/>
          <CompaniesSM />
          <AnnouncementsSM role={role} />
        </Layout>
      }
    </>
  )
}

export default Home
