import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import CampaignIcon from "@mui/icons-material/Campaign";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

const Sidebar = ({ component }) => {
  const classname = (id) =>
    component == id ? "text-white" : "";

  return (
    <div
      style={{ transition: "width 0.5s" }}
      className="group text-primary hidden flex relative text-left pt-8 px-2 bg-secondary shadow-2xl w-20 rounded m-2 hover:w-60 lg:block"
    >
      <div className="flex px-4  mb-12 font-bold">
        <MenuIcon /> <span className="hidden group-hover:block pl-8">Menu</span>
      </div>

      <Link href="/">
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("dashboard")}`}>
          <DashboardIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Dashboard
          </span>
        </div>
      </Link>

      <Link href="/companies">
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("companies")}`}>
          <BusinessIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Companies
          </span>
        </div>
      </Link>

      <Link href="/announcements">
        <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("announcements")}`}>
          <CampaignIcon />{" "}
          <span className="hidden group-hover:block pl-8">
            Announcements
          </span>
        </div>
      </Link> 

      <div className={`p-2 px-4 hover:bg-primary rounded flex mb-4 hover:text-white ${classname("events")}`}>
        <VideoLibraryIcon />{" "}
        <span className="hidden group-hover:block pl-8">
          Events
        </span>
      </div> 

      <div className="flex absolute bottom-8 p-2 px-4 hover:underline underline-offset-4 cursor-pointer">
        <LogoutIcon />{" "}
        <span className="hidden group-hover:block pl-8">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
