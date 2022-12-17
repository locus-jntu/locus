import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Company from "../../../../snippets/shared/Company";
import useFetch from "../../../../utility/hooks/useFetch";

const CompanyDetails = (props) => {

  console.log(props);

  const [companyData, setCompanyData] = useState({companyDetails: {}});

  const fetchCompanyDetails = useFetch(null, `api/student/getCompanyDetails?companyId=${props.companyId}`, "GET");

  const fetchDetails = async () => {
    const data = await fetchCompanyDetails();
    setCompanyData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <Company role="student" companyData={companyData}/>
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

