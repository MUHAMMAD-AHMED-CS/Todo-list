// import React, { useState } from 'react'
// import axios from 'axios'

// function Creat() {
//   const [task, setTask] = useState()
//   const handleAdd = () =>{
  
//     axios.post('http://localhost:3001/add', {task: task})
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
    
//   }
//   return (
//     <div className='flex flex-row justify-between items-center '>
//         <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type='text' name='' id='' placeholder='Enter Task' onChange={(e)=>{setTask(e.target.value)}}/>
//         <button className= 'py-1 text-white rounded-full px-4 ml-5 bg-slate-900 hover:bg-slate-400 focus:after:scale-110  transition-all ' type='button' onClick={handleAdd}>Add</button>
//     </div>
//   )
// }

// export default Creat


import React, { useState } from 'react';
import axios from 'axios';

function Creat({ onTaskAdded }) {
  const [task, setTask] = useState('');

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3001/add', { task });
      onTaskAdded(); // Call the function to refresh the todos
      setTask(''); // Clear the input after adding
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-row justify-between items-center'>
      <input
        className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
        type='text'
        placeholder='Enter Task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className='py-1 text-white rounded-full px-4 ml-5 bg-slate-900 hover:bg-slate-400 focus:after:scale-110 transition-all'
        type='button'
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default Creat;
