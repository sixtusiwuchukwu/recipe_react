import "./App.css";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Recipe from "./pages/recipe";
import Navbar from "./component/nav";
import Footer from "./component/footer";
import CreateRecipeForm from "./component/recipe/recipeForm";

const Layout = () => {
  return (
    <div className="App">
          <Navbar />
          <main>
              <Outlet /> {/* This renders the routed components */}
          </main>
          <Footer/>
      </div>
  );
};


const NotFound = () => {
  return (
    <div>
      <p>404</p>
      <h3>The page you are looking for could not be found.</h3>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Use Layout as the root element
        errorElement: <NotFound />, // Handle not found pages within this route
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "recipe/create",
                element: <CreateRecipeForm />,
            }, {
                path: "/recipe/edit",
                element: <CreateRecipeForm />,
            },
            {
                path: "recipe/:id",
                element: <Recipe />,
            },
        ],
    },
]);


  return ( 
      <RouterProvider router={router} />
  );
}

export default App;
