import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";

const Dashboard = () => {return <h2>Dashboard</h2>};
const SurveyNew = () => {return <h2>SurveyNew</h2>};

function Router() {
const router = createBrowserRouter([
    {
        path: "/surveys",
        element: <Dashboard />,
    },
    {
        path: "/surveys/new",
        element: <SurveyNew />,
    },
    {
        path: "/",
        element: <Landing />,
    },
    // {
    //     path: "/auth/google/callback",
    //     element:
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;