// routes/routes.js
import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";
import Profile from '../components/Profile/Profile';

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
  },
  {
    path: '/profile',
    component: Profile,
    exact: true
  }
]

export default routes;