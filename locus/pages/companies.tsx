import { Button, ButtonGroup } from "@mui/material"
import CompanyCard from "../components/company-cards/CompanyCard"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import SortIcon from '@mui/icons-material/Sort';


const Companies = () => {
  return (
    <div className="h-screen overflow-hidden flex">

      <Sidebar />

      <div className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
          <Nav role='tpo' />

          <div className="px-4 mt-8">
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
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />

            </div>

            {/* <div className="my-6">
              <CompanyCard />
            </div>
            <div className="my-6">
              <CompanyCard />
            </div>
            <div className="my-6">
              <CompanyCard />
            </div>
            <div className="my-6">
              <CompanyCard />
            </div>
            <div className="my-6">
              <CompanyCard />
            </div> */}


          </div>
      </div>

    </div>
  )
}

export default Companies
