import Autofill from "../../components/Autofill";
import Input from "../../components/Input";
import { data } from "../data/profileData";

export function getComponent(name: string, formResponse, setFormResponse, data) {
   switch(name) {
       case 'rollnumber': 
          return <Input
          value={data.rollNumber ?? '...'}
          name="rno"
          placeholder="eg: 19011P0525"
          label="Roll number"
        />

        case 'name':
            return <>
            <label htmlFor="fname" className="m-3">
              Full name 
            </label>
            <div className="flex">
              <Input
                value={data.firstName ?? '...'}
                placeholder="eg: John"
                name="fname"
                helperText="Enter first name"
                width="50%"
              />
              <Input
                value={data.lastName ?? '...'}
                placeholder="eg: Doe"
                name="lname"
                helperText="Enter Last name"
                width="50%"
              />
            </div>
            </>
        
        case 'degree':
            return <Autofill
            value={data.degree ?? '...'}
            fullWidth={true}
            name="degree"
            />
        
        case 'department':
            return <Autofill
            value={data.department ?? '...'}
            fullWidth={true}
            name="department"
          />
        
        case 'parentname':
            return  <Input
            value={data.parentName ?? '...'}
            name="parentName"
            label="Parent's full name"
          />
        
        case 'email':
            return <Input
            // value={formResponse.fixedUserProfileSchema ?? '...'}
            onChange={(e) => setFormResponse(prev => {
              return {
                ...prev, 
                fixedUserProfileSchema: {...prev.fixedUserProfileSchema, 'email': e.target.value}
              }
            })}
            name="email"
            placeholder="eg: test@gmail.com"
            label="Email"
          />
        
        case 'mobile':
            return <Input
            value={data.mobile}
            name="mob"
            width="50%"
            label="Mobile"
            placeholder="+91 "
          />
        
        case 'passingyear':
            return <Input
            value={data.passingYear}
            name="year"
            width="50%"
            label="Passing Year"
          />

   }
}