import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CompanyForm from "../../../../snippets/shared/CompanyForm";
import useFetch from "../../../../utility/hooks/useFetch";

const ApplicationForm = (props) => {

  const [formdata, setFormData] = useState({companyName: '', fixedUserProfileSchema:[], extraUserProfileSchema:[]})

  const fetchForm = useFetch(null, `api/student/getCompanyApplicationForm?companyId=${props.companyId}`, "GET");

  const fetchApplicationForm = async () => {    
    const data = await fetchForm();
    setFormData(data);
  }

  useEffect(() => {
     fetchApplicationForm();
  }, [])

  return (
    <CompanyForm companyId={props.companyId} formData={formdata} role="student"/>
  )
}

export default ApplicationForm;

export async function getServerSideProps(context){
  
  return {
    props: {
      companyId: context.query.companyId
    }
  }

}