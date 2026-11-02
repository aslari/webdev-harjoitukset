"use strict";

document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInput = document.querySelector("#qty")
    let promoInput = document.querySelector("#promo")

    const price = parseInt(priceInput.value);
    const qty = parseInt(qtyInput.value);
    const promoCode = promoInput.value;

    let total_price = price * qty

    for (let i = 1; i <= qty; i++) {
        console.log(`Esine ${i} - hinta ${price}`)
    }

    let discount;
    do {
        discount = Math.random();
        console.log(discount)
    } while (discount > 0.1)
        console.log(discount)

    switch(promoCode) {
        case "ale":
            total_price = total_price * 0.7
            break;
        case "super2026":
            total_price *= 0.5
            break;
        default:
            console.log("Virheellinen promokoodi");
    }

    let tekstikappale = document.querySelector("#result");
    tekstikappale.textContent = `Hinta: ${total_price}`;
    console.log(`Hinta: ${price}`)

})