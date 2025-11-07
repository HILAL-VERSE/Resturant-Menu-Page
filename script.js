const productTemplate = document.querySelector('#product-template');
const insertHere = document.querySelector('#insert-here');


for (let i=0; i < 6; i++) {
    const productBox = productTemplate.content.cloneNode(true);
    insertHere.appendChild(productBox);
}

