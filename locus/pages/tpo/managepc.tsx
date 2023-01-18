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
import Popup from "../../components/Popup";
import { departments } from "../../utility/data";

const ManagePC = () => {

  const [open, setOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [dept, setDept] = useState("");

  const [msg, setMsg] = useState("");
  const [pcInput, setPcInput] = useState("");

  const [pcData, setPcData] = useState([]);

  function getPc(department: string){
    const pcId = pcData?.filter((pcUid:string) => pcUid.split('@')[1] == department.toLowerCase()); 
    const pcDetails = {
        id: "none",
        rollNumber: "none"
    }

    if(pcId?.length){
        pcDetails.id = pcId[0];
        pcDetails.rollNumber = pcId[0].split('@')[0].split('.')[1];
    }
    return pcDetails;
  }

  const fetchPcFunction = useFetch(null, "api/tpo/fetchAllPcs", "GET");
  const pcSelectFunction = useFetch({username: pcInput, department: dept},"api/tpo/createPc", "POST");
  const pcDeleteFunction = useFetch(null,`api/tpo/deletePc?username=${getPc(dept).id}`, "GET");

  const selectPc = async() => {    
    try{ 
     setModelOpen(true);
     setStatus("loading");
     await pcDeleteFunction();
     const data = await pcSelectFunction();
     if(data) {
         setMsg("PC updated.");
         setStatus("success");
    }
     else{
         setMsg("Something went wrong! same PC might have already existed.");
         setStatus("failed");
     }}catch(err){
         setStatus("failed");
         console.log("Error ", err);
     }
  } 

  const changePcInput = (e) => {
    setPcInput(e.target.value);
  }  


  const fetchPcs = async() => {
      const res = await fetchPcFunction();
      setPcData(res.map(item => item.username))
  }

  useEffect(() => {
     fetchPcs();
  }, []);

  return (
      <Layout component="managepc" role="tpo">

          <div className="px-4 mt-2 mb-8">
             <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Manage PCs  </p>

             <p className="font-bold my-4 ">2024 Batch</p>
             <div className="grid grid-cols-2 gap-y-4">
               {
                   departments.map(department => (
                        <div className="p-4 flex justify-between border-2 border-r-gray-300 hover:border-gray-800 hover:rounded">
                            <p className="text-xl w-32 font-bold">{department}</p>
                            <div className="md:flex">
                                <p className="text-xl">{getPc(department).rollNumber}</p>
                            </div>
                                <EditIcon onClick={() => {setOpen(true); setPcInput(""); setDept(department)}} />
                        </div>
                   ))
               }
             </div>

          </div>

          <Modal open={open}>
            <div className="h-screen">
                <div className="w-screen bg-white p-12 relative pb-24 flex justify-center items-center">
                    <CloseIcon onClick={() => setOpen(false)} className="absolute right-8 top-8" />
                    <SearchIcon style={{fontSize: 38, position: 'relative', top: 8}} />
                    <Input value={pcInput} onChange={changePcInput} ref={(ref) => {ref?.focus(); }} name="pc" labelStyles={{fontWeight: '500'}} containerStyle={{width: '50%'}} label="select a pc" />
                    <LButton onClick={selectPc} height={54} style={{position: 'relative', top: 5}} width={84} name="SELECT" />
                    <p className="absolute bottom-4">{msg}</p>
                </div>
            </div>
          </Modal>

          <Popup open={modelOpen} setOpen={setModelOpen} successButtonText="Go Back" status={status} loadingText="Updating PC.." onSuccessButtonClick={() => location.reload()} />

      </Layout>
  )
}

export default ManagePC


