import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="h-96 bg-primary">
    <p className="font-lobster text-6xl text-white text-center py-12">Make things<span className="text-secondary"> possible !</span>  </p>
    <div className="flex justify-between text-white p-12">
      <div>
        <p className=" text-2xl pb-4">LOCUS</p>
        <p className="text-base font-jost">CSE Department</p>
        <p className="text-base font-jost py-1">JNTUHUCEH, Kukatpally</p>
        <p className="text-base font-jost">Hyderabad, Telangana - 500000 </p>
      </div>
      <div className="flex font-jost">
        <div className="text-right mr-12">
          <p>About Us</p>
          <p className="my-1">Contact Us</p>
          <p>FAQ</p>
        </div>
        <div>
          <p className="mb-2">Follow Us</p>
          <span>
             <FacebookIcon />
             <InstagramIcon className="mx-2" />
             <LinkedInIcon />
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div className="flex justify-between text-xs py-2 px-4 text-gray-400 bg-primary">
      <p>LOCUS &copy; 2022 - All rights reserved</p>
      <p>
        <span>Privacy Policy</span>
        <span className="mx-12">Terms of Use</span>
      </p>
    </div>
  </div>
  )
}

export default Footer