import Blah2Controller from "./Controllers/Blah2Controller.js";
import BlahController from "./Controllers/BlahController.js";
import ValuesController from "./Controllers/ValuesController.js";
import VendingController from "./Controllers/VendingController.js";

class App {
  valuesController = new ValuesController();

  vendingController = new VendingController()

  blahController = new BlahController()

  blah2Controller = new Blah2Controller()
}

window["app"] = new App();
