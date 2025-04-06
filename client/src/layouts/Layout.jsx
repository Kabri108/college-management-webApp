import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebaar from '../components/Sidebaar';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../utils/axiosInstance';
import { setUser } from '../redux/slices/authSlice';

function Layout() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setUser(res.data));
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [token, dispatch]);

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebaar role={user?.role || "student"} />
      <div className="flex-1 flex flex-col">
        <Navbar name={user?.name} />
        <div className="p-4 overflow-auto">
          <Outlet context={user} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
