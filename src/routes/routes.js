import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";
import Profile from '../components/Profile/Profile';
import Welcome from "../components/Welcome/Welcome";
import Contact from "../components/Home/Contact/Contact";
import About from "../components/Home/About/About";
import Features from "../components/Home/Features/Features";

const routes = [
  {
    path: '/signup',
    component: Signup,
    exact: true
  },
  {
    path: '/',
    component: Welcome,
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
  },
  {
    path: '/contact',
    component: Contact,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/features',
    component: Features,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  }
]

export default routes;