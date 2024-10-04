// import React, { useEffect, useState } from 'react'
// import Creat from './Creat'
// import axios from 'axios'
// import { RiCheckboxBlankCircleLine } from "react-icons/ri";
// import { MdDeleteForever } from "react-icons/md";
// import { RiCheckboxCircleLine } from "react-icons/ri";

// function Home() {
//     const [todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         axios.get('http://localhost:3001/get')
//         .then(result => setTodos(result.data))
//         .catch(err => console.log(err))
//     },[])

//     const handleEdit = (id) => {
//         axios.put('http://localhost:3001/update/'+ id)
//         .then(result => console.log(result))
//         .catch(err => console.log(err))

        
//     }

//     const handelDel = (id) =>{
  
//         axios.put('http://localhost:3001/del/'+ id)
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
        
//       }
//         return (
//         <div className='flex flex-col justify-center items-center bg-slate-100 w-screen h-screen'>
//             <h2 className='font-bold text-4xl text-justify mb-12' >Todolist</h2>
//             <Creat />
//             <div className='w-[40%] md:w-[20%] rounded-lg mt-10'>
//             { 
//                 todos.length === 0 ?
//                     <div  ><h2>No Active tasks</h2> </div> :
//                     todos.map(todo => (
//                         <div  className = {`items-center m-2 flex flex-row border-2 ${todo.done? 'bg-green-500' : 'bg-red-500'} rounded-full p-3`}>
//                         {todo.done===false?
//                         <RiCheckboxBlankCircleLine  onClick={() => handleEdit(todo._id)}/>
//                         :
//                         <RiCheckboxCircleLine />}
//                         <div className='ml-4'>{todo.task}</div>
//                         <button className='ml-auto' onClick={()=>handelDel(todo._id)}><MdDeleteForever /></button>
//                         </div>
//                     )
//                     )
//             }
//             </div>
//         </div>
//     )
// }

// export default Home


import React, { useEffect, useState } from 'react';
import Creat from './Creat';
import axios from 'axios';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";


function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const result = await axios.get('http://localhost:3001/get');
      setTodos(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3001/update/${id}`);
      fetchTodos(); // Refresh the todo list
    } catch (err) {
      console.log(err);
    }
  };

  const handelDel = async (id) => {
    try {
      await axios.put(`http://localhost:3001/del/${id}`);
      fetchTodos(); // Refresh the todo list
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 w-screen h-screen'>
        
      <h2 className='font-bold text-4xl text-justify mb-12'>Todolist</h2>
      <Creat onTaskAdded={fetchTodos} /> {/* Pass fetchTodos as a prop */}
      <div className='w-[40%] md:w-[20%] rounded-lg mt-10'>
        {loading ? (
          <h2>Loading...</h2>
        ) : todos.length === 0 ? (
          <h2>No Active tasks</h2>
        ) : (
          todos.map(todo => (
            <div key={todo._id} className={`items-center m-2 flex flex-row border-2 ${todo.done ? 'bg-green-500' : 'bg-red-500'} rounded-full p-3`}>
              {todo.done === false ? (
                <RiCheckboxBlankCircleLine onClick={() => handleEdit(todo._id)} />
              ) : (
                <RiCheckboxCircleLine />
              )}
              <div className={`ml-4 ${todo.done?'line-through': 'no-underline'} `}>{todo.task}</div>
              <button className='ml-auto' onClick={() => handelDel(todo._id)}><MdDeleteForever /></button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;

