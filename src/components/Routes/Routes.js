import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../Blogs/Blogs";
import Errors from "../Errors/Errors";
import Home from "../Home/Home";
import QuizDetails from "../QuizDetails/QuizDetails";
import Statistics from "../Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) => {
          //console.log(params);
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <QuizDetails></QuizDetails>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
