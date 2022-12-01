import { Button } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";
import Input from "../components/Input";
import { creds as credentials } from "../utility/data/credentials";
import  useFetch from "../utility/hooks/useFetch.js";
import React, {useState, useContext, useRef, useEffect} from "react";
import Popup from "../components/Popup";
import { useRecoilState } from "recoil";
import { setToken, Token } from "../providers/TokenProvider";
import { Router, useRouter } from "next/router";
import SecureLS from "secure-ls";

const LoginForm = () => {

    const router = useRouter();

    const [creds, setCreds] = useState({username: '', password: ''});
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");

    const returnFunc = useFetch(creds, "api/login", "POST");
    
    const onclicked = async() => {
      try{
        setOpen(true);
        setStatus("loading");
        const data = await returnFunc();
        setOpen(false);
        let role;
        switch(data.roles[0].authority){
            case "ROLE_TPO":
                role = "tpo";
                router.push("/tpo");
                break;
            case "ROLE_PC":
                role = "pc";
                router.push("/pc");
                break;
            case "ROLE_STUDENT":
                role = "student";
                router.push("/student/profile");
                break;
        }
        const ls = new SecureLS({encodingType: 'aes', isCompression: false});
        ls.set("jwt", data.jwt);
        ls.set("role", role);
      }catch(err){
          console.log(err);
          setStatus("failed");
      }
    }


    return (
        <div className="flex h-screen bg-gray-200 text-primary">
            <div className="w-0 md:w-1/2 lg:w-8/12 flex flex-col justify-center items-end font-extrabold font-montserrat text-4xl">
              <div style={{height: 134}}>
                <div style={{width: 280}} className="tracking-wide pr-4 relative">
                    <p className="text-right z-10 absolute">Welcome to <span className="text-6xl text-secondary inline-block">locus</span></p>
                    <img className="relative float-right" style={{height: 48, top: 70, left: 22}} src="underline.png" />
                </div>
              </div>
              <p className="text-base font-medium ml-4 text-right">An <span className="text-secondary font-semibold text-lg">AI powered</span> placement portal.</p>
            </div>
            <div className="flex flex-grow justify-center w-screen overflow-hidden relative">
                <form style={{width: 350, margin: 'auto', zIndex: 20, filter: 'drop-shadow(4px 4px 8px hsl(0deg 0% 0% / 0.5))', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}  className="bg-white rounded p-8">
                    <p className="text-3xl font-bold">Login</p>
                    <p className="text-gray-400 mt-2 mb-4">please enter your crediantials to enter locus.</p>
                    <Input value={creds.username} onChange={(e: any) => setCreds({...creds, username: e.target.value}) } label="USER ID" size="small"  style={{margin: '4px 0 16px 0'}} labelStyles={{margin: 0, fontSize: 13}} placeholder="eg: 19011p0525" name="rollNumber" />
                    <Input value={creds.password} onChange={(e: any) => setCreds({...creds, password: e.target.value}) } label="PASSWORD" size="small" style={{margin: '4px 0 16px 0'}} labelStyles={{margin: 0, fontSize: 13}} name="password" />
                    <p className="text-sm mb-6 mt-3 text-right hover:underline hover:underline-offset-4 hover:cursor-pointer">Forgot Password ?</p>
                    <Button
                        onClick={onclicked}
                        className="rounded w-full py-3 bg-secondary text-white hover:text-white"
                        sx={{
                            boxShadow: "none",
                            color: lightTheme.palette.secondary.main,
                        }}
                        color="secondary"
                        variant="contained"
                        >
                        LOGIN
                    </Button>
                </form>
                <img className="hidden lg:block" style={{position: 'absolute', transform:'scale(1.6)', backgroundPosition: "right top" ,top: 72 ,filter: 'blur(0.89px)'}} src="vector-bg.png" alt="bg" />
            </div>

            <Popup open={open} setOpen={setOpen} status={status} loadingText="Logging In" />

        </div>
    )
}


export default LoginForm;
