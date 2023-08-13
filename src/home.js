import Image from './images/chicken2.jpg'

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container')

    const chickenImage = document.createElement('img');
    chickenImage.src = Image;

    home.appendChild(createParagraph("Simply delicious chicken since 2023."));
    imageContainer.appendChild(chickenImage)
    home.appendChild(imageContainer);
    home.appendChild(createParagraph("130 locations worldwide!"));
    home.appendChild(createParagraph("Order online or visit us in store"));

    return home
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.style.alignItems = 'flex-start';
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;