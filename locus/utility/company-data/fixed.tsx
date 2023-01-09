import Autofill from "../../components/Autofill";
import Input from "../../components/Input";
import { data } from "../data/profileData";

export function getComponent(name: string, data, inputfieldData,addRefs) {
   
    let component = null
    
    Object.keys(inputfieldData[0].fixed).forEach(section => {
       const field = inputfieldData[0].fixed[section].filter(input => input.name.toLowerCase().split("_").join(" ") == name.toLowerCase())
       
       if(field.length > 0){
        const label = field[0].name.split("_").join(" ");
        const [type, width] = field[0].type.split("_");
        switch(type){
          case 'string':
            component = <Input ref={addRefs} value={data[label]} className={width=='100' ? "col-span-2" : ''} name={field[0].name} label={label} width={`100%`} />
            break
          case 'dropdown':
            component = <Autofill ref={addRefs} value={data[label]} values={field[0].values}  fullWidth={true} name={field[0].name} />
            break
        }
       }
    })

    return component
}