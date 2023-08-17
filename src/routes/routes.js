import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";
import Profile from '../components/Profile/Profile';
import Welcome from "../components/Welcome/Welcome";

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
  },
  {
    path: '/welcome',
    component: Welcome,
    exact: true
  }
]

export default routes;