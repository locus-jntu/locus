import Modal from '@mui/material/Modal';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import lightTheme from '../styles/theme/lightTheme';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface popupProps{
    open: boolean
    status: string
    setOpen: any
    loadingText: string
    successPageRoute?: string
    successButtonText?: string
    onSuccessButtonClick?: any
}

export default function Popup(props: popupProps) {
  
  const handleClose = () => props.setOpen(false);

  const router = useRouter();

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
                  onClick={() => {
                    props.successPageRoute ? router.push(props.successPageRoute) :  props.onSuccessButtonClick();
                  }}
                  className="rounded w-full py-3 bg-secondary text-white hover:text-white"
                  sx={{
                    boxShadow: "none",
                    color: lightTheme.palette.secondary.main,
                  }}
                  color="secondary"
                  variant="contained"
                >
                  {props.successButtonText}
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
