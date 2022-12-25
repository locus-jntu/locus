
import { Button, Input } from "@mui/material";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import LButton from "../../components/LButton";
import lightTheme from "../../styles/theme/lightTheme";
import useFetch from "../../utility/hooks/useFetch";

interface announcementsProps {
    announcementData?: any
    role: string
    announcementId: string
    response: any

}

const addAnnoucements = (props: announcementsProps) => {
    const addNewAnnouncement = useFetch(props.response, "api/tpo/createNewAnnouncements", "POST");

    async function saveResponse() {
        const data = await addNewAnnouncement()
        if(data){
          console.log("successfull");
        }else {
          console.log("error while updating the response");
        }
       console.log(props.response);
     }

    // const [announcements, setAnnouncements] = useState({ title: '', description: '', date: '' });




    return (
        <Layout component="add" role={props.role}>
            <div className="flex h-screen bg-gray-200 text-primary">
                <Input value={props.announcementData.title}  />
                <Input value={props.announcementData.description} />
                <Input value={props.announcementData.date} />


                <LButton style={{margin: 4}} onClick={saveResponse} width="100%" name="Apply" />

            </div>
        </Layout>
    )


}
export default addAnnoucements;
