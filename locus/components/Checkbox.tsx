import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material"

interface radioProps {
    label: string,
    values: string[],
    row?: boolean,
    onChange?: any
    value?: any[]
}

function CheckboxItem(props: radioProps) {
  return (
    <FormControl className="py-2 px-4">
        <label>{props.label}</label>
        <FormGroup  onChange={props.onChange} row={props.row ?? false}>
            {
                props.values.map(val => (
                    <FormControlLabel control={<Checkbox checked={props.value?.includes(val)} />} label={val} />
                ))
            }
        </FormGroup>
    </FormControl>
  )
}

export default CheckboxItem