import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()


// document.addEventListener(
//     "change",
//     (event) => {
//         for (const rim of wheels) {
//             if (event.target.value === rim.id) {
//                 setWheels(parseInt(event.target.value))
//             }
//         }
//     }
// )


export const wheelSelection = () => {
    let html = `<select class="resource" id="wheelResource">
    <option value="0">Prompt to select resource...</option>\n`
    for (const rim of wheels) {
        html += `<option value="${rim.id}">${rim.style}</option>\n`
    }
    html += `</select>`
    return html
}



document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheelResource") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setWheels(parseInt(chosenOption))
        }
    }
)