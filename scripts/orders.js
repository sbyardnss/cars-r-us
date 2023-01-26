import { getColors, getTechnology, getInteriors, getWheels, getOrders } from "./database.js";

const colors = getColors()
const technology = getTechnology()
const interiors = getInteriors()
const wheels = getWheels()





const buildOrderLists = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundTech = technology.find(
        (tech) => {
            return tech.id === order.technologyId
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

    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`  


    let totalCost = foundTech.price + foundColor.price + foundInterior.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })

return `<li class="confirmedOrders">
${foundColor.color} with ${foundTech.level}, ${foundInterior.style}, and ${foundWheels.style} for a total cost of ${costString}
</li>`

}



export const orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderLists)
    html += listItems.join("")
    html += "</ul>"

    return html
}