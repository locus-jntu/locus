import { FormatShapes } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { PassThrough } from "stream";
import Checkbox from "../../components/Checkbox";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import LButton from "../../components/LButton";
import Nav from "../../components/Nav";
import Radio from "../../components/Radio";
import Sidebar from "../../components/Sidebar";
import { getComponent } from "../../utility/company-data/fixed";
import useFetch from "../../utility/hooks/useFetch";
import MultipleSelect from "../../components/Multiselect";
import SecureLS from "secure-ls";


interface formProps {
  formData?: any
  role: string
  companyId: string
  formResponse: any
  setFormResponse: any
}

const CompanyForm = (props: formProps) => {

  const saveResponseFunction = useFetch(props.formResponse, 'api/student/submitCompanyApplicationForm', 'POST');
  
  
  const [loading, setLoading] = useState(false);
  const getFieldsFunction = useFetch(null, "api/shared/fetchProfileSchema", "GET");

  const [inputfieldData, setInputfieldData] = useState([])
  const [fixedInputResponses, setfixedInputResponsesData] = useState();


  async function getProfileSchema(){
    setLoading(true)
    const data = await getFieldsFunction();
    setInputfieldData(data)
    setLoading(false)
  }

  useEffect(() => {
    
    getProfileSchema();
    console.log(props.formData.fixedUserProfileSchema);
    
  }, [])

  const inputRef = useRef([])
  inputRef.current = []

  function addRefs(el){
    if(el && !inputRef.current.includes(el)){
      inputRef.current.push(el)
    }
  }
  

  async function saveResponse() {    
     console.log(props.formResponse);
     console.log("fixedIR ",fixedInputResponses);
     
    try{
      var ls = new SecureLS({encodingType: 'aes', isCompression: false})
      const jwt = ls.get("jwt");

      const headers = jwt ? {   
        "Content-Type": "application/json",
        "Authorization": "Bearer " + jwt,
      } : {
        "Content-Type": "application/json"
      };

      const payload = {
        companyId: props.formResponse.companyId,
        userApplicationData: {
          fixedUserProfileSchema: fixedInputResponses,
          extraUserProfileSchema: props.formResponse.extraUserProfileSchema
        }
      }      

      const data = await fetch(`http://localhost:8080/api/student/submitCompanyApplicationForm`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
       const response = await data.json();
       if(response) console.log("success")
       else console.log("unsuccessful")
    }catch(e) {
      console.log("err", e);
      
    }
  }

  function onChangeOptionals(e, val){
     props.setFormResponse({...props.formResponse, extraUserProfileSchema: {...props.formResponse.extraUserProfileSchema, [val]: e.target.value}})
  }

  const handleChange = (e, name) => {
    
    const value = e.target.value;
    props.setFormResponse(prev => {
      return {
        ...prev,
        'extraUserProfileSchema': {
          ...prev.extraUserProfileSchema,
          [name]: value
        }
      }
    })
  };

  return (
    <Layout role={props.role} component="companies">
      <div
        style={{
          marginTop: 32,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          borderTopWidth: 2,
          borderColor: "#264653",
        }}
        className="bg-white p-8"
      >
        <p className="text-xl text-center mb-4 font-bold">{props.formData.companyName} : application form</p>
        <div style={{width: '65%', margin: 'auto'}} className="border-2 rounded p-2">

          <p className="text-sm mb-2 text-center  text-secondary font-bold p-2 rounded underline underline-offset-4">EXISTING</p>
          {
            loading ? <p>loading...</p> : 
            props.formData.fixedUserProfileSchema?.map(i => getComponent(i,props.formData.userData,inputfieldData,addRefs,inputRef,setfixedInputResponsesData))
          }
          
          <p className="text-sm text-center text-secondary font-bold rounded p-2 underline underline-offset-4">NEW</p>
          {
            props.formData.extraUserProfileSchema?.map(i => {
              const val = i.name
              const opt = props.formResponse.extraUserProfileSchema
              return (
              <div className="w-full">
              { i.type == 'radio' ? <Radio value={opt[val]} onChange={e => onChangeOptionals(e,val)} row={true} label={i.name} values={i.values.split(",")} /> :
                i.type == 'checkbox' ? <MultipleSelect values={i.values.split(",")} val={opt[val]} onChange={e => handleChange(e,val)} name={i.name} fullWidth={true} label={i.name}  /> :
              <Input onChange={e => onChangeOptionals(e,val)} value={opt[val]} containerStyle={{width: '100%'}} name={i.name ?? ''} label={i.name} />
              }
            </div> )
             }
            )
          } 
          <LButton style={{margin: 4}} onClick={saveResponse} width="100%" name="Apply" />
        </div>
        
      </div>
    </Layout>
  );
};

export default CompanyForm;
