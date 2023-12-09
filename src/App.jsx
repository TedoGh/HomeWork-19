import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
