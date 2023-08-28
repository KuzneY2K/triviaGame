import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { HomeView } from "./views/HomeView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: HomeView
  }
]