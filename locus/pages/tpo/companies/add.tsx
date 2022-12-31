import CompanyCard from "../../../components/company-cards/CompanyCard"
import Nav from "../../../components/Nav"
import Sidebar from "../../../components/Sidebar"
import Footer from "../../../components/Footer";
import { useRef, useState } from "react";
import Input from "../../../components/Input";
import Modal from '@mui/material/Modal';
import Autofill from "../../../components/Autofill";
import Radio from "../../../components/Radio";
import Checkbox from "../../../components/Checkbox";
import { useRouter } from "next/router";
import MultipleSelect from "../../../components/Multiselect";
import lightTheme from "../../../styles/theme/lightTheme";
import LButton from "../../../components/LButton";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { readUploadFile } from "../../../utility/excel/excelToJSON";
import { exportFile } from "../../../utility/excel/JSONToExcel";
import { useGenerateKeys } from "../../../utility/useGenerateKeys.js";
import { getType, getValues } from "../../../utility/helperInput.js";
import Layout from "../../../components/Layout";
import useFetch from "../../../utility/hooks/useFetch";
import { NoEncryption } from "@mui/icons-material";

const Companies = () => {
 
  const router = useRouter();
  const { companyId } = router.query;

  const nameRef = useRef();
  const jobTypeRef = useRef();
  const labelsRef = useRef();
  const roleRef = useRef();
  const descriptionRef = useRef();

  const [companyData, setCompanyData] = useState({});

  const fixedkeys = [
      "firstName","gender"
   ];

  const [defaultKeys, setDefaultKeys] = useState([]);
  const [optional, setOptional] = useState([]);

  const [extraUserProfileSchema, setextraUserProfileSchema] = useState([]);
  const [fixedUserProfileSchema, setfixedUserProfileSchema] = useState([]);

  const [labels, setLabels] = useState([]);

  const [constraints, setConstraints] = useState([]);
  
  const refs = useRef([]);
 
  const stringRef = useRef();
  const radioLabelRef = useRef();
  const radioValuesRef = useRef();
  const checkBoxLabelRef = useRef();
  const checkBoxvaluesRef = useRef();

  refs.current = []

  const [keys,setKeys] = useState([])

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('');  

  const addString = () => {
     const name = stringRef.current.value=="" ? optional.at(index) : stringRef.current.value;
     const component = <Input name={name} label={name} />
     setDefaultKeys(keys => [...keys, {component, name}])
     setOptional(keys => keys.filter((_,ind) => ind!=index))
     setOpen(false)
     setextraUserProfileSchema(keys => [...keys, {name, values: null, type: 'string'}])
     setType('')
  }

  const addRadio = () => {
    const label = radioLabelRef.current.value=="" ? optional.at(index) : radioLabelRef.current.value;
    const names = radioValuesRef.current.value;
      const component = <Radio row={true} label={label} values={names.split(",")} />
      setDefaultKeys(keys => [...keys, {component, name:label}])
      setOptional(keys => keys.filter((_,ind) => ind!=index))
      setextraUserProfileSchema(keys => [...keys, {name: label, values: names, type: 'radio'}])
      setOpen(false)
      setType('')
  }

  const addCheckbox = () => {
    const label = checkBoxLabelRef.current.value=="" ? optional.at(index) : checkBoxLabelRef.current.value;
    const names = checkBoxvaluesRef.current.value;
    const component = <Checkbox row={true} label={label} values={names.split(",")} />
    setDefaultKeys(keys => [...keys, {component, name: label}])
    setOptional(keys => keys.filter((_,ind) => ind!=index))
    setOpen(false)
    setextraUserProfileSchema(keys => [...keys, {name: label, values: names, type: 'checkbox'}])
    setType('')
}

  const changeHandler = (e,v,index) => {
    setIndex(index);
     if(v == 'Other'){
         setOpen(true);
         refs.current[index].blur();
     }
  }

  const removeItem = (i) => {
      const name = i.name;
      setDefaultKeys(keys => keys.filter(item => item.name!=name))
      setextraUserProfileSchema(keys => keys.filter(item => item.name!=name))
      setOptional(keys => [...keys, name])
  }

  const addRef = (el) => {
     if(el && !refs.current.includes(el)){
         refs.current.push(el);
     }
  }

  const keysFunc = useGenerateKeys(fixedkeys, keys, setDefaultKeys, setOptional, setfixedUserProfileSchema);

  const genKeys = () => {
    keysFunc();
    setDefaultKeys(keys => keys.map(i => 
      {
        let component = null;
        if(getType(i) == 'string') component = <Input containerStyle={{width: '100%'}} name={i} label={i} />
        if(getType(i) == 'radio') component = <Radio row={true} label={i} values={getValues(i).split(",")} />
        return {
          component,
          name: i
        }
      }
    )
    )
  }

  const addhandler = async () => {
    const payload = {
      name: nameRef.current.value,
      year: '2022',
      description: descriptionRef.current.value,
      branches: labelsRef.current.value,
      assignee: ['me'],
      status: 'ppt',
      ctc: '12',
      role: roleRef.current.value,
      jobCategory: 'DREAM',
      eligibility: 'string for now',
      fixedUserProfileSchema,
      extraUserProfileSchema
    }
    const companyFunction = useFetch(payload, "api/admin/createNewCompany", "POST");
    const data = await companyFunction();

    console.log(data);
    
  }

  return (
    
    <Layout role="tpo">

          <div className="flex flex-col justify-center items-center px-4 mt-2 mb-8">

             <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Add a new company  </p>
              
             <form className="box-border w-full text-primary md:w-11/12 lg:w-9/12 font-montserrat mb-8">
                <div className="p-5 mt-4 mb-4 md:p-8 bg-white rounded drop-shadow-2xl">
                   <Input ref={nameRef} name="companyName" placeholder="Enter company name here" label="company name" />

                   <div className="flex">
                        <Autofill ref={jobTypeRef} name="job offer type" />
                        <MultipleSelect onChange={e => setLabels(e.target.value)} val={labels} ref={labelsRef} label="labels" />
                   </div>

                   <Input ref={roleRef} name="role" placeholder="Enter role here" label="role" />
                   
                   <div>
                       <label className="pl-4">Eligibility</label>
                       <ul className="mt-8 mb-8">{
                          constraints.map(i => <li>{i}</li>)
                        }</ul>
                        <div className="flex justify-end">
                            <Input
                                name="eligibility"
                                variant="standard"
                                width="50%"
                                helperText="Add constraint here"
                            />
                            <LButton name="ADD" />
                        </div>
                   </div>

                   <Input
                    name="description"
                    label="description"
                    ref={descriptionRef}
                    multiline
                    rows={4}
                    />
                </div>
            </form>
            
            <div className="h-64 flex bg-secondary w-full mb-4">
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={(e) => readUploadFile(e,setKeys)}
                    className="flex self-center m-auto pl-24 text-white"
                />
            </div>

              <LButton onClick={genKeys} name="Generate Keys" width={164} />
              
              <p className="pt-4 px-8 mt-8 font-comforta text-center text-lg font-bold underline underline-offset-4"> company form  </p>

              <div className="mt-4 mb-4 w-full md:w-11/12 bg-white lg:w-9/12 p-4 rounded shadow-xl">

              {
                defaultKeys.map(i => (
                    <div className="flex w-full justify-between items-center">
                        {i.component}
                        <Button onClick={() => removeItem(i)} style={{height: 48}}> x </Button>
                    </div>
                ))
              }
              </div>

              <div className="grid grid-cols-2 w-full mt-8 mb-4 text-primary justify-start">
              {
                optional.map((i, index) => (
                      <Autofill
                        label={i}
                        name={i}
                        value=''
                        values={["string", "Other"]}
                        fullWidth={true}
                        ref={addRef}
                        onChange={(e,v) => changeHandler(e,v,index)}
                      /> 
                ))
              }
              </div>

              <LButton name="Add company" width='100%' onClick={addhandler} />
          </div>

          <Modal open={open} >
            <div className="h-screen flex flex-col justify-center items-center">
              <div style={{width: 450,minHeight: 380,padding: 24, margin: 'auto'}} className="flex flex-col bg-white rounded ">
                <div className="border-b-2 border-gray-400">
                   <Radio row label="Type" onChange={(e) => setType(e.target.value)} values={["string", "checkbox", "radio"]} />
                   <CloseIcon className="float-right" onClick={handleClose} />
                </div>
                <div className="rounded  pt-2 text-gray-600 bg-gray-200 flex-1 ">
                {
                    type=='string' ? 
                        <div className="relative h-full "> 
                          <Input ref={stringRef} name="name" label="Input name" placeholder="Ex: roll number" />
                          <button className="absolute bottom-4 right-4" onClick={addString}>Add</button>
                        </div>
                     
                    : type == 'checkbox'?
                    
                        <div className="relative h-full "> 
                            <Input ref={checkBoxLabelRef} size="small" name="label" label="label name" placeholder="Ex: location" />
                            <Input ref={checkBoxvaluesRef} size="small" name="values" label="label values" placeholder="Ex: Hyderabad,pune" helperText="enter comma separated values" />
                            <button className="absolute bottom-4 right-4" onClick={addCheckbox}>Add</button>
                        </div>
                    
                    : type == 'radio' ?
                    
                           <div className="relative h-full "> 
                                <Input ref={radioLabelRef} size="small" name="label" label="label name" placeholder="Ex: gender" />
                                <Input ref={radioValuesRef} size="small" name="values" label="label values" placeholder="Ex: male,female" helperText="enter comma separated values" />
                                <button className="absolute bottom-4 right-4" onClick={addRadio}>Add</button>
                            </div>
                    
                    : <p className="text-center">please select a type</p>
                }
                </div>
              </div> 
              
            </div>
          </Modal>
    </Layout>
  )
}

export default Companies
