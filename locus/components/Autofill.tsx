import { TextField, Autocomplete } from '@mui/material'
import { forwardRef } from 'react'

interface AutoProps {
  size?: 'small' | 'large'
  label?: string
  fullWidth?: boolean
  name: string
  value?: any
  onChange?: any
  clearOnBlur?:boolean
  style?:any
}

const Autofill = forwardRef((props: AutoProps, ref) => (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      className='mx-3 my-6'
      options={top100Films}
      value={props.value}
      onChange={props.onChange}
      sx={{ width: props.fullWidth ? '97%' : '48%' }}
      renderInput={(params) => <TextField {...params} label={props.name} inputRef={ref} />}
    />
))

const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'Other'
]

export default Autofill
