import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { forwardRef } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultiSelectProps {
    label: string
    fullWidth?: boolean
    ref: any
    name?: string
    onChange?: any
    val?: any
    values: string[]
}

const Autofill = forwardRef((props: MultiSelectProps, ref) => {
  const [data, setData] = React.useState<string[]>([]);
 
  function onChange(e){
     const val = e.target.value;
     setData(val)
  }

  return (
    <div style={{width: !props.fullWidth && '50%'}} className='relative top-1 mr-4 my-3'>
      <FormControl className='w-full' sx={{ m: 1}}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          multiple
          value={props.val ?? data}
          onChange={props.onChange ?? onChange}
          sx={{ width: '100%'}}
          input={<OutlinedInput inputRef={ref} name={props.name} id={props.name} fullWidth={true} label={props.label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected?.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.values?.map((label) => (
            <MenuItem
              key={label}
              value={label}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
})

export default Autofill;