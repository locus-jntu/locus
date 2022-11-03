import { TextField } from '@mui/material'

interface InputProps {
  size?: 'small' | 'large'
  label?: string
  name: string
  placeholder?: string
  helperText?: string
  width?: string | number
  variant?: 'standard' | 'outlined' | 'filled'
  onChange?: any;
  value?: string
}

const Input = (props: InputProps) => (
    <div style={{ minWidth: props.width ?? 'auto' }}>
      {props.label !== undefined && <label className='m-3' htmlFor={props.name} > {props.label} </label> }
      <TextField value={props.value} onChange={props.onChange} helperText={props.helperText ?? ''} InputLabelProps={{ shrink: false }} className='flex mx-3 mt-2 mb-5 ' placeholder={props.placeholder ?? ''} id={props.name} variant= {props.variant ?? 'outlined'} />
    </div>
)

export default Input
