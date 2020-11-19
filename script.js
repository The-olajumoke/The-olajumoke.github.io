let firstCurrency = document.getElementById("currencyOne");
let secondCurrency = document.getElementById("currencyTwo");
let firstAmount = document.getElementById("amountOne");
let secondAmount = document.getElementById("amountTwo");
let convertButton = document.getElementById("findRates");
let rateDiv= document.getElementsByClassName("rate");

// console.log(firstCurrency)
function  calculateRates() {
  let firstCurrencyValue = firstCurrency.value;
  let secondCurrencyValue = secondCurrency.value;

  
// LIST OF COUNTRIES
fetch("https://currency-converter13.p.rapidapi.com/list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1f5283411dmsh60652c871dca700p18529djsn17d7ea734d6e",
		"x-rapidapi-host": "currency-converter13.p.rapidapi.com"
	}
})
.then(response => 
	response.json()
)

.then(dataList => {
  //LOOP
dataList.forEach(item => {
  const  options= `<option value="${item}">${item}</option>`
       firstCurrency.insertAdjacentHTML("afterbegin", options);
       secondCurrency.insertAdjacentHTML("afterbegin", options);})
}
)

// CONVERT
  fetch(`https://currency-converter13.p.rapidapi.com/convert?from=${firstCurrencyValue}&to=${secondCurrencyValue}&amount=1`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "1f5283411dmsh60652c871dca700p18529djsn17d7ea734d6e",
      "x-rapidapi-host": "currency-converter13.p.rapidapi.com"
    }
  })
  .then(response => 
    response.json())
      .then(data => {
     //   //GET RATES 
          let rates = (data.amount);
       secondAmount.value = (rates * firstAmount.value).toFixed(2);
      }
    );



  }

  
// EVENT LISTENERS
currencyOne.addEventListener("change",  calculateRates);
amountOne.addEventListener("input",  calculateRates);
currencyTwo.addEventListener("change",  calculateRates);
amountTwo.addEventListener("input",  calculateRates);
convertButton.addEventListener("click",  () =>{
        calculateRates()
document.getElementById('audio').play()
});

 calculateRates();






 