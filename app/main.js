import CarController from "./Controllers/CarController.js";
import HomeController from "./Controllers/HomeController.js"
// import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  carController = new CarController()

  homeController = new HomeController()
}

window["app"] = new App();
