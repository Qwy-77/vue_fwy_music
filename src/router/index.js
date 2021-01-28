import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home");
const Ranking = () => import("views/ranking/Ranking");
const SongList = () => import("views/songList/SongList");
const Singer = () => import("views/singer/Singer");
const Video = () => import("views/video/Video");
const MV = () => import("views/MV/Mv");

const Login = () => import("components/content/login/Login");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking
  },
  {
    path: "/songList",
    name: "SongList",
    component: SongList
  },
  {
    path: "/singer",
    name: "Singer",
    component: Singer
  },
  {
    path: "/video",
    name: "Video",
    component: Video
  },
  {
    path: "/mv",
    name: "MV",
    component: MV
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
