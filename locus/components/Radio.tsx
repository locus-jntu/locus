import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { forwardRef } from "react"

interface radioProps {
    label: string,
    values: string[],
    row?: boolean,
    onChange?: any,
}

const RadioItem = forwardRef((props: radioProps, ref) => {
  return (
    <FormControl className="py-2 px-4">
        <label>{props.label}</label>
        <RadioGroup ref={ref} row={props.row ?? false} onChange={(e,v) => props.onChange(v)}>
        {
            props.values.map(val => (
                <FormControlLabel value={val.toLowerCase()} control={<Radio />} label={val} />
            ))
        }
        </RadioGroup>
    </FormControl>
  )
})

export default RadioItem