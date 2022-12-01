import { Button, ButtonGroup } from "@mui/material"
import CompanyCard from "../../components/company-cards/CompanyCard"
import SortIcon from '@mui/icons-material/Sort';
import useFetch from "../../utility/hooks/useFetch";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { companiesAtom } from "../../recoil/atoms";
import Layout from "../../components/Layout";

interface CompaniesProps {
  role: string
}

const Companies = (props: CompaniesProps) => {
  
  const [companies, setCompanies] = useRecoilState(companiesAtom);

  const getCompaniesFunction = useFetch(null, "api/shared/getAllCompanies", "GET");
  

  useEffect( () => {    
    companies.length==0 && 
    getCompaniesFunction()
     .then((res) => setCompanies(res.companies));
   }, [])


  return (
       <Layout component="companies" role={props.role}>
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
                companies.map(item => <CompanyCard role={props.role} data={item} />)
              }
            </div>
          </div>
       </Layout>
  )
}

export default Companies
