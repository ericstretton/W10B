function addItem(item){
    console.log(item);
    let itemName = item.querySelector(`h2`).innerText;
    cart.push(itemName);
    Cookies.set(`selectionCart`, JSON.stringify(cart));
    console.log(cart);
    window.location.href="selection.html"
}
let cart = [];


if (cart != ""){
    console.log("Thank you for your selection");
}else {
        itemName = alert('Please Select a Color');
    
}






