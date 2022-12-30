import { ButtonGroup, Button } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import ShortAnnouncement from "../../components/announcements/shortAnnouncement";
import { announcementsAtom } from "../../recoil/atoms";
import lightTheme from "../../styles/theme/lightTheme";
import useFetch from "../../utility/hooks/useFetch";

interface AnnouncementsSMProps {
    role: string
}

const AnnouncementsSM = (props: AnnouncementsSMProps) => {
    
    const [announcements, setAnnouncements] = useRecoilState(announcementsAtom);
    const getAnnouncementsFunction = useFetch(null, "api/shared/getAllAnnouncements", "GET");
    
    useEffect(() => {
        announcements.length==0 && 
        getAnnouncementsFunction()
        .then(res => setAnnouncements(res.announcements));
    }, []);

    return (
        <div className="m-12 mx-8">
          <div className="flex justify-between">
            <p className="py-4 px-8 font-comforta text-2xl font-bold">Announcements !</p>
            <Link href="/announcements">
                <p className="pr-8 pt-8 hover:underline underline-offset-4">show all <span>&nbsp;&nbsp;&nbsp;&rarr;</span></p>
            </Link>
          </div>
          <div className="flex flex-col bg-white w-full h-96 rounded-lg shadow-2xl p-4">
                {
                  announcements.map((item) => (
                    <ShortAnnouncement data={item} />
                  ))
                }
                {
                    props.role === "tpo" && 
                    <div className="flex-1 flex justify-end ">
                        <Link className="flex" href={`/tpo/announcements`} > 
                        {/* changed here */}
                        <Button
                            className="flex self-end m-2 rounded py-1 px-6 bg-secondary text-white hover:text-white"
                            sx={{
                            boxShadow: "none",
                            color: lightTheme.palette.secondary.main,
                            }}
                            color="secondary"
                            variant="contained"
                        >
                            Add 
                        </Button>
                        </Link>
                    </div>
                }
          </div>
        </div>
    )
}

export default AnnouncementsSM;
