
import  { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 text-center">
            <div className="container mx-auto">
                <div className="mb-8">
                    <img
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                        src={user.photoURL || "https://i.ibb.co/Yjtd198/user.png"}
                        alt="User Profile"
                    />
                    <h1 className="text-3xl font-bold">{user.displayName || "Guest User"}</h1>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-lg font-semibold text-gray-800 mb-4">User Information</h1>
                    <p className="text-gray-600 mb-2">
                        <span className="font-bold">Email:</span> {user.email || "Not available"}
                    </p>
                    {/* Add more user information fields as needed */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
