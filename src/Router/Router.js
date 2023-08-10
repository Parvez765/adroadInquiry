import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import SingleCountryDetails from "../Components/HomeComponent/SingleCountryDetails";

const router = createBrowserRouter([
    {
        path : "/", element: <Main/>, children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/:id",
                loader: ({ params }) => {
                    return fetch(`http://dev.abroadinquiry.com:5001/get-a-country-details?cid=${params.id}`)
                },
                element : <SingleCountryDetails/>
            }
        ]
    }
])

export default router