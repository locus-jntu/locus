import { ButtonGroup, Button } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import ShortCompanyCard from "../../components/company-cards/shortCompanyCard";
import { companiesAtom } from "../../recoil/atoms";
import useFetch from "../../utility/hooks/useFetch";

const CompaniesSM = () => {
    
    const [companies, setCompanies] = useRecoilState(companiesAtom);

    const getCompaniesFunction = useFetch(null, "api/shared/getAllCompanies", "GET");

    useEffect(() => {
        companies.length==0 &&
        getCompaniesFunction()
        .then(res => setCompanies(res.companies));
    }, []);

    return (
        <div className="m-12 mx-8">
          <div className="flex justify-between">
            <p className="py-4 px-8 font-comforta text-2xl font-bold">Reminders !</p>
            <div className="py-4 px-8">
              <ButtonGroup size="small" variant="outlined" >
                  <Button>Total</Button>
                  <Button>Applied</Button>
                  <Button>Ongoing</Button>
                </ButtonGroup>
            </div>
          </div>
          <div className="py-2 px-2 bg-white h-96 rounded-lg shadow-2xl">
            <p className="text-right font-gray-400 mb-2"><span className="bg-primary text-white rounded py-1 text-sm px-4"> Total </span></p>
            {
              companies.map(item => <ShortCompanyCard data={item} />)
            }
          </div>
        </div>
    )
}

export default CompaniesSM;
