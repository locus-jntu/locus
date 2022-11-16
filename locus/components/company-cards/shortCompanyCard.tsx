import { Button, Chip } from "@mui/material";
import lightTheme from "../../styles/theme/lightTheme";

const ShortCompanyCard = ({data}) => {

    return (
     <>
        <div className="hover:border-primary p-2 pl-4 cursor-pointer border-white border-2 items-center justify-between flex text-primary bg-white rounded">
        <div className="text-sm w-1/2">
            <p className="text-lg font-semibold">{data.name}</p>
            <p className="mt-1 text-secondary">
                <span className="md:pr-4 block md:inline">{data.role}</span>
                <span className="md:px-4 block md:inline">{data.type}</span>
                <span className="md:pl-4 block md:inline">{data.ctc}</span>
            </p>
        </div>
        <div className="flex justify-between w-1/2">
            <p>{data.date}</p>
            <Chip style={{fontSize: 13}} className="text-xs font-medium md:text-medium" color="info"  label={data.status} />
        </div>
        </div>
        <hr />
     </>
    )
}

export default ShortCompanyCard;
