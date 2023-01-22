import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import CampaignIcon from "@mui/icons-material/Campaign";
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { Avatar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import lightTheme from "../styles/theme/lightTheme";
import { useState, useEffect } from "react";
import SecureLS from "secure-ls";
import { useRouter } from "next/router";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Sidebar = ({ component, name="user" }) => {
  const classname = (id) =>
    component == id ? "text-white" : "";

  const router = useRouter();
  
  const [role, setRole] = useState("");
  
  useEffect(() => {
    const ls = new SecureLS({encodingType: 'aes', isCompression: false})
    setRole(ls.get("role"));
  }, [])

  function logout(){
    const ls = new SecureLS({encodingType: 'aes', isCompression: false});
    router.push("/login")
    ls.removeAll();
  } 

  return (
    <div
      style={{ transition: "width 0.1s" }}
      className="group text-primary hidden flex relative text-left pt-8 px-2 bg-secondary shadow-2xl w-20 hover:w-60 lg:block"
    >
      <Link href={role == 'student' ? `/${role}/profile` : ``}>
        <div className="flex p-2 px-2 h-16 mb-12 font-bold">
          <Avatar sx={{ bgcolor: lightTheme.palette.primary.main }}>
              <PersonIcon />
          </Avatar>
          <span className="hidden group-hover:block pl-8 flex flex-nowrap">
            Welcome <br/> {name} 
          </span>
        </div>
      </Link>


      <Link href={`/${role}`}>
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("dashboard")}`}>
          <DashboardIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Dashboard
          </span>
        </div>
      </Link>

      <Link href={`/${role}/companies`}>
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("companies")}`}>
          <BusinessIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Companies
          </span>
        </div>
      </Link>

      <Link href={`/${role}/announcements`}>
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("announcements")}`}>
          <CampaignIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Announcements
          </span>
        </div>
      </Link>

      {role=="tpo" && <Link href={`/${role}/managepc`}>
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("managepc")}`}>
          <PeopleIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            ManagePC
          </span>
        </div>
      </Link>}

      <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("events")}`}>
        <VideoLibraryIcon />{" "}
        <span className="hidden group-hover:block pl-8">
          Events
        </span>
      </div> 

      {role=="tpo" && <Link href={`/${role}/registration`}>
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("registrations")}`}>
          <PersonAddAlt1Icon />{" "}
          <span className="hidden group-hover:block pl-8">
            Registrations
          </span>
        </div>
      </Link>}
 
      <div onClick={logout} className="flex absolute bottom-8 p-2 px-4 hover:underline underline-offset-4 cursor-pointer">
        <LogoutIcon />{" "}
        <span className="hidden group-hover:block pl-8">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
