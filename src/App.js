import Header from './components/Header'
import Tasks from './components/Tasks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import React, { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About'
function App() {
  const tasksMap=[
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder:true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder:true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder:false,
    }
    
  ]
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState(tasksMap)
  const deleteTask = (id) => {
    // await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method:'DELETE',
    // })


    setTasks(tasks.filter((task)=>task.id!==id))
  }
  // // useEffect
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTasks()
  // }, [])
  // // Fetch Tasks

  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data= await res.json()
          // return data
  // }


  // Fetch Task


  // const fetchTasks = async (id) => {
  //   const res = await fetch('http://localhost:5000/tasks/${id}')
  //   const data= await res.json()
        // return data
  // }

  

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id? {...task,reminder:!task.reminder}: task))
    
    // const taskToToggle = await fetchTask(id)
    // const updTask={...taskToToggle,reminder:!taskToToggle.reminder}
    // const res = await fetch('http://localhost:5000/tasks/{id}', {
    //   method: 'UPDATE',
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body: JSON.stringify(updTask)
      

    // })
    // const data=await res.json()
     
  }
  const addTask = (task) => {
    const id=Math.floor(Math.random()*10000)+1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    
    // const res = await fetch('http://localhost:5000/tasks', {
    //   methods: 'POST',
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify(task)
    // })
    // const date =await res.json()
    // setTasks([...tasks,data])
  }
  // toggle
  return (
    <Router>
      <div className="container">
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
        <Route path='/' exact render={(props) => (
          <>
            {
              showAddTask &&
              <AddTask onAdd={addTask}></AddTask>
            }
            {
              tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
                : (
                  "No Tasks To Show"
                )
            }
          </>
        )}></Route>
        <Route path='/about' component={About}></Route>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
