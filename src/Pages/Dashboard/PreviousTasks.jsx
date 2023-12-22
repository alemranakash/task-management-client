import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import useTasks from "../../Hooks/useTasks";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

function PreviousTasks() {
  const [tasks, loading, refetch] = useTasks();
  const { user } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()


const userEmail = user.email
// console.log(userEmail);

  if (loading) {
    return <div>Loading...</div>;
  }



  const renderTable = (status) => {
    // const filteredTasks = tasks.filter((task) => task.status === status);

    const filteredTasks = tasks.filter((task) => task.status === status && task.requesterEmail === userEmail);



    const handleDeleteClick = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/tasks/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
        }
      });
    };




    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{status.toUpperCase()}</h2>
        <Droppable droppableId={status} type="TASK">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="overflow-x-auto"
            >
              <table className="min-w-full bg-white border border-gray-300 rounded shadow">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">Deadline</th>
                    <th className="py-2 px-4 border-b">Priority</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <Droppable droppableId={status} type="TASK">
                  {(provided) => (
                    <tbody
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {filteredTasks.map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index}
                        >
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="hover:bg-gray-100"
                            >
                              <td className="py-2 px-4 border-b">
                                {task.title}
                              </td>
                              <td className="py-2 px-4 border-b">
                                {task.description}
                              </td>
                              <td className="py-2 px-4 border-b">
                                {task.deadline}
                              </td>
                              <td className="py-2 px-4 border-b">
                                {task.priority}
                              </td>
                              <td className="py-2 px-4 border-b">
                                {/* {task.requesterEmail} */}
                                <button
                        className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteClick(task._id)}
                      >
                        {`Delete`}
                      </button>

                              </td>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
              </table>
            </div>
          )}
        </Droppable>
      </div>
    );
  };



  const handleDragEnd = (result) => {
   console.log(result);
  };
  

  return (
    <div className="container mx-auto p-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        {renderTable("to-do")}
        {renderTable("ongoing")}
        {renderTable("complete")}
      </DragDropContext>
    </div>
  );
}

export default PreviousTasks;








