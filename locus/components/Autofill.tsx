import { TextField, Autocomplete } from '@mui/material'
import { forwardRef } from 'react'

interface AutoProps {
  size?: 'small' | 'large'
  label?: string
  fullWidth?: boolean
  name: string
  value?: any
  onInputChange?: any
  onChange?: any
  clearOnBlur?:boolean
  style?:any
  values?: any
  defaultValue?: string
}

const Autofill = forwardRef((props: AutoProps, ref) => (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      className='mx-3 my-6'
      options={props.values ?? []}
      value={props.value}
      defaultValue={props.defaultValue}
      onInputChange={props.onInputChange}
      onChange={props.onChange}
      sx={{ width: props.fullWidth ? '95%' : '48%' }}
      renderInput={(params) => <TextField {...params} name={props.name} label={props.name} inputRef={ref} style={props.style} />}
    />
))

export default Autofill
