import { getTechnology, setTech } from "./database.js";

const tech = getTechnology()

// document.addEventListener(
//     "change",
//     (event) => {
//         for (const x of tech) {
//             if (event.target.value === x.id) {
//                 setTech(parseInt(event.target.value))
//             }
//         }
//     }
// )



export const techSelection = () => {
    let html = `<select class="resource" id="techResource">
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
        if (changeEvent.target.id === "techResource") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setTech(parseInt(chosenOption))
        }
    }
)