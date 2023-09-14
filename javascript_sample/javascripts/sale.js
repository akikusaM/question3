let priceElement = document.getElementById("product");
let numberElement = document.getElementById("number");
let purchases = []; //追加
let products = [];

function calc() {
let sum = subtotal();
let postage  = calcPostageFromPurchase(sum);
let syoukei = sum;
sum += postage ;

let strvalue = display();

window.alert(`${strvalue}\n小計は${syoukei}円、送料は${postage}円です。合計は${sum}円です`);
purchases = [];
priceElement.value= "";
numberElement.value = "";
}
function add() {
let id = parseInt(priceElement.value);
let number = parseInt(numberElement.value);
let name = "";
let price = 0;
let purchase = {
id: id,
price: price,
number: number,
name :	name,
};
let find = false;

products = [];

productpush("オリジナルブレンド200g",500);
productpush("オリジナルブレンド500g",900);
productpush("スペシャルブレンド200g",700);
productpush("スペシャルブレンド500g",1200);

purchases.forEach(val => {
if(val.id == purchase.id)
{
  val.number += purchase.number;
  find = true; 
} 
} )

if(find == false)
{
purchase.name = products[purchase.id - 1].name;
purchase.price = products[purchase.id - 1].price;

purchases.push(purchase);
}

let sum = subtotal();
let strvalue = display();
window.alert(`${strvalue}\n小計${sum}円`);

}
function display() {
return purchases.map(purchase => {
return `${purchase.name} ${purchase.price}円:${purchase.number}点`
}).join("\n");
};

function subtotal() {
return purchases.reduce((prev, purchase) => {
return prev + purchase.price * purchase.number 
}, 0);
}function calcPostageFromPurchase(sum) {
if (sum == 0 || sum >= 3000) {
return 0;
} else if (sum < 2000){
return 500;
} else {
return 250;
}
}
function productpush(name,price) {
let product = {
name:		name,
price:	price,
}
products.push(product);

return;
}