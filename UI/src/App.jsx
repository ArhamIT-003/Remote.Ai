import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat-page/Chat";
import RootLayout from "./pages/Layout/Layout";
import DashboardLayout from "./pages/Layout/Dashboard-Layout";
import SignInPage from "./pages/Sign-in/Sign-in";
import SignupPage from "./pages/Sign-up/Sign-up";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/dashboard/chat/:id", element: <Chat /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
