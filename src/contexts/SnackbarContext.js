import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const types = {
    0: 'info',
    1: 'error'
}

export const SnackbarProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    
    function ShowSnackbarAlert(message, type = types[0]) {
        setOpen(true);
        setMessage(message);
        setType(type);
    }

    const handleClose = () => setOpen(false);

    return (
        <SnackbarContext.Provider value={{ ShowSnackbarAlert }}>
            {props.children}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert variant='outlined' severity={type} sx={{ width: '300px' }}>
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    )
}