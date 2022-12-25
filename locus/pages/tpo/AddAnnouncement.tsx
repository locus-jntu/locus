
import { Input } from "@mui/material";
import { useRouter } from "next/router"
import { useRecoilState } from "recoil";
import { announcementsAtom } from "../../recoil/atoms";
import useFetch from "../../utility/hooks/useFetch";

function AddAnnoucement (){
  const data = {
    title: "Notice 3",
    description: "The placements are going to start from 16th December 2022. Please register for the same.",
    Date: "2022-12-16T16:14:16.414+00:00" // to be a date format
  }

  const router = useRouter();

  const addAnnouncementsFunction = useFetch(data, "api/tpo/createNewAnnouncements", "POST");

  const [announcements, setAnnouncements] = useRecoilState(announcementsAtom);
  
  router.push("/tpo/announcements/new");

  return (
    <div>
        <button >Add</button>

    </div>
  )
}

export default AddAnnoucement
