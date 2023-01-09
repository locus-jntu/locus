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


interface formProps {
  formData?: any
  role: string
  companyId: string
  formResponse: any
  setFormResponse: any
}

const CompanyForm = (props: formProps) => {

  const saveResponseFunction = useFetch(props.formResponse, 'api/student/submitCompanyApplicationForm', 'POST');

  const getFieldsFunction = useFetch(null, "api/shared/fetchProfileSchema", "GET");

  const [inputfieldData, setInputfieldData] = useState([])
  const [fixedInputResponses, setfixedInputResponsesData] = useState();


  async function getProfileSchema(){
    const data = await getFieldsFunction();
    setInputfieldData(data)
  }

  useEffect(() => {
    
    getProfileSchema();
    console.log(props.formData.fixedUserProfileSchema);
    
    //autofilling should also be done
  }, [])

  const inputRef = useRef([])
  inputRef.current = []

  function addRefs(el){
    if(el && !inputRef.current.includes(el)){
      inputRef.current.push(el)
    }
  }

  useEffect(() => {
    inputRef?.current.map(i => {
      if(i.id == 'combo-box-demo'){
        setfixedInputResponsesData(prev => {
          return {...prev, [i.name]: i.value }
        })
      }
      else setfixedInputResponsesData(prev => {
        return {...prev, [i.id]: i.value}
      })
    })

    props.setFormResponse(prev => {
      return {
        ...prev, 
        fixedUserProfileSchema: fixedInputResponses
      }
    })
  }, [inputRef])
  

  async function saveResponse() {    
     console.log(props.formResponse);
         
     const data = await saveResponseFunction()
     if(data){
       console.log("successfull");
     }else {
       console.log("error while updating the response");
     }

  }

  function onChangeOptionals(e, val){
     props.setFormResponse({...props.formResponse, extraUserProfileSchema: {...props.formResponse.extraUserProfileSchema, [val]: e.target.value}})
  }

  const handleChange = (e, name) => {
    console.log(props.formResponse);
    
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
            props.formData.fixedUserProfileSchema?.map(i => getComponent(i,props.formData.userData,inputfieldData,addRefs))
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
