import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material"

interface radioProps {
    label: string,
    values: string[],
    row?: boolean,
    onChange?: any
}

function CheckboxItem(props: radioProps) {
  return (
    <FormControl className="py-2 px-4">
        <label>{props.label}</label>
        <FormGroup row={props.row ?? false}>
            {
                props.values.map(val => (
                    <FormControlLabel control={<Checkbox />} label={val} />
                ))
            }
        </FormGroup>
    </FormControl>
  )
}

export default CheckboxItem