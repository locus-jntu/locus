import { ButtonGroup, Modal } from "@mui/material"
import CompanyCard from "../../components/company-cards/CompanyCard"
import Nav from "../../components/Nav"
import Sidebar from "../../components/Sidebar"
import EditIcon from '@mui/icons-material/Edit';
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import SearchIcon from '@mui/icons-material/Search';
import LButton from "../../components/LButton";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import useFetch from "../../utility/hooks/useFetch";
import { readUploadFile } from "../../utility/excel/excelToJSON";
import SecureLS from "secure-ls";
import Popup from "../../components/Popup";

const Registration = () => {

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState("")


  useEffect(() => {
    console.log("triggered", data);
    
    if(data?.length > 0){        
        const studentsData = []
        data.length > 0 && data.map((arr, ind) => {
            if(ind != 0) {
               let student = {'roll_number': "", 'mail_id': ""}
               student['roll_number'] = arr[0]
               student['mail_id'] = arr[1]
               studentsData.push(student)
            }
        });
        setData({
            newStudents: studentsData
        })
    }
  },[data])
  
  const registerNewStudents = useFetch(data, 'api/tpo/registerNewStudents', 'POST')

  const registerStudents = async () => {
    try{
        setOpen(true);
        setStatus("loading");
        const resp = await registerNewStudents();
        if(resp) setStatus("success");
        else setStatus("failed");
    }catch(err){
        console.log("Error : ",err);
        setStatus("failed");
    }
  }  

  return (
      <Layout component="registrations" role="tpo">

          <div className="px-4 mt-2 mb-8">

             <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Registrations  </p>
             
             <p className="mt-4 ml-4">Choose new students' data excel file : </p>
             <div className="h-64 flex bg-secondary m-4 mt-2">
                  <input
                      type="file"
                      name="upload"
                      id="upload"
                      onChange={(e) => readUploadFile(e,setData)}
                      className="flex self-center m-auto pl-24 text-white"
                  />
            </div>

            <div className="flex justify-end p-8 pr-4">
                 <LButton width={200}  onClick={registerStudents} name="Register New Students" />
            </div>
          </div>

          <Popup open={open} successButtonText="Go to Dashboard" setOpen={setOpen} status={status} loadingText="Registering new students.." successPageRoute="/tpo" />

      </Layout>
  )
}

export default Registration
