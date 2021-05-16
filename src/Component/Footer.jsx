import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return (
        <>
            <div className=" col text-center Copyright">
                <p style={{marginBottom:"0px"}}>Copyright <CopyrightIcon style={{color:"red"}}/> Of HarryKnocker since Year: <span style={{color:"red"}}>{new Date().getFullYear()}</span> </p>
            </div>
        </>
    )
}

export default Footer;
