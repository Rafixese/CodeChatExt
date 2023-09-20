import React from 'react';
import {Button, styled} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';

function Popup() {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Do something with the files
            console.log(files);
        }
    };

    return (
        <Box component="div" className="App">
            <h1>CodeChat</h1>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon/>} style={{whiteSpace: 'nowrap'}}>
                Select your directory
                {/* @ts-expect-error */}
                <input style={{display: "none"}} id="DirInput" type="file" webkitdirectory="" onChange={handleFileChange}/>
            </Button>
        </Box>
    );
}

export default Popup;
