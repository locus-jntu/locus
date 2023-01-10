import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import CompanyForm from "../../../../snippets/shared/CompanyForm";
import useFetch from "../../../../utility/hooks/useFetch";

const ApplicationForm = (props) => {

  const [formdata, setFormData] = useState({companyName: '', fixedUserProfileSchema:[], extraUserProfileSchema:[], userData: {}})
  const [formResponse, setFormResponse] = useState({});

  const [loading, setLoading] = useState(false)

  const fetchForm = useFetch(null, `api/student/getCompanyApplicationForm?companyId=${props.companyId}`, "GET");

  const fetchApplicationForm = async () => { 
    setLoading(true)   
    const data = await fetchForm();
    setFormData(data);
    const dataObj = {"companyId": props.companyId, "fixedUserProfileSchema": {}, "extraUserProfileSchema": {}};
    data.fixedUserProfileSchema?.forEach(key => {
      dataObj["fixedUserProfileSchema"][key] = data.userData[key.split(" ").join("_")]??'not found'
    });
    
    data.extraUserProfileSchema?.forEach(key => {
      if(key.type == 'checkbox') dataObj["extraUserProfileSchema"][key.name] = data.userData[key] ?? []
      else dataObj["extraUserProfileSchema"][key.name] = data.userData[key]??'not found'
    });
    setFormResponse(dataObj)
    setLoading(false)
  }

  useEffect(() => {
     fetchApplicationForm();
  }, [])

  return (
    <>
    {
      loading ? <p>Loading.. </p> :
         <CompanyForm companyId={props.companyId} formResponse={formResponse} setFormResponse={setFormResponse} formData={formdata} role="student"/>
    }
    </>
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