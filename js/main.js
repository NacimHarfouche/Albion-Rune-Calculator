// variables
let selectEquipmentList = document.getElementById("equipmentsList");
const buttonCalcul = document.getElementById("buttonCalcul");

// function
function calculTotalPrice(pieces, priceEquipment, levelOne, levelTwo, levelThree) {
    levelOne *= pieces;
    levelTwo *= pieces;
    levelThree *= pieces;
    return priceEquipment + levelOne + levelTwo + levelThree;
}

// Execution
// When the equipment is selected, put the number of piece in the input
selectEquipmentList.addEventListener("change", function() {
    let inputNumberOfPieces = document.getElementById("numberOfPieces");
    inputNumberOfPieces.value = this.value;
});

// when the user click on the button
buttonCalcul.addEventListener("click", () => {
    let inputNumberOfPieces = parseInt(document.getElementById("numberOfPieces").value),
    inputPriceEquipment = parseInt(document.getElementById("priceEquipment").value),
    inputPricePieceLevelOne = parseInt(document.getElementById("pricePieceLevelOne").value),
    inputPricePieceLevelTwo = parseInt(document.getElementById("pricePieceLevelTwo").value),
    inputPricePieceLevelThree = parseInt(document.getElementById("pricePieceLevelThree").value);
    
    let result = calculTotalPrice(inputNumberOfPieces, inputPriceEquipment, inputPricePieceLevelOne, inputPricePieceLevelTwo, inputPricePieceLevelThree);
    let spanResult = document.getElementById("spanResult");
    spanResult.textContent = result;
});

