import { FormatShapes } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

interface formProps {
  formData?: any
  role: string
  companyId: string
}

const CompanyForm = (props: formProps) => {

  const router = useRouter();
  
  const formdataa = {
    name: "Goldman Sachs",
    fixedUserProfileSchema: ['name', 'rollnumber','passingyear'],
    extraUserProfileSchema: [
      {
        type: 'radio',
        name: 'gender',
        values: 'male,female'
      },
      {
         type: 'checkbox',
         name: 'intrests',
         values:'dance,music,cricket'
      }
    ]
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

        <p className="text-sm mb-2 text-center bg-secondary text-white p-2 rounded">EXISTING</p>
        {
          props.formData.fixedUserProfileSchema?.map(i => getComponent(i))
        }
        
         <p className="text-sm text-center bg-secondary text-white rounded p-2">NEW</p>
        {
          props.formData.extraUserProfileSchema?.map(i => (
            <div>
            { i.type == 'radio' ? <Radio row={true} label={i.name} values={i.values.split(",")} /> :
              i.type == 'checkbox' ? <Checkbox row={true} label={i.name} values={i.values.split(",")} /> :
             <Input containerStyle={{width: '100%'}} name={i.name ?? ''} label={i.name} />
            }
           </div>
          )
         )
        } 



        </div>
        
      </div>
    </Layout>
  );
};

export default CompanyForm;
