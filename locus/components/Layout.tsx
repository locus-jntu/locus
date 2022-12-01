import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SecureLS from "secure-ls";
import Loader from "../snippets/shared/Loader";
import NoAccess from "../snippets/shared/NoAccess";
import Footer from "./Footer"
import Nav from "./Nav"
import Sidebar from "./Sidebar"

const Layout = (props: any) => {
   
  const router = useRouter();

  const [role, setRole] = useState('');

  useEffect(() => {
    var ls = new SecureLS({encodingType: 'aes', isCompression: false})
    if(ls.get("jwt")){
        setRole(ls.get("role"));
    }else{
      router.push('/login');
    }
  }, []);

  
   return (
    <>
      { 
        role == ''  ? <Loader /> :
        role!= props.role ? <NoAccess /> :  
          <div className="h-screen overflow-hidden w-screen flex">

            <div style={{height: '100%'}} className="flex absolute z-10">
              <Sidebar component={props.component} />
            </div>

            <div style={{paddingLeft: 80}} className="bg-gray-200 flex-grow text-primary overflow-y-auto relative">
                <Nav />
                {props.children}
                <Footer />

            </div>

          </div>
      }
    </>
  )

}

export default Layout
