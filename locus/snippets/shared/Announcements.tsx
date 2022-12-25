import { Button, ButtonGroup, Link } from "@mui/material"
import CompanyCard from "../../components/company-cards/CompanyCard"
import Nav from "../../components/Nav"
import Sidebar from "../../components/Sidebar"
import SortIcon from '@mui/icons-material/Sort';
import Footer from "../../components/Footer";
import Announcement from "../../components/announcements/Announcement";
import { useEffect, useState } from "react";
import useFetch from "../../utility/hooks/useFetch";
import { useRecoilState } from "recoil";
import { announcementsAtom } from "../../recoil/atoms";
import Layout from "../../components/Layout";
import lightTheme from "../../styles/theme/lightTheme";

interface AnnouncementsProps {
  role: string
}


const Announcements = (props: AnnouncementsProps) => {

  const [announcements, setAnnouncements] = useRecoilState(announcementsAtom);

  const getAnnouncements = useFetch(null, "api/shared/getAllAnnouncements", "GET");


  useEffect(() => {
    announcements.length == 0 &&
      getAnnouncements()
        .then((res) => setAnnouncements(res.announcements));
  }, [])


  return (
    <Layout component="announcements" role={props.role}>
      <div className="px-4 mt-2 mb-8">
        <p className="py-4 px-8 font-comforta text-center text-xl font-bold  underline underline-offset-4">Announcements !</p>
        <div className="flex h-12 justify-end align-items-end">
          
          <Link className="flex" href={`/tpo/announcements/addAnnouncement`} >
          <Button
            onClick={() => console.log("add")}
            className="flex self-end m-2 rounded py-1 px-6 bg-secondary text-white hover:text-white"
            sx={{
              boxShadow: "none",
              color: lightTheme.palette.secondary.main,
            }}
            color="success"
            variant="contained"
          >
            Add
          </Button>
          </Link>

          <Link className="flex" href={`/tpo/announcements`} >
          <Button
            className="flex self-end m-2 rounded py-1 px-6 bg-secondary text-white hover:text-white"
            sx={{
              boxShadow: "none",
              color: lightTheme.palette.secondary.main,
            }}
            color="primary"
            variant="contained"
          >
            Edit
          </Button>
          </Link>

          <Link className="flex" href={`/tpo/announcements`} >
          <Button
            className="flex self-end m-2 rounded py-1 px-6 bg-secondary text-white hover:text-white"
            sx={{
              boxShadow: "none",
              color: lightTheme.palette.secondary.main,
            }}
            color="warning"
            variant="contained"
          >
            Delete
          </Button>
          </Link>

          

          

          

          <div className="py-2 px-4">
            <SortIcon />
          </div>

        </div>

        <div className="bg-white rounded shadow-xl pb-4">
          {
            announcements.map((item) => (
              <Announcement data={item} />
            ))
          }
        </div>
      </div>
    </Layout>


  )
}

export default Announcements;
