import { getTechnology } from "./database.js";

const tech = getTechnology()

export const techSelection = () => {
    let html = `<select id="resource">
    <option value="0">Prompt to select resource...</option>\n`
    for (const variation of tech) {
        html += `<option value="${variation.id}">${variation.level}</option>\n`
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