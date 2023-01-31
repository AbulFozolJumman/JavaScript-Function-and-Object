// 7(Object Properties/Keys and Values)

var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// 3 way to get object property value
// var penCount = shoppingCart.pen;
// console.log(penCount);

// var penCount2 = shoppingCart['pen'];
// console.log(penCount2);

var propertyName = 'mouse';
// var mouseValue = shoppingCart[propertyName];
// console.log(propertyName, mouseValue);

// Get object property and value by using JS reserve keywords
// var properties = Object.keys(shoppingCart);
// console.log(properties);

// var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

// 3 way to change/set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart)