import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div style={{transition: 'width 0.5s'}} className="group text-primary hidden flex relative text-left pt-8 pl-6 bg-secondary shadow-2xl w-20 rounded m-2 hover:w-60 lg:block">
      <div className="flex mb-12 font-bold">    
         <MenuIcon /> <span className='hidden group-hover:block pl-8'>Menu</span>
      </div>

      <div className="flex mb-8">    
         <DashboardIcon /> <span className='hidden group-hover:block pl-8 hover:underline underline-offset-4 cursor-pointer'>Dashboard</span>
      </div>
      <div className="flex mb-8">    
         <BusinessIcon /> <span className='hidden group-hover:block pl-8 hover:underline underline-offset-4 cursor-pointer'>Companies</span>
      </div>
      <div className="flex mb-8">    
         <CampaignIcon /> <span className='hidden group-hover:block pl-8 hover:underline underline-offset-4 cursor-pointer'>Announcements</span>
      </div>
      <div className="flex mb-8">    
         <VideoLibraryIcon /> <span className='hidden group-hover:block pl-8 hover:underline underline-offset-4 cursor-pointer'>Events</span>
      </div>

      <div className='flex absolute bottom-8'>
          <LogoutIcon /> <span className='hidden group-hover:block pl-8 hover:underline underline-offset-4 cursor-pointer'>Logout</span>
      </div>

        
    </div>
  )
}

export default Sidebar