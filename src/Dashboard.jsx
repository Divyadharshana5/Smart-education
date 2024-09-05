import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("No token found. Please login.");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        toast.success("User data fetched successfully!");
      } catch (err) {
        toast.error("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-8 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Welcome</h2>
        <p className="text-lg mb-4">Hello, {user.name}!</p>
      </div>
    </div>
  );
};

export default Dashboard;
