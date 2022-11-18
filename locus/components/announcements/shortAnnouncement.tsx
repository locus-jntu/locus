import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';

const ShortAnnouncement = ({data}) => {

    return (
     <>
        <div className="hover:border-primary p-2 pl-4 pb-4 cursor-pointer border-white border-2 items-center justify-between flex text-primary bg-white rounded">
        <div className="text-sm w-2/4">
            <p className="text-base font-semibold"><CampaignIcon style={{position: 'relative', top: -2}}/><span className="pl-2">  {data.title}</span></p>
            <p className="mt-1 truncate text-secondary">
               {data.description}
            </p>
        </div>
        <div>
            <p>{data.date.substring(0,10)}</p>
        </div>
        <div>
           <PushPinOutlinedIcon />
        </div>
        </div>
        <hr />
     </>
    )
}

export default ShortAnnouncement;
