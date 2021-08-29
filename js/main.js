// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

// variabili const 
const nameBurger = document.getElementById('name-Burger');
const ingredients = document.querySelectorAll('input[type="checkbox"]');
const nameDiscount = document.getElementById('discount');
const btnCalculate = document.querySelector('button');
const totalPrice = document.getElementById('totaleprice');
const removeCheck = document.getElementsByClassName('checkB'); 
let btnAnnulla = document.getElementById('annulla');


// FUNZIONE ANNULLA 
btnCalculate.addEventListener('click',
    function () {
        btnAnnulla.style.display = "block";
        btnCalculate.style.display = "none";
        removeCheck.value = ('');  // remove check on checkbox;
    })


// azzero contenuto;
btnAnnulla.addEventListener('click',
    function () {
        location.reload();
        nameBurger.value = ('');
        nameDiscount.value = ('');

    })

// FUNZIONE AL CLICK CALCULATE
btnCalculate.addEventListener('click', yourPrice);
// non inserisco le parentesi perchè associa la funzione all'evento con le parentesi la invocherebbe direttamente ;


// funzione controllo del nome;
function checkName() {
    console.log(nameBurger.value);
    if (nameBurger.value == '' || !isNaN(nameBurger.value)) {
        return false;
    } else {
        return true;
    }
}

// funzione add ingredients;
function addIngredients() {
    let sum = 0;

    for (const ingredient of ingredients) {
        if (ingredient.checked) {
            sum += parseFloat(ingredient.value);
        }
    }
    return sum;
}

// funzione discount (controllo pattern e duplicato)
function checkDiscount() {
    const valDisc = nameDiscount.value;

    if (valDisc.length != 9) {
        return false;
    }
    if (isNaN(valDisc.substring(0, 4))) {
        return false;
    }
    if (valDisc[4] != '-') {
        return false;
    }
    if (!isNaN(valDisc.substring(5))) {
        return false;
    }
    return true;
}


// funzione total Price 
function partialTotPrice() {
    const basePrice = 50;

    return basePrice + addIngredients();
}


// funzione sconto 
function applyingDiscount() {
    const PercentageDiscount = 0.8;
    if (nameDiscount.value == '') {
        return partialTotPrice();
    }
    else if (checkDiscount()) {   // se è vera
        return partialTotPrice() * PercentageDiscount;

    } else {
        alert('coupon non valido!, inseriscilo nuovamente')
        return partialTotPrice();
    }

}

// funzione your price 
function yourPrice() {
    if (checkName()) {
        totalPrice.innerHTML += applyingDiscount().toFixed(1);
    } else {
        alert('non hai inserito un nome valido')
    }
}