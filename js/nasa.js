// @channel Show Pict of Day
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// 1. Using this url, fetch data related to NASA’s picture of the day.
// 2. Display the returned object in the console.
// 3. Write a template function that will return a DOM component with the image, date, explanation, title, and 
// copyright. Remember to use semantic HTML.
// 4. Write a function that will display the component on the DOM. fetch from Nasa

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasa => nasa.json())
    .then(parsedNasa => {
        addNasaToDom(parsedNasa);
        console.table(parsedNasa);
    })
    const space = (imageNasa) => {
        return `<img src="${imageNasa.url}" alt="Nasa image">
    <p>${imageNasa.date}</p>
    <p>${imageNasa.explanation}</p>
    <p>${imageNasa.title}</p>
    <p>${imageNasa.copyright}</p>
    `
    }

const nasaContainer = document.querySelector(".container");

function addNasaToDom(imageNasa) {
    nasaContainer.innerHTML += space(imageNasa);
}
