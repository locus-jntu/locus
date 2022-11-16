import { Button, Chip } from "@mui/material";
import lightTheme from "../../styles/theme/lightTheme";
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';

const Announcements = ({data}) => {

    // const data = {
    //     title: "TCS Exam postponed",
    //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam omnis ad perferendis repellendus nisi nihil illum",
    //     date: "08/11/2022"
    // }

    return (
     <>
        <div className="hover:border-primary p-2 py-4 pl-4 pb-4 cursor-pointer border-white border-2 items-center justify-between flex text-primary bg-white rounded">
        <div className="text-sm w-2/4">
            <p className="text-base text-xl font-semibold"><CampaignIcon style={{position: 'relative', top: -2}}/><span className="pl-2">  {data.title}</span></p>
            <p className="mt-1 text-secondary">
               {data.description}
            </p>
        </div>
        <div>
            <p>{data.date}</p>
        </div>
        <div>
           <PushPinOutlinedIcon />
        </div>
        </div>
        <hr />
     </>
    )
}

export default Announcements;