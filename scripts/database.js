


const database = {
    colors: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 150 },
        { id: 3, color: "Firebrick Red", price: 175 },
        { id: 4, color: "Spring Green", price: 200 }
    ],
    interiors: [
        { id: 1, style: "Beige Fabric", price: 280 },
        { id: 2, style: "Charcoal Fabric", price: 295 },
        { id: 3, style: "White Leather", price: 360 },
        { id: 4, style: "Black Leather", price: 475 }
    ],
    technology: [
        { id: 1, level: "Basic Package", price: 200 },
        { id: 2, level: "Navigation Package", price: 515 },
        { id: 3, level: "Visibility Package", price: 845 },
        { id: 4, level: "Ultra Package", price: 1280 }
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial", price: 280 },
        { id: 2, style: "17-inch Pair Radial Black", price: 320 },
        { id: 3, style: "18-inch Pair Spoke Silver", price: 415 },
        { id: 4, style: "18-inch Pair Spoke Black", price: 485 }
    ],
    types: [
        { id: 1, type: "Car" },
        { id: 2, type: "SUV"},
        { id: 3, type: "Truck"}
    ],
    customOrders: [
        {
            id: 1,
            colorId: 2,
            technologyId: 3,
            interiorId: 2,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}


export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}






export const getColors = () => {
    return database.colors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const getTypes = () => {
    return database.types.map(type => ({...type}))
}


export const setColors = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}