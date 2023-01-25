import { getColors } from "./database.js";

const colors = getColors();

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "color") {
//             setColor(parseInt(event.target.value))
//         }
//     }
// )

export const colorSelection = () => {
    let html = `<select id="resource">
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
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)