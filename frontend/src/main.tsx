import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux'
import Store from "./store";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import AnimePage from "./pages/AnimePage.tsx";
import ToastViewport from "./components/layout/ToastViewport.tsx";
import Search from "./pages/Search.tsx";
import Profile from "./pages/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/anime/:id",
    element: <AnimePage />
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/settings",
    element: <h1>Settings</h1>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <ToastViewport>
        <RouterProvider router={router} />
      </ToastViewport>
    </ReduxProvider>
  </React.StrictMode>
);

