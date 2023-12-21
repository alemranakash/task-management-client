// import React from 'react';
// import { useForm } from 'react-hook-form';

// const CreateNewTask = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     // Handle the form submission logic here (e.g., send data to the server)
//     console.log(data);
//   };

//   return (
//     <div>
//       <h1>New Task</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             name="title"
//             ref={register({ required: 'Title is required' })}
//           />
//           {errors.title && <span>{errors.title.message}</span>}
//         </div>

//         <div>
//           <label>Description</label>
//           <textarea
//             name="description"
//             ref={register({ required: 'Description is required' })}
//           />
//           {errors.description && <span>{errors.description.message}</span>}
//         </div>

//         <div>
//           <label>Deadline</label>
//           <input
//             type="date"
//             name="deadline"
//             ref={register({ required: 'Deadline is required' })}
//           />
//           {errors.deadline && <span>{errors.deadline.message}</span>}
//         </div>

//         <div>
//           <label>Priority</label>
//           <select name="priority" ref={register}>
//             <option value="low">Low</option>
//             <option value="moderate">Moderate</option>
//             <option value="high">High</option>
//           </select>
//         </div>

//         <div>
//           <button type="submit">Create Task</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateNewTask;


// *=================


import { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';

const CreateNewTask = () => {
    const axiosPublic = useAxiosPublic()

  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = task.title
    const description = task.description
    const deadline = task.deadline
    const priority = task.priority
    const status= 'to-do'

    const taskData= {
        title, description, deadline, priority, status
    }

    console.log(taskData);

    const taskPost = await axiosPublic.post('/tasks', taskData);
    console.log(taskPost.data)
    if (taskPost.data.insertedId) {
        swal({
            title: 'Task Created',
            text: 'Task has been successfully created.',
            icon: 'success',
        });
    }



    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewTask;


















// import React from 'react';

// const CreateNewTask = () => {
//     return (
//         <div>
//             <h1>New task</h1>
//         </div>
//     );
// };

// export default CreateNewTask;