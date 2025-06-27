import RootLayout from "./components/RootLayout";
import AllBeersPage from "./pages/AllBeersPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RandomBeerPage from "./pages/RandomBeerPage";


const router = createBrowserRouter([
  { path: "/", Component: HomePage },

  {Component: RootLayout,
    children: [
        { path: "/beers", Component: AllBeersPage },
        { path: "/beers/:id", Component: DetailPage },
        { path: "/beers/randombeer", Component: RandomBeerPage },
    ],}
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
