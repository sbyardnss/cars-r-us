import { getWheels } from "./database.js";

const wheels = getWheels()

export const wheelSelection = () => {
    let html = `<select id="resource">
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
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)