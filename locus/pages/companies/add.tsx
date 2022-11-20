import CompanyCard from "../../components/company-cards/CompanyCard"
import Nav from "../../components/Nav"
import Sidebar from "../../components/Sidebar"
import SortIcon from '@mui/icons-material/Sort';
import Footer from "../../components/Footer";
import useFetch from "../../utility/hooks/useFetch";
import { createRef, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { companiesAtom } from "../../recoil/atoms";
import Input from "../../components/Input";
import Modal from '@mui/material/Modal';
import Autofill from "../../components/Autofill";
import Radio from "../../components/Radio";
import Checkbox from "../../components/Checkbox";
import { useRouter } from "next/router";
import MultipleSelect from "../../components/Multiselect";
import lightTheme from "../../styles/theme/lightTheme";
import LButton from "../../components/LButton";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Companies = () => {
 
  const router = useRouter();
  const { cid } = router.query;

  const dataTobeSent = {
    cid: cid,
    defaults: ["firstName", "lastName"],
    optionals: [
      
    ]
  }

  const [constraints, setConstraints] = useState([]);
  
  const refs = useRef([]);
 
  const stringRef = useRef();
  const radioLabelRef = useRef();
  const radioValuesRef = useRef();
  const checkBoxLabelRef = useRef();
  const checkBoxvaluesRef = useRef();

  refs.current = []

  const [keys,setKeys] = useState(["gender", "location"])

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('');  

  const [companyKeys, setCompanyKeys] = useState([])  

  const addString = () => {
     const name = stringRef.current.value=="" ? keys.at(index) : stringRef.current.value;
     const component = <Input containerStyle={{width: '100%'}} name={name} label={name} />
     setCompanyKeys(keys => [...keys, {component, name}])
     setKeys(keys => keys.filter((_,ind) => ind!=index))
     setOpen(false)
     setType('')
  }

  const addRadio = () => {
    const label = radioLabelRef.current.value=="" ? keys.at(index) : radioLabelRef.current.value;
    const names = radioValuesRef.current.value;
      const component = <Radio row={true} label={label} values={names.split(",")} />
      setCompanyKeys(keys => [...keys, {component, name:label}])
      setKeys(keys => keys.filter((_,ind) => ind!=index))
      setOpen(false)
      setType('')
  }

  const addCheckbox = () => {
    const label = checkBoxLabelRef.current.value=="" ? keys.at(index) : checkBoxLabelRef.current.value;
    const names = checkBoxvaluesRef.current.value;
    const component = <Checkbox row={true} label={label} values={names.split(",")} />
    setCompanyKeys(keys => [...keys, {component, name: label}])
    setKeys(keys => keys.filter((_,ind) => ind!=index))
    setOpen(false)
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
      setCompanyKeys(keys => keys.filter(item => item.name!=name))
      setKeys(keys => [...keys, name])
  }

  const addRef = (el) => {
     if(el && !refs.current.includes(el)){
         refs.current.push(el);
     }
  }

  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="companies"/>

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='tpo' />

          <div className="flex flex-col justify-center items-center px-4 mt-2 mb-8">

             <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Add a new company  </p>
              
             <form className="box-border w-full text-primary md:w-11/12 lg:w-9/12 font-montserrat mb-8">
                <div className="p-5 mt-4 mb-4 md:p-8 bg-white rounded drop-shadow-2xl">
                   <Input name="companyName" placeholder="Enter company name here" label="company name" />

                   <div className="flex">
                        <Autofill fullWidth={true} name="job offer type" />
                        <MultipleSelect label="labels" fullWidth={true} />
                   </div>

                   <Input name="role" placeholder="Enter role here" label="role" />
                   
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
                    multiline
                    rows={4}
                    />
                </div>
            </form>
            
            <div className="h-64 bg-secondary w-full mb-4">

            </div>

              <LButton name="Generate Keys" width={164} />
              
              <p className="pt-4 px-8 mt-8 font-comforta text-center text-lg font-bold underline underline-offset-4"> company form  </p>

              <div className="mt-4 mb-4 w-full md:w-11/12 bg-white lg:w-9/12 p-4 rounded shadow-xl">

              {
                companyKeys.map(i => (
                    <div className="flex w-full justify-between items-center">
                        {i.component}
                        <Button onClick={() => removeItem(i)} style={{height: 48}}> x </Button>
                    </div>
                ))
              }
              </div>

              <div className="flex w-full mt-8 mb-4 text-primary justify-start">
              {
                keys.map((i, index) => (
                      <Autofill
                        label={i}
                        name={i}
                        value=''
                        ref={addRef}
                        onChange={(e,v) => changeHandler(e,v,index)}
                      /> 
                ))
              }
              </div>
          </div>

          <Modal open={open} >
            <div className="h-screen flex flex-col justify-center items-center">
              <div style={{width: 450,minHeight: 380,padding: 24, margin: 'auto'}} className="flex flex-col bg-white rounded ">
                <div className="border-b-2 border-gray-400">
                   <Radio row label="Type" onChange={setType} values={["string", "checkbox", "radio"]} />
                   <CloseIcon className="float-right" onClick={handleClose} />
                </div>
                <div className="rounded  pt-2 text-gray-600 bg-gray-200 flex-1 ">
                {
                    type=='string' ? 
                        <div className="relative h-full "> 
                          <Input ref={stringRef}  name="name" label="Input name" placeholder="Ex: roll number" />
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
          <Footer />
      </div>
    </div>
  )
}

export default Companies