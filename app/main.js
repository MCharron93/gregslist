import CarController from "./Controllers/CarController.js";
// import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  carController = new CarController ()
}

window["app"] = new App();
