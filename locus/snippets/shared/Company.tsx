import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import LButton from "../../components/LButton";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

interface companyProps {
  cid: string
  role: string
}

const Company = (props: companyProps) => {

  const data = {
    name : 'Goldman Sachs',
    role : 'SDE',
    jobOfferType: 'Internship',
    ctc: '1L/mon'
  }
 
  return (
    <Layout role={props.role} component='companies'>
        <div style={{marginTop: 32, borderTopLeftRadius: 28, borderTopRightRadius: 28, borderTopWidth: 2, borderColor: '#264653'}} className="bg-white p-8">
          <p className="text-2xl font-bold">{data.name}</p>
          <div className="flex mb-8">
            <div style={{width: '100%'}}>
              <p className="mt-4 mb-4 text-base font-medium text-secondary">
               <span className="md:pr-4 block md:inline">{data.role}</span>
               <span className="md:px-4 block md:inline">{data.jobOfferType}</span>
               <span className="md:pl-4 block md:inline">{data.ctc}</span>
              </p>
              <p className="text-sm underline underline-offset-4 mb-2 font-semibold text-gray-400">
                Eligibility :{" "}
              </p> 
              <p>No backlogs, 8 GPA</p>

              <p className="text-sm underline underline-offset-4 mt-4 mb-2 font-semibold text-gray-400">
                Description :
              </p> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis a eos nobis optio perspiciatis praesentium modi cumque, nihil impedit ipsum cupiditate, placeat obcaecati! Soluta quo praesentium doloribus nulla ducimus.</p>
             </div>
             <div className="border-gray-800 border-2 w-1/2 ml-4">
               status comes here
             </div>
          </div>
          <Link  href={`/${props.role}/companies/add?editcid=${props.cid}`}>
            <LButton style={{width: '100%'}} name={props.role=='tpo' ? "edit application form" : "view application form"} />
          </Link>

          <p className="text-sm underline underline-offset-4 mb-2 mt-8 font-semibold text-gray-400">
            Past Alumni Details :{" "}
          </p> 

        </div>
    </Layout>
  )
}

export default Company;