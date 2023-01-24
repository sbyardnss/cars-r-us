


const database = {
    colors: [{
        id: 1,
        color: "Silver",
        price: 100
    },{
        id: 2,
        color: "Midnight Blue",
        price: 150
    },{
        id: 3,
        color: "Firebrick Red",
        price: 175
    },{
        id: 4,
        color: "Spring Green",
        price: 200
    }],
    interiors: [{
        id: 1,
        style: "Beige Fabric",
        price: 280
    },{
        id: 2,
        style: "Charcoal Fabric",
        price: 295
    },{
        id: 3,
        style: "White Leather",
        price: 360
    },{
        id: 4,
        style: "Black Leather",
        price: 475
    }],
    technology: [{
        id: 1,
        level: "Basic Package",
        price: 200
    },{
        id: 2,
        level: "Navigation Package",
        price: 515
    },{
        id: 3,
        level: "Visibility Package",
        price: 845
    },{
        id: 4,
        level: "Ultra Package",
        price: 1280
    }],
    wheels: [{
        id: 1,
        style: "17-inch Pair Radial",
        price: 280
    },{
        id: 2,
        style: "17-inch Pair Radial Black",
        price: 320
    },{
        id: 3,
        style: "18-inch Pair Spoke Silver",
        price: 415
    },{
        id: 4,
        style: "18-inch Pair Spoke Black",
        price: 485
    }]
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