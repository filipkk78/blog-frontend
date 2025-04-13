import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Post from "./components/Post/Post";
import Home from "./components/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <Post/> },
    ],
  },
];

export default routes;
