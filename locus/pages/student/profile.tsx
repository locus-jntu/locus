import { Button, Chip } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lightTheme from "../../styles/theme/lightTheme";
import Autofill from "../../components/Autofill";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Note from "../../components/Note";
import  useFetch from "../../utility/hooks/useFetch.js";
import { data as profileData } from "../../utility/data/profileData";
import Popup from "../../components/Popup";
import Layout from "../../components/Layout";

const ProfileForm = () => {

  const [data, setData] = React.useState(profileData);

  const [inputData, setInputData] = React.useState([]);
  const [loadingInputData, setLoadingInputData] = React.useState(true)

  const [skill, setSkill] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [course, setCourse] = React.useState({ cname: "", org: "" });
  const [internship, setInternship] = React.useState({
    role: "",
    org: "",
    dur: "",
  });

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const saveProfileFunction = useFetch(data, "api/student/updateProfile", "POST");

  const getFieldsFunction = useFetch(null, "api/shared/fetchProfileSchema", "GET");

  const getProfileData = useFetch(null, "api/student/fetchProfileData", "GET");

  async function getProfileSchema(){
    const fdata = await getFieldsFunction();
    const pdata = await getProfileData();
    setInputData(fdata)
    setData(pdata)
    setLoadingInputData(false)
  }

  useEffect(() => {
    getProfileSchema();
    //autofilling should also be done
  }, [])

  const inputRef = useRef([])
  inputRef.current = []

  function addRefs(el){
    if(el && !inputRef.current.includes(el)){
      inputRef.current.push(el)
    }
  }

  function inputChangeHandler(e, name){  
    if(e){      
      inputRef.current.map(i => {
        if(i.id == 'combo-box-demo'){
          if(i.name == name){
            setData(prev => {
              return {...prev, [i.name]: e.target.textContent}
            })
          }
        }
        else setData(prev => {
          return {...prev, [i.id]: i.value}
        })
      })
    }
  }

  const clickHandler = async() => { 
      try{
        setOpen(true);
        setStatus("loading");
        console.log("clicked :" ,data);
        
        const pdata = await saveProfileFunction();
        if(pdata) setStatus("success");
        else setStatus("failed")
      }catch(err){
          console.log("Error : ",err);
          setStatus("failed");
      }
  }

  return (
    <Layout role="student">
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <p className="pt-4 px-8 font-comforta text-center text-xl font-bold underline underline-offset-4"> Profile  </p>
        <form className="box-border w-full text-primary md:w-11/12 lg:w-9/12 font-montserrat">
            {
              loadingInputData ? "loading.. ": Object.keys(inputData[0]['fixed']).map(i => (
                <div className="p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl">
                  <Heading label={`${i} Information`} />
                  <div className="grid grid-cols-2">
                  {
                     inputData[0]['fixed'][i].map(field => {
                      const label = field.name.split("_").join(" ");
                      const [type, width] = field.type.split("_");
                      switch(type){
                        case 'string':
                          return <Input ref={addRefs} value={data[field.name]}  onChange={e => inputChangeHandler(e,field.name)} className={width=='100' ? "col-span-2" : ''} name={field.name} label={label} width={`100%`} />
                        case 'dropdown':
                          return <Autofill ref={addRefs} defaultValue={data[field.name]} onInputChange={e => inputChangeHandler(e,field.name)} values={field.values}  fullWidth={true} name={field.name} />
                      }
                    }
                   )
                  }
                  </div>
                </div>
              ))
            }

          <div className="p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl">
            <Heading label="Technical Information" />

            <div className="flex flex-col mb-6 md:flex-row ">
              <label className="m-3 w-32"> Skills </label>
              <div className="skills flex flex-wrap w-full ml-4">
                {data.skills?.length > 0 ? (
                  data.skills.map((item) => (
                    <Chip
                      className="text-white flex justify-between mr-2 mb-2"
                      sx={{ "& path": { color: "white" }, minWidth: 100 }}
                      color="secondary"
                      key={item}
                      label={item}
                      onDelete={() =>
                        setData({
                          ...data,
                          skills: data.skills.filter((i) => i !== item),
                        })
                      }
                    />
                  ))
                ) : (
                  <p className="text-sm w-full text-center text-slate-300 ">
                    Skills are empty
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end mb-12">
              <Input
                value={skill}
                onChange={(e: any) => setSkill(e.target.value)}
                variant="standard"
                helperText="add new skill"
                width={330}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Button
                onClick={() => {
                  setData({
                    ...data,
                    skills: data?.skills > 0 ? [...data.skills, skill] : [skill],
                  });
                  setSkill("");
                }}
                className="rounded hover:text-white"
                sx={{
                  width: 40,
                  height: 40,
                  boxShadow: "none",
                  border: `1px solid ${lightTheme.palette.secondary.main}`,
                  color: lightTheme.palette.secondary.main,
                }}
                size="small"
                color="secondary"
                variant="contained"
              >
                Add
              </Button>
            </div>

            <div className="flex flex-col mb-6 md:flex-row">
              <label className="m-3 w-32"> Pragramming Languages </label>
              <div className="skills flex flex-wrap w-full ml-4">
                {data.languages?.length > 0 ? (
                  data.languages.map((item) => (
                    <Chip
                      className="text-white flex justify-between mr-2 mb-2"
                      sx={{ "& path": { color: "white" }, minWidth: 100 }}
                      color="secondary"
                      key={item}
                      label={item}
                      onDelete={() =>
                        setData({
                          ...data,
                          languages: data.languages.filter((i) => i !== item),
                        })
                      }
                    />
                  ))
                ) : (
                  <p className="text-sm w-full text-center text-slate-300 ">
                    Programming languages are empty
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end mb-12">
              <Input
                value={language}
                onChange={(e: any) => setLanguage(e.target.value)}
                helperText="add new language"
                variant="standard"
                width={330}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Button
                onClick={() => {
                  setData({
                    ...data,
                    languages: data?.languages > 0 ? [...data.languages, language] : [language],
                  });
                  setLanguage("");
                }}
                className="rounded hover:text-white"
                sx={{
                  width: 40,
                  height: 40,
                  boxShadow: "none",
                  border: `1px solid ${lightTheme.palette.secondary.main}`,
                  color: lightTheme.palette.secondary.main,
                }}
                size="small"
                color="secondary"
                variant="contained"
              >
                Add
              </Button>
            </div>

            <div className="flex flex-col mb-6 md:flex-row ">
              <label className="m-3 w-32"> Courses </label>
              <div className="skills flex flex-wrap w-full rounded">
                {data.courses?.length > 0 ? (
                  data.courses.map((i) => (
                    <Note
                      data={{ cname: i.cname, org: i.org }}
                      type="course"
                      onClose={() =>
                        setData({
                          ...data,
                          courses: data.courses.filter(
                            (k) => !(k.cname === i.cname && k.org === i.org)
                          ),
                        })
                      }
                    />
                  ))
                ) : (
                  <p className="text-sm w-full text-center text-slate-300 ">
                    courses are empty
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end mb-12">
              <Input
                value={course.cname}
                onChange={(e: any) =>
                  setCourse({ ...course, cname: e.target.value })
                }
                helperText="add new course"
                variant="standard"
                width={400}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Input
                value={course.org}
                onChange={(e: any) =>
                  setCourse({ ...course, org: e.target.value })
                }
                helperText="add institute name"
                variant="standard"
                width={400}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Button
                onClick={() => {
                  setData({
                    ...data,
                    courses: data?.courses > 0 ? [...data.courses, course] : [course],
                  });
                  setCourse({ cname: "", org: "" });
                }}
                className="rounded hover:text-white"
                sx={{
                  width: 40,
                  height: 40,
                  boxShadow: "none",
                  border: `1px solid ${lightTheme.palette.secondary.main}`,
                  color: lightTheme.palette.secondary.main,
                }}
                size="small"
                color="secondary"
                variant="contained"
              >
                Add
              </Button>
            </div>

            <div className="flex flex-col mb-6 md:flex-row ">
              <label className="m-3 w-32"> Internships </label>
              <div className="skill flex flex-wrap w-full rounded">
                {data.internships?.length > 0 ? (
                  data.internships.map((i) => (
                    <Note
                      data={{ role: i.role, org: i.org, dur: i.dur }}
                      type="internship"
                      onClose={() =>
                        setData({
                          ...data,
                          internships: data.internships.filter(
                            (k) =>
                              !(
                                k.role === i.role &&
                                k.org === i.org &&
                                k.dur === i.dur
                              )
                          ),
                        })
                      }
                    />
                  ))
                ) : (
                  <p className="text-sm w-full text-center text-slate-300 ">
                    Internships are empty
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end mb-12">
              <Input
                value={internship.role}
                onChange={(e: any) =>
                  setInternship({ ...internship, role: e.target.value })
                }
                helperText="add new role"
                variant="standard"
                width={400}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Input
                value={internship.org}
                onChange={(e: any) =>
                  setInternship({ ...internship, org: e.target.value })
                }
                helperText="add institute name"
                variant="standard"
                width={400}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Input
                value={internship.dur}
                onChange={(e: any) =>
                  setInternship({ ...internship, dur: e.target.value })
                }
                helperText="add duration"
                variant="standard"
                width={400}
                name="skill"
                placeholder="eg: java | c++ | c | python . . ."
              />
              <Button
                onClick={() => {
                  setData({
                    ...data,
                    internships: data?.internships > 0 ? [...data.internships, internship] : [internship]
                  });
                  setInternship({
                    role: "",
                    org: "",
                    dur: "",
                  });
                }}
                className="rounded hover:text-white"
                sx={{
                  width: 40,
                  height: 40,
                  boxShadow: "none",
                  border: `1px solid ${lightTheme.palette.secondary.main}`,
                  color: lightTheme.palette.secondary.main,
                }}
                size="small"
                color="secondary"
                variant="contained"
              >
                Add
              </Button>
            </div>

            <Button
              onClick={clickHandler}
              className="rounded w-full py-3 bg-secondary text-white hover:text-white"
              sx={{
                boxShadow: "none",
                color: lightTheme.palette.secondary.main,
              }}
              color="secondary"
              variant="contained"
            >
              SUBMIT
            </Button>

            <Popup open={open} setOpen={setOpen} successButtonText="Go to Dashboard" status={status} loadingText="Saving your data.." successPageRoute="/student" />

          </div>
        </form>
      </div>
    </Layout>
   
  );
};

export default ProfileForm;
