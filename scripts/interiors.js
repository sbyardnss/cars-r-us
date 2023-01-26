import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

// document.addEventListener(
//     "change",
//     (event) => {
//         for (const interior of interiors) {
//             if (event.target.value === interior.id) {
//                 setInterior(parseInt(event.target.value))
//             }
//         }
//     }
// )


export const interiorSelection = () => {
    let html = `<select class="resource" id="intResource">
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
        if (changeEvent.target.id === "intResource") {
            const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setInterior(parseInt(chosenOption))
        }
    }
)