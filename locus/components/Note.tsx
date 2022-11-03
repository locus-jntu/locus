import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

interface Noteprops{
    type: 'course'|'internship'
    data: any
    onClose: any;
}

const Note = (props: Noteprops) => (
    <div style={{minWidth: 250}} className="flex py-2 items-center pl-6 pr-3 bg-bg rounded m-3 justify-between">
       {
           props.type=='course' ?
           <p>{props.data.cname} | {props.data.org}</p> :
           <p>{props.data.role} | {props.data.org} - {props.data.dur}</p>
       }
        

        <IconButton onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
    </div>
)

export default Note
