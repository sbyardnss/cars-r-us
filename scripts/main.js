import { getColors, getTechnology, getInteriors, getWheels } from "./database.js";
import { carsRUs } from "../cars-r-us.js";
const colors = getColors()
const technology = getTechnology()
const interiors = getInteriors()
const wheels = getWheels()


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()
