import { Button, Chip } from "@mui/material";
import React, { useContext } from "react";
import lightTheme from "../../styles/theme/lightTheme";
import Autofill from "../../components/Autofill";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Note from "../../components/Note";
import  useFetch from "../../utility/hooks/useFetch.js";
import { data as profileData } from "../../utility/data/profileData";
import Popup from "../../components/Popup";
import { useRecoilValue } from "recoil";
import { Token } from "../../providers/TokenProvider";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Layout from "../../components/Layout";

const ProfileForm = () => {
  const [data, setData] = React.useState(profileData);

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

  const returnFunc = useFetch(data, "students/saveNewProfileData", "POST");

  const clickHandler = async() => { 
    try{
      setOpen(true);
      setStatus("loading");
      const data = await returnFunc();
      setStatus("success");
      console.log("data is : ", data);
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
          <div className="p-5 mt-4 mb-4 md:p-8 bg-white rounded drop-shadow-2xl">
            <Heading label="Personal Information" />

            <Input
              value={data.rollNumber}
              onChange={(e: any) =>
                setData({ ...data, rollNumber: e.target.value })
              }
              name="rno"
              placeholder="eg: 19011P0525"
              label="Roll number"
            />

            <label htmlFor="fname" className="m-3">
              Full name 
            </label>
            <div className="flex">
              <Input
                value={data.firstName}
                onChange={(e: any) =>
                  setData({ ...data, firstName: e.target.value })
                }
                placeholder="eg: John"
                name="fname"
                helperText="Enter first name"
                width="50%"
              />
              <Input
                value={data.lastName}
                onChange={(e: any) =>
                  setData({ ...data, lastName: e.target.value })
                }
                placeholder="eg: Doe"
                name="lname"
                helperText="Enter Last name"
                width="50%"
              />
            </div>

            <div className="flex">
              <Autofill
                value={data.degree}
                onChange={(e: any) =>
                  setData({ ...data, degree: e.target.textContent })
                }
                name="degree"
              />
              <Autofill
                value={data.department}
                onChange={(e: any) =>
                  setData({ ...data, department: e.target.textContent })
                }
                name="department"
              />
            </div>

            <Input
              value={data.parentName}
              onChange={(e: any) =>
                setData({ ...data, parentName: e.target.value })
              }
              name="parentName"
              label="Parent's full name"
            />
            <Input
              value={data.email}
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
              name="email"
              placeholder="eg: test@gmail.com"
              label="Email"
            />

            <div className="flex">
              <Input
                value={data.mobile}
                onChange={(e: any) =>
                  setData({ ...data, mobile: e.target.value })
                }
                name="mob"
                width="50%"
                label="Mobile"
                placeholder="+91 "
              />
              <Input
                value={data.passingYear}
                onChange={(e: any) =>
                  setData({ ...data, passingYear: e.target.value })
                }
                name="year"
                width="50%"
                label="Passing Year"
              />
            </div>

            <label htmlFor="str-addr" className="m-3">
              {" "}
              Permanent Address{" "}
            </label>
            <Input
              value={data.address.streetAddress}
              onChange={(e: any) =>
                setData({
                  ...data,
                  address: { ...data.address, streetAddress: e.target.value },
                })
              }
              name="st-addr"
              helperText="Enter street address"
            />
            <Input
              value={data.address.streetAddress2}
              onChange={(e: any) =>
                setData({
                  ...data,
                  address: { ...data.address, streetAddress2: e.target.value },
                })
              }
              name="st-addr2"
              helperText="Enter street address 2 (OPTIONAL)"
            />

            <div className="flex">
              <Input
                value={data.address.district}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    address: { ...data.address, district: e.target.value },
                  })
                }
                name="district"
                width="50%"
                helperText="Enter district"
              />
              <Input
                value={data.address.city}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    address: { ...data.address, city: e.target.value },
                  })
                }
                name="city"
                width="50%"
                helperText="Enter city"
              />
            </div>

            <div className="flex">
              <Input
                value={data.address.state}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    address: { ...data.address, state: e.target.value },
                  })
                }
                name="state"
                width="50%"
                helperText="Enter state"
              />
              <Input
                value={data.address.pin}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    address: { ...data.address, pin: e.target.value },
                  })
                }
                name="pin"
                width="50%"
                helperText="Enter pin code"
              />
            </div>
          </div>

          <div className="p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl">
            <Heading label="Education Information" />

            <div className="flex">
              <Input
                value={data.tenthGrade}
                onChange={(e: any) =>
                  setData({ ...data, tenthGrade: e.target.textContent })
                }
                name="tenth"
                width="50%"
                label="10th"
                placeholder="eg: 9.8 "
              />
              <Input
                value={data.interGrade}
                onChange={(e: any) =>
                  setData({ ...data, interGrade: e.target.textContent })
                }
                name="inter"
                width="50%"
                label="Intermediate/Diploma"
                placeholder="eg: 987"
              />
            </div>

            <Input
              value={data.eamcetEcetRank}
              onChange={(e: any) =>
                setData({ ...data, eamcetEcetRank: e.target.textContent })
              }
              name="eamcet"
              placeholder="eg: 4500"
              label="Eamcet/Ecet rank"
            />
            <Input
              value={data.ugAggregate}
              onChange={(e: any) =>
                setData({ ...data, ugAggregate: e.target.textContent })
              }
              name="ug"
              placeholder="eg: 9.87"
              label="UG aggregate"
            />

            <div className="flex">
              <Input
                value={data.historyOfBacklogs}
                onChange={(e: any) =>
                  setData({ ...data, historyOfBacklogs: e.target.textContent })
                }
                name="historyOfBacklogs"
                width="50%"
                label="History of backlogs"
                placeholder="eg: Yes | Nill"
              />
              <Input
                value={data.currentBacklogs}
                onChange={(e: any) =>
                  setData({ ...data, eamcetEcetRank: e.target.textContent })
                }
                name="currentBacklogs"
                width="50%"
                label="Current Backlogs"
                placeholder="eg: 2"
              />
            </div>
          </div>

          <div className="p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl">
            <Heading label="Technical Information" />

            <div className="flex flex-col mb-6 md:flex-row ">
              <label className="m-3 w-32"> Skills </label>
              <div className="skills flex flex-wrap w-full ml-4">
                {data.skills.length > 0 ? (
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
                    skills: [...data.skills, skill],
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
                {data.languages.length > 0 ? (
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
                    languages: [...data.languages, language],
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
                {data.courses.length > 0 ? (
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
                    courses: [...data.courses, course],
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
                {data.internships.length > 0 ? (
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
                    internships: [...data.internships, internship],
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

            <Popup open={open} setOpen={setOpen} status={status} loadingText="Saving your data.." successPageRoute="/student" />

          </div>
        </form>
      </div>
    </Layout>
   
  );
};

export default ProfileForm;
