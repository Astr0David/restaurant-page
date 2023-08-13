import Image from './images/map.jpg'

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container1');

    const mapImage = document.createElement('img');
    mapImage.src = Image;

    textContainer.appendChild(createParagraph('Telephone: +44 1234567890'));
    textContainer.appendChild(createParagraph('Email: davidoschicken@gmail.com'));
    contact.appendChild(textContainer);
    imageContainer.appendChild(mapImage);
    contact.appendChild(imageContainer);
    contact.appendChild(createParagraph('Location: X marks the spot'));

    return contact
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadContact() {
    const main = document.getElementById("main");
    main.style.alignItems = 'center';
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;