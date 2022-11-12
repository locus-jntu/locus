import Modal from '@mui/material/Modal';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import lightTheme from '../styles/theme/lightTheme';
import { Button } from '@mui/material';

interface popupProps{
    open: boolean
    status: string
    setOpen: any
    loadingText: string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export default function Popup(props: popupProps) {
  
  const handleClose = () => props.setOpen(false);

  return (
      <Modal
        open={props.open}
        onClose={handleClose}
      >
        <div className='flex h-screen'>
          <div style={{width: 350,minHeight: 220, margin: 'auto',}} className='rounded bg-white flex flex-col justify-center items-center px-4'>
              {props.status === "success" ? 
              <>
                <CheckCircleIcon style={{fontSize: 48}} color='success' />
                <p className='my-4'>Successfully Updated !</p>
                <Button
                  //onClick={}
                  className="rounded w-full py-3 bg-secondary text-white hover:text-white"
                  sx={{
                    boxShadow: "none",
                    color: lightTheme.palette.secondary.main,
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Go to Dashboard
                </Button>
              </> : props.status === "loading" ? 
              <>
                <p className='my-4'>{props.loadingText}</p>
                <p>Please wait ... </p>
              </> :
              <>
                <SentimentVeryDissatisfiedIcon style={{fontSize: 48}} color='primary' />
                <p className='my-2'>Uh Oh! </p>
                <p className='mb-4'>Something went wrong</p>
                <Button
                  onClick={handleClose}
                  className="rounded w-full py-3 bg-secondary text-white hover:text-white"
                  sx={{
                    boxShadow: "none",
                    color: lightTheme.palette.secondary.main,
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Go Back
                </Button>
              </> 
              }
          </div>
        </div>
      </Modal>
  );
}
