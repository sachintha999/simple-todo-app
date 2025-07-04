import { Button, DialogActions, DialogTitle, Dialog } from "@mui/material";
import { Fragment } from "react";



function TodoDetails({todoDetails, openDialog, setOpenDialog, setTodoDetails}) {

    return <Fragment>
        <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={() => 
                {
                    setOpenDialog(false);
                    setTodoDetails(null);
                }}
                > Close</Button>
            </DialogActions>
        </Dialog>

    </Fragment>

}

export default TodoDetails;