// content to be inserted into the HTML based on light/dark mode
let content = {
    'light': {
        "h1": "Light Mode",
        "button": "Dark Mode"
    },
    'dark': {
        "h1": "Dark Mode",
        "button": "Light Mode"
    }
}

let currentMode = "light";

document.querySelector("button").addEventListener("click", () => {
    // toggle dark mode by adding or removing the dark-mode class on the body element
    document.querySelector("body").classList.toggle("dark-mode");

    // switch current mode status
    if(currentMode == "light"){
        currentMode = "dark";
    }else{
        currentMode = "light";
    }

    // update text
    document.querySelector("h1").innerText = content[currentMode]["h1"];
    document.querySelector("button").innerText = content[currentMode]["button"];
});