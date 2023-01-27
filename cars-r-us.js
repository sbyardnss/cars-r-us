import { colorSelection } from "./scripts/colors.js";
import { interiorSelection } from "./scripts/interiors.js";
import { techSelection } from "./scripts/technology.js";
import { wheelSelection } from "./scripts/wheels.js";
import { orders } from "./scripts/orders.js";
import { addCustomOrder } from "./scripts/database.js";
import { Types } from "./scripts/types.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder();
        }
    }
)






export const carsRUs = () => {
    return `
    <h1>Cars-R-Us</h1>
    
    <article class="choices">
        <section class="choice_color">
            <h2>Colors</h2>
            ${colorSelection()}
        </section>
        <section class="choice_interior">
            <h2>Interiors</h2>
            ${interiorSelection()}

        </section>
        <section class="choice_technology">
            <h2>Technology</h2>
            ${techSelection()}
        </section>
        <section class="choice_wheels">
            <h2>Wheels</h2>
            ${wheelSelection()}
        </section>
    </article>
    <article>
        <h3>Body Types</h3>
        ${Types()}
    </article>

    <article>
            <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="orderConfirmation">
        <h2>Orders placed</h2>

        ${orders()}
    </article>
        
`  
}