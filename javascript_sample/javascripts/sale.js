let priceElement = document.getElementById("product").value;
let numberElement = document.getElementById("number").value;

function calc() {
    let price = parseInt(priceElement);
    let number = parseInt(numberElement);
    window.alert(price + "円が" + number + "個。小計は" + (price * number) + "円です");
}