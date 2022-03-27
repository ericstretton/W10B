function addItemToCart(stuff){
    let cart = document.getElementById(`cart`);
    let item = document.createElement(`div`);
    let heading = document.createElement(`h3`);
    heading.innerText=stuff;
    console.log(heading);
    item.append(heading);
    console.log(item);
    item.style.cssText="width:30%;border:solid blue 3px;margin-top:10px";
    cart.append(item);
}

let cookieCart = JSON.parse(Cookies.get(`selectionCart`));
console.log(Cookies.get(`selectionCart`));

for (const color of cookieCart){
    addItemToCart(color);
    
}




console.log(Cookies.get(`selectionCart`));











