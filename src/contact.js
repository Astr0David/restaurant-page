import Image from './map.jpg'

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const mapImage = document.createElement('img');
    mapImage.src = Image;

    contact.appendChild(createParagraph('Telephone: +44 1234567890'));
    contact.appendChild(createParagraph('Email: davidoschicken@gmail.com'));
    contact.appendChild(createParagraph('Location: X marks the spot'));
    imageContainer.appendChild(mapImage);
    contact.appendChild(imageContainer);

    return contact
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;