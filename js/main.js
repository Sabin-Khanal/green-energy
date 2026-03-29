
// Green Energy — main.js
// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);


// Get all buttons in a NODE LIST of buttons (array-like structure)
const buttons = document.querySelectorAll(".tab-btn");


// Resource object — 3 sub-objects with meaningful names
// Each sub-object has: headingContent, bodyText, imgUrl, imgAlt
const resources = {
    solar: {
        headingContent: "Community Solar Programs",
        bodyText: "Community solar programs allow households without rooftop access to subscribe to a share of a larger solar farm and receive credits on their electricity bills. Monthly subscriptions often start at under $20, and participants can save 10–15% on their energy costs. Unlike rooftop installations that can cost $15,000 or more, community solar requires zero upfront investment or equipment. Over 40 US states now have active community solar programs, making renewable electricity genuinely accessible to renters, condo owners, and anyone on an average budget.",
        imgUrl: "./img/img-1.jpg",
        imgAlt: "Solar panels in a sunny field representing community solar programs"
    },
    wind: {
        headingContent: "Green Energy Tariffs & Wind Co-ops",
        bodyText: "Many utility providers now offer green energy tariffs — flat-rate premiums of just $5–$15 per month added to your existing electricity bill. This small addition funds the construction and operation of wind farms. Energy cooperatives take this further: members pool resources to collectively own wind turbines and share in the profits. Some agricultural cooperatives have reduced member energy bills by 30–40% by jointly owning local wind infrastructure. These models democratize energy ownership, giving ordinary households a stake in the renewable grid without requiring engineering expertise or large capital.",
        imgUrl: "./img/img-2.jpg",
        imgAlt: "Wind turbines generating clean electricity on rolling farmland"
    },
    efficiency: {
        headingContent: "Home Efficiency & Government Incentives",
        bodyText: "The most affordable clean energy is the energy you never use. Weatherization grants, rebate programs, and low-interest green loans help average households dramatically cut consumption. LED upgrades, smart thermostats, and improved insulation can reduce energy bills by 20–30% at modest upfront cost. Federal and provincial governments offer rebates covering 30–40% of heat pump installation costs. When combined with time-of-use electricity pricing, these improvements slash both bills and emissions — no solar panels required. Start with a free home energy audit from your local utility to discover your biggest savings opportunities.",
        imgUrl: "./img/img-3.jpg",
        imgAlt: "Energy-efficient home with solar panels and smart technology"
    }
};


// Get all Reference to the HTML container for dynamic content
const dynamicContent = document.getElementById("dynamic-content");


// The first button in the NODE LIST gets id="active-button" on page load
buttons[0].setAttribute("id", "active-button");

// First content from resource-object loaded on page load
const firstKey = Object.keys(resources)[0];
const { headingContent: h0, imgUrl: i0, imgAlt: a0, bodyText: b0 } = resources[firstKey];
dynamicContent.innerHTML =
    `<h1>${h0}</h1>
     <img src="${i0}" alt="${a0}">
     <p>${b0}</p>`;


// handleSelection function
function handleSelection(event) {

    // Remove id="active-button" from whichever button currently has it
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }

    // Set id="active-button" on the clicked button
    event.target.setAttribute("id", "active-button");

    // Check which button was clicked; load corresponding content
    const clicked = event.target.dataset.solution;

    if (clicked === "solar") {
        const { headingContent, imgUrl, imgAlt, bodyText } = resources.solar;
        dynamicContent.innerHTML =
            `<h1>${headingContent}</h1>
             <img src="${imgUrl}" alt="${imgAlt}">
             <p>${bodyText}</p>`;

    } else if (clicked === "wind") {
        const { headingContent, imgUrl, imgAlt, bodyText } = resources.wind;
        dynamicContent.innerHTML =
            `<h1>${headingContent}</h1>
             <img src="${imgUrl}" alt="${imgAlt}">
             <p>${bodyText}</p>`;

    } else if (clicked === "efficiency") {
        const { headingContent, imgUrl, imgAlt, bodyText } = resources.efficiency;
        dynamicContent.innerHTML =
            `<h1>${headingContent}</h1>
             <img src="${imgUrl}" alt="${imgAlt}">
             <p>${bodyText}</p>`;
    }
}


// Register all buttons to the click event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}
