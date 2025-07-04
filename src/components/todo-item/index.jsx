import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


function TodoLitem({todo, fetchDetailsOfCurrentTodo}) {

    console.log(todo);

    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            
        }}>
           <CardContent>
            <Typography variant="h5" color={"text.secondary"}>
                {todo?.todo}
            </Typography>
           </CardContent>
           <CardActions>
            <Button
            onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
            
            sx={{
                color: "#fff",
                backgroundColor: "#000000",
                opacity: "0.75",
                "&:hover": {
                    opacity: "1",
                    backgroundColor: "#000000",
                    color: "#fff"
                }
            }}>Details</Button>
           </CardActions>
        </Card>
    );
}


export default TodoLitem;
