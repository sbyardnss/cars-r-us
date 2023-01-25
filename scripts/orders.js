import { getColors, getTechnology, getInteriors, getWheels } from "./database.js";

const colors = getColors()
const technology = getTechnology()
const interiors = getInteriors()
const wheels = getWheels()



export const orders = () => {
    
}



















const buildOrderLists = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundTech = technology.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
}