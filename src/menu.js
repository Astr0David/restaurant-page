import theClassicBurger from './images/classicburger.jpg'
import theSpicyBurger from './images/spicyburger.jpg'

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const classicBurger = document.createElement('div');
    const classicBurgerImage = document.createElement('img');
    classicBurgerImage.src = theClassicBurger;
    classicBurger.appendChild(classicBurgerImage);
    classicBurger.appendChild(createParagraph('Classic Burger'))
    classicBurger.appendChild(createParagraph('$5.99'))
    classicBurger.appendChild(createParagraph('Chicken fillet, lettuce, pickles, mayo'))
    
    const spicyBurger = document.createElement('div');
    const spicyBurgerImage = document.createElement('img');
    spicyBurgerImage.src = theSpicyBurger;
    spicyBurger.appendChild(spicyBurgerImage);
    spicyBurger.appendChild(createParagraph('Spicy Burger'))
    spicyBurger.appendChild(createParagraph('$5.99'))
    spicyBurger.appendChild(createParagraph('Chicken fillet, lettuce, spicy sauce, spicy slaw'))
    
    menu.appendChild(classicBurger)
    menu.appendChild(spicyBurger)

    return menu
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;