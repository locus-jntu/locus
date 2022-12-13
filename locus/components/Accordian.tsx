import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from '../utility/data/profileData';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface accordianProps {
    data: any[];
}

export default function ControlledAccordions(props: accordianProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
     {
         props.data.map((yearData,ind) => ( 
            <Accordion className='my-4' expanded={expanded === `panel${ind}`} onChange={handleChange( `panel${ind}`)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{border: '1px solid gray'}}
                className='py-2 border-2 rounded'
                >
                <p>{yearData.year}</p>
                </AccordionSummary>
                <AccordionDetails className='py-4'>
                    {
                        yearData.depts.map(deptData => (
                            <>
                                <p className='bg-secondary text-white text-xl uppercase font-bold px-8 py-1 rounded-full inline'>{deptData.dept}</p>
                                <div className='grid-cols-3 grid my-4'>
                                    {deptData.data.map(alumniData => (
                                        <div className='text-center rounded hover:bg-slate-200 py-2'>
                                            <p className='mr-2 font-semibold text-lg'>{alumniData.rollnumber}</p>
                                            <p>{alumniData.name} <LinkedInIcon /> </p> 
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))
                    }
                   
                </AccordionDetails>
            </Accordion>
         ))
     }
      

    </div>
  );
}