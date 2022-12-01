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
import { useState, useRef } from "react";
import Layout from "../../components/Layout";

const ManagePC = () => {

  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  return (
      <Layout role="ROLE_TPO">

          <div className="px-4 mt-2 mb-8">
             <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Manage PCs  </p>

             <p className="font-bold my-4 ">2024 Batch</p>
             <div className="grid grid-cols-2 gap-y-4">
                <div className="p-4 flex justify-between border-2 border-r-gray-300 hover:border-gray-800 hover:rounded">
                    <p className="text-xl font-bold">CSE</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon onClick={() => setOpen(true)} />
                </div>
                
                <div className="p-4 flex justify-between border-2 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">CSE-IDP</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 border-r-gray-300 hover:rounded hover:border-gray-800">
                    <p className="text-xl font-bold">ECE</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">ECE-IDP</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 border-r-gray-300 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">CIVIL</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">MECH</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 border-r-gray-300 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">CHEM</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

                <div className="p-4 flex justify-between border-2 rounded hover:border-gray-800">
                    <p className="text-xl font-bold">METT</p>
                    <div className="text-sm md:flex">
                        <p className="pr-2">Bilal Aamer |</p>
                        <p>19011P0506</p>
                    </div>
                    <EditIcon />
                </div>

             </div>

          </div>

          <Modal open={open}>
            <div className="h-screen">
                <div className="w-screen bg-white pt-12 relative pb-24 flex justify-center items-center">
                    <CloseIcon onClick={() => setOpen(false)} className="absolute right-8 top-8" />
                    <SearchIcon style={{fontSize: 38, position: 'relative', top: 8}} />
                    <Input ref={(searchRef) => {searchRef && searchRef.focus() }} name="pc" labelStyles={{fontWeight: '500'}} containerStyle={{width: '50%'}} label="select a pc" />
                    <LButton height={54} style={{position: 'relative', top: 5}} width={72} name="SELECT" />
                </div>
            </div>
          </Modal>

      </Layout>
  )
}

export default ManagePC
