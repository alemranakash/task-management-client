import { useContext } from "react";
import useTasks from "../../Hooks/useTasks";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";


const TaskDetails = () => {
    const [tasks, loading, refetch] = useTasks();
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { id } = useParams();

    if (loading) {
        return <div>Loading...</div>;
      }

      const singleData = tasks.find((request) => request._id === id);

      console.log(singleData);

    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-bold mb-6">Task Details</h1>
            <div className="min-h-screen  bg-gray-100 flex items-center justify-center">
                <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
          <span className="text-gray-700 font-bold">Title:</span> {singleData.title}
        </div>
                <div className="mb-4">
          <span className="text-gray-700 font-bold">Description:</span> {singleData.description}
        </div>
                <div className="mb-4">
          <span className="text-gray-700 font-bold">Title:</span> {singleData.deadline}
        </div>
                <div className="mb-4">
          <span className="text-gray-700 font-bold">Title:</span> {singleData.priority}
        </div>
                <div className="mb-4">
          <span className="text-gray-700 font-bold">Title:</span> {singleData.status}
        </div>



 
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;