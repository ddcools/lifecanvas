// routes/routes.js
import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";

const routes = [
  {
    path: '/signup',
    component: Signup,
    exact: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
]

export default routes;