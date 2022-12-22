import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import CompanyForm from "../../../../snippets/shared/CompanyForm";
import useFetch from "../../../../utility/hooks/useFetch";

const ApplicationForm = (props) => {

  const [formdata, setFormData] = useState({companyName: '', fixedUserProfileSchema:[], extraUserProfileSchema:[], userData: {}})
  const [formResponse, setFormResponse] = useState({});

  const fetchForm = useFetch(null, `api/student/getCompanyApplicationForm?companyId=${props.companyId}`, "GET");

  const fetchApplicationForm = async () => {    
    const data = await fetchForm();
    setFormData(data);
    const dataObj = {"companyId": props.companyId}
    data.fixedUserProfileSchema.forEach(key => {
      dataObj[key] = data.userData[key] ?? 'not found' 
    });
    setFormResponse(dataObj)
  }

  useEffect(() => {
     fetchApplicationForm();
  }, [])

  return (
    <CompanyForm companyId={props.companyId} formResponse={formResponse} setFormResponse={setFormResponse} formData={formdata} role="student"/>
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