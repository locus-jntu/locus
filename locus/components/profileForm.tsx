import { Button, Chip } from '@mui/material'
import React from 'react'
import lightTheme from '../styles/theme/lightTheme'
import Autofill from './Autofill'
import Heading from './Heading'
import Input from './Input'

const ProfileForm = () => {
  const [skills, setSkills] = React.useState(['java', 'c++', 'c', 'python'])
  const [languages, setLanguages] = React.useState(['java', 'c++', 'c', 'python'])

  return (
        <div className='flex justify-center bg-gray-200'>
            <form className='box-border w-full text-primary md:w-9/12 font-montserrat'>

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
                       {skills.map(item => (
                          <Chip className='text-white flex justify-between mr-2 mb-2' sx={{ '& path': { color: 'white' }, minWidth: 100 }} color='secondary' key={item} label={item} onDelete={() => setSkills(skills.filter(i => i !== item))} />
                       ))}
                     </div>
                </div>
                <div className='flex justify-end mb-12'>
                     <span className='m-3'> Add new skill : </span>
                     <Input variant='standard' width='50%' name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
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
                     <span className='m-3'> Add new language : </span>
                     <Input variant='standard' width='50%' name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button onClick={() => setLanguages([...languages, 'new one'])} className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>

                <div className='flex flex-col mb-6 md:flex-row '>
                     <label className='m-3 w-32'> Courses </label>
                     <div className="skills border-2 flex w-full rounded"></div>
                </div>
                <div className='flex justify-end mb-12'>
                     <span className='m-3'> Add new course : </span>
                     <Input variant='standard' width='50%' name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>

                <div className='flex flex-col mb-6 md:flex-row '>
                     <label className='m-3 w-32'> Internships </label>
                     <div className="skills border-2 flex w-full rounded"></div>
                </div>
                <div className='flex justify-end mb-12'>
                     <span className='m-3'> Add new Internship : </span>
                     <Input variant='standard' width='50%' name='skill' placeholder='eg: java | c++ | c | python . . .' />
                     <Button className='rounded hover:text-white' sx={ { width: 40, height: 40, boxShadow: 'none', border: `1px solid ${lightTheme.palette.secondary.main}`, color: lightTheme.palette.secondary.main } } size='small' color='secondary' variant='contained' > Add </Button>
                </div>
                <p className="w-full py-4 rounded text-center text-white bg-secondary"> SUBMIT </p>
              </div>
           </form>
        </div>
  )
}

export default ProfileForm
