const fromAmountElement= document.querySelector('.amount');
const convertedAmountElement= document.querySelector('.convertedAmount');
const fromCurrencyElement= document.querySelector('.fromCurrency');
const toCurrencyElement= document.querySelector('.toCurrency');
const resultElement= document.querySelector('.result');
const converterContainer=document.querySelector('.converter-container');
//Array to populate the select tags with these countries
const countries= [
    {code: "AFA", name: "Afghan Afghani"},
    {code: "INR", name: "Indian"},
    {code: "ALL", name: "Albanian Lek"},
    {code: "DZD", name: "Algerian Dinar"},
    {code: "AOA", name: "Angolan Kwanza"},
    {code: "ARS", name: "Argentine Peso"},
    {code: "AMD", name: "Armenian Dram"},
    // ... (continue full list)
    {code: "USD", name: "United States Dollar"},
];
//showing countries from array to select tag
countries.forEach(country =>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.textContent= option2.textContent= `${country.code}(${country.name})`;
    fromCurrencyElement.appendChild(option1);
//setting default values
    toCurrencyElement.appendChild(option2);
    fromCurrencyElement.value="USD";
    toCurrencyElement.value="INR";
});

const getExchangeRate =async () =>{
    const amount=parseFloat(fromAmountElement.value);
    const fromCurrency=fromCurrencyElement.value;
    const toCurrency=toCurrencyElement.value;
resultElement.textContent= "Fetching exchange rates...";

try{
    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
const response = await fetch(url);
const data = await response.json();
if (!data.rates || !data.rates[toCurrency]) {
    resultElement.textContent = `Error: Could not find rate for ${toCurrency}`;
    return;
}

const conversionRate = data.rates[toCurrency];
const convertedAmount = (amount*conversionRate).toFixed(2);

 if(typeof conversionRate === 'undefined')
 {
    resultElement.textContent ="data not available for selected countries";
    convertedAmountElement="";
 }
//     const api_key='868dcf58cedbdfdf4b5cc0c8';

//     //Fetch data from API
//   const response= await fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromCurrency}`);

//     const data= await response.json();
//     //console.log(data);
   // const conversionRate= data.rates[toCurrency];
  //  const convertedAmount=(amount*conversionRate);
  else{
    convertedAmountElement.value=convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency}= ${convertedAmount} ${toCurrency}`
  }
}
catch(error)
{
converterContainer.innerHTML= `<h3>Error while fetching data</h3>`;
}
}
//fetching exhange rate when user inputs change or load window
fromAmountElement.addEventListener('input',getExchangeRate);
fromCurrencyElement.addEventListener('change',getExchangeRate);
toCurrencyElement.addEventListener('change',getExchangeRate);
window.addEventListener('load',getExchangeRate);