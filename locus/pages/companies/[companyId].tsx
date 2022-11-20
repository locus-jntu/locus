import { Button, ButtonGroup, FormControl, FormControlLabel, FormGroup, FormLabel, RadioGroup } from "@mui/material"
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

const Companies = () => {
 
  const router = useRouter();
  const { cid } = router.query;

  const dataTobeSent = {
    cid: cid,
    defaults: ["firstName", "lastName"],
    optionals: [
      
    ]
  }


  const keys = [
      "gender"
  ]

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('');  

  const [companyKeys, setCompanyKeys] = useState([])  

  const addString = () => {
     const name = keys.at(index);
     const component = <Input name={name} label={name} />
     setCompanyKeys(keys => [...keys, {component}])
  }

  const addRadio = () => {
      const label = keys.at(index);
      const names = "male,female";
      const component = <Radio label={label} values={names.split(",")} />
      setCompanyKeys(keys => [...keys, {component}])
  }

  const addCheckbox = () => {
    const label = keys.at(index);
    const names = "hyd,pune";
    const component = <Checkbox label={label} values={names.split(",")} />
    setCompanyKeys(keys => [...keys, {component}])
}

  const changeHandler = (_,v,index) => {
    setIndex(index);
     if(v == 'Other') setOpen(true)
  }

  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="companies"/>

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='tpo' />

          <div className="px-4 mt-2 mb-8">

              <div>
                
              </div>

              {
                companyKeys.map(i => i.component)
              }
              <hr />
              {
                keys.map((i, index) => (
                  <div id={i}>
                      <Autofill
                        label={i}
                        name={i}
                        onChange={(e,v) => changeHandler(e,v,index)}
                      /> 
                  </div>
                ))
              }
          </div>

          <Modal open={open} >
            <div className="h-screen flex flex-col justify-center items-center">
              <div style={{width: 450,minHeight: 350,padding: 24, margin: 'auto'}} className="bg-white">
                <Radio row label="type" onChange={setType} values={["string", "checkbox", "radio"]} />
                
                {
                    type=='string' ? 
                     <div>
                        <button onClick={addString}>Add</button>
                     </div>
                    : type == 'checkbox'?
                    <div>
                      <button onClick={addCheckbox}>Add</button>
                    </div> 
                    : type == 'radio' ?
                    <div>
                      <div>
                        <button onClick={addRadio}>Add</button>
                      </div>
                    </div>
                    : <div><p>select a type</p></div>
                }

                <button onClick={handleClose}>Close</button>

              </div> 
              
            </div>
          </Modal>
          <Footer />
      </div>
    </div>
  )
}

export default Companies