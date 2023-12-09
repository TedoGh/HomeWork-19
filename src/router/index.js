import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },

  {
    element: <CreatePage />,
    path: "/create",
  },

  {
    element: <UpdatePage />,
    path: "/update/:todoId",
  },
]);

export default router;
