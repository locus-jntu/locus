import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import lightTheme from '../styles/theme/lightTheme';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

interface NavProps{
    role?: string
}

const Nav = (props: NavProps) => {
    return(
       <nav style={{height: 100}} className="flex py-4 justify-between px-8">
           <img style={{height: 84}} src="/jntu-logo.png" alt="JNTUH logo"></img>
           <p className='text-center flex-1 w-11/12 md:tracking-wider relative right-6 top-4 text-base md:text-2xl font-semibold'>LOCUS</p>
           <NotificationsIcon style={{fontSize: 32, position:'relative', top: 12}} color='primary' />
       </nav>
    )
} 

export default Nav;
