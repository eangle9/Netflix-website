import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/login screen/LoginScreen';
import SignUpScreen from './pages/signUpScreen/SignUpScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";





function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("user is loged out");
      }
    })

    return unsubscribe;

  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <HomeScreen /> : <Navigate replace to="/login" />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/signUp",
      element: <SignUpScreen />
    }
  ]);


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
