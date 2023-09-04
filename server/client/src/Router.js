import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Header = () => {return <h2>Header</h2>};
const Dashboard = () => {return <h2>Dashboard</h2>};
const SurveyNew = () => {return <h2>SurveyNew</h2>};
const Landing = () => {return <h2>Landing</h2>};

function Router() {
const router = createBrowserRouter([
    {
      path: "/header",
      element: <Header />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/surveynew",
        element: <SurveyNew />,
    },
    {
        path: "/",
        element: <Landing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;