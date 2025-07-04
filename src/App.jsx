
import { useEffect, useState } from 'react'
import classes from './styles.module.css';
import TodoItem from './components/todo-item';
import TodoDetails from './components/todo-detail';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog,setOpenDialog] = useState(false);


  async function fetchListofTodos(){
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      console.log(result);
      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');




      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');


      }




    } catch(e){

      console.log(e ); 
      setErrorMsg('Some error occured');
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    console.log(getCurrentTodoId);


    try {

      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)

      const details = await apiResponse.json();
     
      if(details) {

        setTodoDetails(details);
        setOpenDialog(true);

      } else {
        setTodoDetails(null);
         setOpenDialog(false);
      }

    }catch(error) {
      console.log(error);
    }
    
  }


  useEffect(() => {
    fetchListofTodos();
    

  },[]);


  if(loading){
    return <h1>Loading...</h1>
  }

  

  return (
    <div className={classes.mainWrapper}>
<h1 className={classes.headerTitle}>Todo app</h1>
<div className={classes.todoListWrapper}>

{
  todoList && todoList.length > 0 ?
  todoList.map(todoItem=> <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
   todo={todoItem}/>) : null
}


</div>

<TodoDetails
setOpenDialog={setOpenDialog}
openDialog={openDialog}
todoDetails={todoDetails}
setTodoDetails={setTodoDetails}

/>

    </div>
  )
}

export default App
