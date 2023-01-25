import { getInteriors } from "./database.js";

const interiors = getInteriors()


export const interiorSelection = () => {
    let html = `<select id="resource">
    <option value="0">Prompt to select resource...</option>\n`
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.style}</option>\n`
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