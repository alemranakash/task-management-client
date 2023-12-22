import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Dashboard = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-2" className="btn btn-primary mt-10 ml-5 flex justify-start drawer-button lg:hidden">
          ☰
        </label>
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="flex-1 pl-20 pt-20">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/newTask">Create New Task</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/previousTasks">Previous Task</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// import  { useState } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';
// import { NavLink, Outlet } from 'react-router-dom';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([
//     { id: 'task-1', content: 'Task 1' },
//     { id: 'task-2', content: 'Task 2' },
//     { id: 'task-3', content: 'Task 3' },
//     // ... other tasks
//   ]);

//   const onDragEnd = (result) => {
//     if (!result.destination) {
//       return; // Dropped outside a valid drop target
//     }

//     // Reorder the tasks based on the drag and drop result
//     const reorderedTasks = Array.from(tasks);
//     const [removedTask] = reorderedTasks.splice(result.source.index, 1);
//     reorderedTasks.splice(result.destination.index, 0, removedTask);

//     // Update the state with the new order of tasks
//     setTasks(reorderedTasks);
//   };

//   return (
//     <div>
//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <label htmlFor="my-drawer-2" className="btn btn-primary mt-10 ml-5 flex justify-start drawer-button lg:hidden">
//           ☰
//         </label>
//         <div className="drawer-content flex flex-col items-center justify-center">
//           {/* Page content here */}
//           <div className="flex-1 pl-20 pt-20">
//             {/* Wrap your Outlet with DragDropContext */}
//             <DragDropContext onDragEnd={onDragEnd}>
//               <Outlet tasks={tasks} setTasks={setTasks} />
//             </DragDropContext>
//           </div>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//             {/* Sidebar content here */}
//             <div>
//               <li>
//                 <NavLink to="/dashboard/newTask">Create New Task</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/dashboard/previousTasks">Previous Task</NavLink>
//               </li>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
