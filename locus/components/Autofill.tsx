import { TextField, Autocomplete } from '@mui/material'

interface AutoProps {
  size?: 'small' | 'large'
  label?: string
  fullWidth?: boolean
  name: string
}

const Autofill = (props: AutoProps) => (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      className='mx-3 mt-3 mb-5'
      options={top100Films}
      sx={{ width: '50%' }}
      renderInput={(params) => <TextField {...params} label={props.name} />}
    />
)

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003
  }
]

export default Autofill
