import theClassicBurger from './images/classicburger.jpg'
import theSpicyBurger from './images/spicyburger.jpg'
import theVeganBurger from './images/veganburger.jpg'
import theClassicWrap from './images/classicwrap.png'
import theSpicyWrap from './images/spicywrap.png'
import theLargeClassicWrap from './images/largeclassicwrap.png'
import theClassicBite from './images/classicchickenbite.jpg'
import theSpicyBite from './images/spicychickenbite.jpg'
import theClassicWings from './images/classicwings.png'
import theHotWings from './images/hotwings.png'
import theClassicTenders from './images/classictenders.jpg'
import theSpicyTenders from './images/spicytenders.jpg'
import theClassicFries from './images/classicfries.jpg'
import theCheeseFries from './images/cheesefries.jpg'

const menuItems = [
    {
        image: theClassicBurger,
        name: 'Classic Burger',
        price: '£5.99',
        description: 'Chicken fillet, lettuce, pickles, mayo'
    },
    {
        image: theSpicyBurger,
        name: 'Spicy Burger',
        price: '£5.99',
        description: 'Spicy chicken fillet, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: theVeganBurger,
        name: 'Vegan Burger',
        price: '£6.99',
        description: 'Vegan fillet, lettuce, spicy sauce, pink pickled onions'
    },
    {
        image: theClassicWrap,
        name: 'Classic Wrap',
        price: '£3.99',
        description: 'Tender, lettuce, pickles, mayo'
    },
    {
        image: theSpicyWrap,
        name: 'Spicy Wrap',
        price: '£3.99',
        description: 'Spicy tender, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: theLargeClassicWrap,
        name: 'Large Classic Wrap',
        price: '£4.99',
        description: 'Two tenders, lettuce, pickles, mayo'
    },
    {
        image: theSpicyWrap,
        name: 'Large Spicy Wrap',
        price: '£4.99',
        description: 'Two spicy tenders, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: theClassicBite,
        name: 'Classic Chicken Bite',
        price: '£2.99',
        description: 'Tender, pickles, mayo'
    },
    {
        image: theSpicyBite,
        name: 'Spicy Chicken Bite',
        price: '£2.99',
        description: 'Spicy tender, spicy sauce, spicy slaw'
    },
    {
        image: theClassicWings,
        name: 'Classic Wings',
        price: '£3.49',
        description: ''
    },
    {
        image: theHotWings,
        name: 'Hot Wings',
        price: '£3.49',
        description: ''
    },
    {
        image: theClassicTenders,
        name: 'Classic Tenders',
        price: '£3.49',
        description: ''
    },
    {
        image: theSpicyTenders,
        name: 'Spicy Tenders',
        price: '£3.49',
        description: ''
    },
    {
        image: theClassicFries,
        name: 'Classic Fries',
        price: '£1.49',
        description: ''
    },
    {
        image: theCheeseFries,
        name: 'Cheese Fries',
        price: '£1.99',
        description: ''
    },
];

function createMenuItem(itemData) {
    const menuItem = document.createElement('div');
    const image = document.createElement('img');
    image.src = itemData.image;
    menuItem.appendChild(image);
    menuItem.appendChild(createParagraph(itemData.name, 'title'));
    menuItem.appendChild(createParagraph(itemData.price, 'price'));
    if (itemData.description) {
        menuItem.appendChild(createParagraph(itemData.description, 'description'));
    }
    return menuItem;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menuItems.forEach(itemData => {
        const menuItem = createMenuItem(itemData);
        menu.appendChild(menuItem);
    });

    return menu;
}

function createParagraph(text, className) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    if (className) {
        paragraph.classList.add(className);
    }
    return paragraph;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.style.alignItems = 'flex-start';
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;