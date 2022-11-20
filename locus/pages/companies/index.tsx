import { Button, ButtonGroup } from "@mui/material"
import CompanyCard from "../../components/company-cards/CompanyCard"
import Nav from "../../components/Nav"
import Sidebar from "../../components/Sidebar"
import SortIcon from '@mui/icons-material/Sort';
import Footer from "../../components/Footer";
import useFetch from "../../utility/hooks/useFetch";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { companiesAtom } from "../../recoil/atoms";

const Companies = () => {
  
  const [companies, setCompanies] = useRecoilState(companiesAtom);

  const getCompaniesFunction = useFetch(null, "shared/getAllCompanies", "GET");
  

  useEffect( () => {
    companies.length==0 && 
    getCompaniesFunction()
     .then((res) => setCompanies(res));
   }, [])


  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar component="companies"/>

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='tpo' />

          <div className="px-4 mt-2 mb-8">
            <p className="py-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Companies  </p>
            <div className="flex h-12 justify-end align-items-end">
              <div className="py-2">
                <ButtonGroup size="small" variant="outlined" >
                    <Button>Horizontal</Button>
                    <Button>Vertical</Button>
                </ButtonGroup>
              </div>
              <div className="py-2 px-8">
                <SortIcon />
              </div>
            </div>
            
            <div className="bg-white rounded shadow-xl pb-4">
              {
                companies.map(item => <CompanyCard data={item} />)
              }
            </div>
          </div>

          <Footer />

      </div>

    </div>
  )
}

export default Companies
