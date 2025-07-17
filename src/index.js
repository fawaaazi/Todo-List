import { getBodyElements } from "./modules/bodyLayout.js";
import "./style.css"
import { uiActions } from "./modules/UI.js";

getBodyElements()

const addTask = document.getElementById("button-add-task");
addTask.addEventListener('click',uiActions.addTask)