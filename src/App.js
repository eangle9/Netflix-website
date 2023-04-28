import './App.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/login screen/LoginScreen';





function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <HomeScreen/>,
      },
      {
        path:"/login",
        element: <LoginScreen/>,
      }
  ]);


  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
