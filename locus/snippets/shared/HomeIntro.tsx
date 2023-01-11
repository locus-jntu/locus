import Link from "next/link";
import { useEffect, useState } from "react";
import lightTheme from "../../styles/theme/lightTheme";
import useFetch from "../../utility/hooks/useFetch";

interface HomeIntroProps {
    role: string
}

const HomeIntro = (props: HomeIntroProps) => {

  const getUserDataFunction = useFetch(null, `api/student/fetchProfileData`, "GET");

  const [userData, setUserData] = useState();

  const getUserData = async () => {
    const uData = await getUserDataFunction();
    setUserData(uData);  
  }

  useEffect(() => {
    props.role=='student' && getUserData();
  },[])

 const data = {
    total: 60,
    applied: 26,
    ongoing: 13
 }
 
 const name = props.role=='tpo' ? "Dr. PADMAVATI" : props.role=='student' && userData ? `${userData.first_name} ${userData.last_name}` : '...' 
 const department = props.role=='tpo' ? "JNTUHUCEST" : props.role=='student' && userData ? `${userData.department}` : '...' 
 const rollNumber = props.role=='tpo' ? "TPO" : props.role=='student' && userData ? `${userData.roll_number}` : '...' 


 return (
    <>
    <div className="flex relative">

      {props.role === "student" ? 
        <div className="hidden md:block h-96 p-16">
            <p className="text-xl md:text-4xl font-semibold mb-4">Browse. Apply.</p>
            <p className="text-xl md:text-4xl font-semibold mb-8">Prepare Your Future.</p>
            <p className="text-xl md:text-xl font-bold">w/ <span style={{textDecorationColor: lightTheme.palette.primary.main}} className="ml-4 pb-1 text-secondary cursor-pointer border-b-2 border-rose-900">LOCUS</span></p>
        </div> : 

        <div className="hidden md:block h-96 p-16">
            <p className="text-xl md:text-4xl font-semibold mb-4">Organise. Track.</p>
            <p className="text-xl md:text-4xl font-semibold mb-8">Fasten your tasks.</p>
            <p className="text-xl md:text-xl font-bold">w/ <span style={{textDecorationColor: lightTheme.palette.primary.main}} className="ml-4 pb-1 text-secondary cursor-pointer border-b-2 border-rose-900">LOCUS</span></p>
        </div>
      }

        <img className="hidden md:block absolute left-36 lg:left-52 bottom-0" style={{ transform: 'scale(0.8)'}} src="./up-curve.png" />
        <div className="flex-grow flex flex-col pr-4 md:pr-8 lg:pr-12 mt-8 md:mt-0 md:items-end md:justify-end">
            <div className="mb-12 flex flex-col items-end font-bold font-josefin text-3xl">
            <p className="mb-2 text-sm font-medium underline tracking-wider"> COMPANIES </p>
            <p className="mb-2"> <span className="text-sm font-medium pr-2">TOTAL - </span> {data.total} </p>
            <p className="mb-2"> <span className="text-sm font-medium pr-2">APPLIED - </span> {data.applied} </p>
            <p><span className="text-sm font-medium pr-2">ONGOING - </span> {data.ongoing} </p>
            </div>
            <p className="font-bold text-lg mb-6 border-b-2 lg:text-2xl border-rose-900">Good morning !</p>
            <p className="font-bold text-2xl uppercase mb-1">{name}</p>
            <p className="tracking-wider mb-2 "><span className="mr-2">{rollNumber}</span> | <span className="ml-2">{department}</span></p>
        </div>
    </div>  
    
    <Link href={props.role==="student" ? `/${props.role}/companies` : `/${props.role}/companies/add`}>
        <p className="text-center my-24 text-xl hover:underline underline-offset-4 cursor-pointer"> {props.role==="student" ? `Apply for your dream companies` : `Add a new company`} &nbsp;&nbsp;&nbsp;<span className="text-3xl"> &rarr; </span> </p> 
    </Link>
    </>
  )
}

export default HomeIntro;
