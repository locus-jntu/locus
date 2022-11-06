import { Button, Chip } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";

const CompanyCard = () => {

    const data = {
        name: "Goldmann Sachs",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam omnis ad perferendis repellendus nisi nihil illum. Perferendis dolores vel porro quasi hic excepturi, labore eaque architecto ea molestias? Incidunt, quisquam",
        labels: ["cse", "ece", "eee"],
        assignee: "B3L0L",
        status: "First phase",
        ctc: "8 LPA",
        role: "Software Engineer",
        type: "Dream",
        eligibility: ">8GPA, no backlogs",
        applied: "false",
        date: "08/09/2022",
        user: {
            rollNo: "",
            userStatus: ""
        }
    }

    return (
     <div className="flex  shadow-2xl text-primary bg-white rounded">
       <div className="text-base w-7/12 md:w-1/2 p-4 m-1">
          <p className="text-xl md:text-2xl font-semibold">{data.name}</p>
          <p className="mt-1 mb-4 font-medium text-secondary">
            <span className="md:pr-4 block md:inline">{data.role}</span>
            <span className="md:px-4 block md:inline">{data.type}</span>
            <span className="md:pl-4 block md:inline">{data.ctc}</span>
          </p>
          <p className="mb-4 font-medium">{data.date}</p>
          <p className="text-sm underline underline-offset-4 mb-2 font-semibold text-gray-400">Eligibility : </p>
          <p>{data.eligibility}</p>
       </div>
       <div className="flex flex-col w-5/12 md:w-1/2  p-4 m-1 items-end">
          <Chip style={{fontSize: 16}} className="text-xs font-medium md:text-medium" color="info"  label={data.status} />
          <div className="flex w-full h-full flex-col justify-end" >
            <div className="flex flex-wrap justify-end md:justify-start ">
            {
                data.labels.map(dept => (
                    <Chip color="secondary" className="font-medium m-2 px-4 text-white" label={dept} />
                ))
            }
            </div>
            <span className="text-right text-sm my-2">Assignee : {data.assignee} </span>
            <Button
                //onClick={}
                className="flex self-end rounded w-full py-3 bg-secondary text-white hover:text-white"
                sx={{
                boxShadow: "none",
                color: lightTheme.palette.secondary.main,
                }}
                color="secondary"
                variant="contained"
                disabled={data.applied === 'true'}
            >
                {data.applied==='true' ? `Applied` : `Apply`}
            </Button>
            </div>
       </div>

     </div>
    )
}

export default CompanyCard;
