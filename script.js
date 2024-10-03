//Add a Listener when a click happens from html
// For each time a .hidden class is found
// change .hidden class to showing
document.querySelector(".clickme").addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach((item) => {
        item.classList.toggle("showing");
    });
});

//alert('You successfully linked your JavaScript file!');