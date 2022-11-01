import { Button, Chip } from '@mui/material'
import React from 'react'
import lightTheme from '../styles/theme/lightTheme'
import Autofill from './Autofill'
import Heading from './Heading'
import Input from './Input'
import Note from './Note'

const ProfileForm = () => {
  const [skills, setSkills] = React.useState(['java', 'c++', 'c', 'python']);
  const [languages, setLanguages] = React.useState(['java', 'c++', 'c', 'python']);
  const [skill, setSkill] = React.useState('');
  const [language, setLanguage] = React.useState('');

  const [courses, setCourses] = React.useState([]);
  const [course, setCourse] = React.useState({cname: '', org: ''});

  const [internships, setInternships] = React.useState([]);
  const [internship, setInternship] = React.useState({role: '', org: '', dur: ''});
  

  function appendArray(array: any, item: any, setArray: any, setItem: any){
    item!='' && setArray([...array, item ]);
    item.role!=undefined ? setItem({role: '', org: '', dur: ''})
    : item.cname!=undefined ? setItem({cname: '', org: ''})
    : setItem("");
  }

  function handleChange(e: any, setArray: any){
    setArray(e.target.value);
  }

  return (
        <div className='flex justify-center bg-gray-200'>
            <form className='box-border w-full text-primary md:w-11/12 lg:w-9/12 font-montserrat'>

             <div className='p-5 mt-8 mb-4 md:p-8 bg-white rounded drop-shadow-2xl'>
                <Heading label='Personal Information' />

                <Input name='rno' placeholder='eg: 19011P0525' label='Roll number' />

                <label htmlFor='fname' className='m-3'> Full name </label>
                <div className="flex">
                  <Input placeholder='eg: John' name='fname' helperText='Enter first name' width='50%' />
                  <Input placeholder='eg: Doe' name='lname' helperText='Enter Last name' width='50%' />
                </div>

                <div className="flex">
                  <Autofill name='degree' />
                  <Autofill name='department' />
                </div>

                <Input name='parentName' label="Parent's full name" />
                <Input name='email' placeholder='eg: test@gmail.com' label="Email" />

                <div className="flex">
                  <Input name='mob' width='50%' label="Mobile" placeholder='+91 ' />
                  <Input name='year' width='50%' label="Passing Year" />
                </div>

                <label htmlFor='str-addr' className='m-3'> Permanent Address </label>
                  <Input name='st-addr' helperText='Enter street address' />
                  <Input name='st-addr2' helperText='Enter street address 2 (OPTIONAL)' />

                  <div className="flex">
                    <Input name='district' width='50%' helperText='Enter district' />
                    <Input name='city' width='50%' helperText='Enter city' />
                  </div>

                  <div className="flex">
                    <Input name='state' width='50%' helperText='Enter state' />
                    <Input name='pin' width='50%' helperText='Enter pin code' />
                  </div>

              </div>

              <div className='p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl'>
                <Heading label='Education Information' />

                <div className="flex">
                    <Input name='tenth' width='50%' label="10th" placeholder='eg: 9.8 ' />
                    <Input name='inter' width='50%' label="Intermediate/Diploma" placeholder='eg: 987' />
                </div>

                <Input name='eamcet' placeholder='eg: 4500' label='Eamcet/Ecet rank' />
                <Input name='ug' placeholder='eg: 9.87' label='UG aggregate' />

                <div className="flex">
                    <Input name='historyOfBacklogs' width='50%' label="History of backlogs" placeholder='eg: Yes | Nill' />
                    <Input name='currentBacklogs' width='50%' label="Current Backlogs" placeholder='eg: 2' />
                </div>

              </div>

              <div className='p-5 my-8 md:p-8 bg-white rounded drop-shadow-2xl'>
                <Heading label='Technical Information' />

                <div className='flex flex-col mb-6 md:flex-row '>
                     <label className='m-3 w-32'> Skills </label>
                     <div className="skills flex flex-wrap w-full ml-4">
                       {skills.length > 0 ? skills.map(item => (
                          <Chip className='text-white flex justify-between mr-2 mb-2' sx={{ '& path': { color: 'white' }, minWidth: 100 }} color='secondary' key={item} label={item} onDelete={() => setSkills(skills.filter(i => i !== item))} />
                       )) : <p className='text-sm w-full text-center text-slate-300 ' >Skills are empty</p>}
                     </div>
                </div>
                <div className='flex justify-end mb-12'>
                     <Input value={skill} onChange={(e: any) => handleChange(e, setSkill)} variant='standard' helperText='add new skill' width={330} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button onClick={() => appendArray(skills, skill, setSkills, setSkill)} className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>

                <div className='flex flex-col mb-6 md:flex-row'>
                     <label className='m-3 w-32'> Pragramming Languages </label>
                     <div className="skills flex flex-wrap w-full ml-4">
                       {languages.map(item => (
                          <Chip className='text-white flex justify-between mr-2 mb-2' sx={{ '& path': { color: 'white' }, minWidth: 100 }} color='secondary' key={item} label={item} onDelete={() => setLanguages(languages.filter(i => i !== item))} />
                       ))}
                     </div>
                </div>
                <div className='flex justify-end mb-12'>
                     <Input value={language} onChange={(e: any) => handleChange(e, setLanguage)} helperText='add new language' variant='standard' width={330} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button onClick={() => appendArray(languages, language, setLanguages, setLanguage)} className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>

                <div className='flex flex-col mb-6 md:flex-row '>
                     <label className='m-3 w-32'> Courses </label>
                     <div className="skills flex flex-wrap w-full rounded">
                       {courses.map(i => (
                         <Note data={{cname: i.cname, org: i.org}} type='course' onClose={() => setCourses(courses.filter(k => k.cname !== i.cname))} />
                       ))}
                     </div>
                </div>
                <div  className='flex flex-col items-end mb-12'>
                     <Input value={course.cname} onChange={(e: any) => setCourse({...course, cname: e.target.value})} helperText='add new course' variant='standard' width={400} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Input value={course.org} onChange={(e: any) => setCourse({...course, org: e.target.value})} helperText='add institute name' variant='standard' width={400} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button onClick={() => appendArray(courses, course, setCourses, setCourse)} className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>

                <div className='flex flex-col mb-6 md:flex-row '>
                     <label className='m-3 w-32'> Internships </label>
                     <div className="skill flex flex-wrap w-full rounded">
                        {internships.map(i => (
                            <Note data={{role: i.role, org: i.org, dur: i.dur}} type='internship' onClose={() => setInternships(internships.filter(k => !(k.org === i.org && k.dur === i.dur) ))} />
                        ))}
                     </div>
                </div>
                <div className='flex flex-col items-end mb-12'>
                     <Input value={internship.role} onChange={(e: any) => setInternship({...internship, role: e.target.value})} helperText='add new role' variant='standard' width={400} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Input value={internship.org} onChange={(e: any) => setInternship({...internship, org: e.target.value})} helperText='add institute name' variant='standard' width={400} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Input value={internship.dur} onChange={(e: any) => setInternship({...internship, dur: e.target.value})} helperText='add duration' variant='standard' width={400} name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button onClick={() => appendArray(internships, internship, setInternships, setInternship)} className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>
                <p className="w-full py-4 rounded text-center text-white bg-secondary"> SUBMIT </p>
              </div>
           </form>
        </div>
  )
}

export default ProfileForm
