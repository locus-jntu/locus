import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Company from "../../../snippets/shared/Company";
import useFetch from "../../../utility/hooks/useFetch";

const CompanyDetails = (props) => {

  const [companyData, setCompanyData] = useState({companyDetails: {}});
  const [studentResponsesData, setStudentResponsesData] = useState();

  const studentResponseFormFunction = useFetch(null, `api/admin/getAllStudentsApplicationForCompany?companyId=${props.companyId}`, "GET");

  const fetchCompanyDetails = useFetch(null, `api/shared/getCompanyDetails?companyId=${props.companyId}`, "GET");

  const fetchDetails = async () => {
    const data = await fetchCompanyDetails();
    setCompanyData(data);
    console.log(data);
  }

  async function getStudentResponseForm(){
     const data = await studentResponseFormFunction();
     setStudentResponsesData(data)
  }

  useEffect(() => {
    fetchDetails()
    getStudentResponseForm();
  }, [])

  return (
    <Company role="tpo" studentResponsesData={studentResponsesData} companyData={companyData}/>
  )
}

export default CompanyDetails;

export async function getServerSideProps(context){
  
  return {
    props: {
      companyId: context.query.companyId
    }
  }

}

