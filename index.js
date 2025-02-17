/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 20;

const numNames = NAMES.length;
const numOcc = OCCUPATIONS.length;

function makeObjects() {
    const name = NAMES[Math.floor(Math.random() * numNames)]
    const occupation = OCCUPATIONS[Math.floor(Math.random() * numOcc)]
    const rate = 20 + (Math.floor(Math.random() * 180))

    return { name, occupation, rate };
}


const freelancers = Array.from({ length: NUM_FREELANCERS }, makeObjects);
console.log(freelancers);

function getMean(freelancers) {
    let sum = 0;
    for (const freelancer of freelancers) {
        sum = sum + freelancer.rate;
    }
    return mean = sum / freelancers.length;
}
const averageRate = getMean(freelancers);



function headerRow() {
    const $header = document.createElement("div");
    $header.classList.add("row", "headerRow");

    const $name = document.createElement("div");
    $name.classList.add("column");
    $name.textContent = "Name";

    const $occupation = document.createElement("div");
    $occupation.classList.add("column");
    $occupation.textContent = "Occupation";

    const $rate = document.createElement("div");
    $rate.classList.add("column");
    $rate.textContent = "Rate";

    $header.append($name, $occupation, $rate);

    return $header;
}




function freelancerCard(freelancer) {
    const { name, occupation, rate } = freelancer;

    const $row = document.createElement("div");
    $row.classList.add("row");

    const $name = document.createElement("div");
    $name.classList.add("column");
    $name.textContent = name;

    const $occupation = document.createElement("div");
    $occupation.classList.add("column");
    $occupation.textContent = occupation;

    const $rate = document.createElement("div");
    $rate.classList.add("column");
    $rate.textContent = `$${rate}/hr`;

    $row.replaceChildren($name, $occupation, $rate);

    return $row;
}




function freelancerCards() {
    const $row = document.createElement("p");
    $row.classList.add("rows");

    const $header = headerRow();

    const $freelancers = freelancers.map(freelancerCard);

    $row.replaceChildren($header, ...$freelancers);

    return $row;

}


function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
      <h1>Freelancer Forum</h1>
      <h3>The average rate of freelancers is $${averageRate}/hr</h3>
      <FreelancerRow></FreelancerRow>
    `;
    $app.querySelector("FreelancerRow").replaceWith(freelancerCards(freelancers));
}
render();