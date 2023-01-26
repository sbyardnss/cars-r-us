import { getColors, setColors } from "./database.js";

const colors = getColors();

// document.addEventListener(
//     "change",
//     (event) => {
//         for (const color of colors) {
//             if (event.target.value === color.id) {
//                 setColors(parseInt(event.target.value))
//             }
//         }
//     }
// )

export const colorSelection = () => {
    let html = `<select class="resource" id="colorResource">
    <option value="0">Prompt to select resource...</option>\n`
    for (const color of colors) {
        html += `<option value="${color.id}">${color.color}</option>\n`
    }
    html += `</select>`
    return html
}



document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colorResource") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setColors(parseInt(chosenOption))
        }
    }
)