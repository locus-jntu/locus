import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Accordian from "../../components/Accordian";
import Layout from "../../components/Layout";
import LButton from "../../components/LButton";

interface companyProps {
  companyData: any
  role: string
}

const Company = (props: companyProps) => {
  
  const data = {
    pastdata: [
      {
        year: '2022',
        depts: [
          {
             dept: 'cse',
             data: [
              {
                rollnumber: '19011P0525',
                name: 'mahesh',
                linkedIn: 'linkedin/mahesh'
              },
              {
                rollnumber: '19011P0512',
                name: 'hrushi',
                linkedIn: 'linkedin/hrushi'
              },
             ]
          },
        ]
      },
      {
        year: '2021',
        depts: [
          {
             dept: 'cse',
             data: [
              {
                rollnumber: '19011P0525',
                name: 'mahesh',
                linkedIn: 'linkedin/mahesh'
              },
              {
                rollnumber: '19011P0512',
                name: 'hrushi',
                linkedIn: 'linkedin/hrushi'
              },
             ]
          },
        ]
      }
    ]
  }
 
  return (
    <Layout role={props.role} component='companies'>
        <div style={{marginTop: 32, borderTopLeftRadius: 28, borderTopRightRadius: 28, borderTopWidth: 2, borderColor: '#264653'}} className="bg-white p-8">
          <p className="text-2xl font-bold">{props.companyData.companyDetails.name}</p>
          <div className="flex mb-8">
            <div style={{width: '100%'}}>
              <p className="mt-4 mb-4 text-base font-medium text-secondary">
               <span className="md:pr-4 block md:inline">{props.companyData.companyDetails.role}</span>
               <span className="md:px-4 block md:inline">{props.companyData.companyDetails.jobOfferType}</span>
               <span className="md:pl-4 block md:inline">{props.companyData.companyDetails.ctc}</span>
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

          {
            props.role=='tpo' ?
            <Link  href={`/tpo/companies/add?editcid=${props.companyData.companyDetails.id}`}>
              <LButton style={{width: '100%'}} name="edit application form" />
            </Link> : 
            <Link  href={`/student/companies/${props.companyData.companyDetails.id}/apply`}>
              <LButton style={{width: '100%'}} name="view application form"/>
            </Link>
          }

          <p className="text-sm underline underline-offset-4 mb-2 mt-8 font-semibold text-gray-400">
            Past Alumni Details :{" "}
          </p> 

          <Accordian data={data.pastdata} />

        </div>
    </Layout>
  )
}

export default Company;
