const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currencySelectValue");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".inputCurrency").value;
  const CurrencyValueToConvert = document.querySelector(
    ".currencyValue-to-convert"
  );
 
  const CurrencyValueToConverted = document.querySelector(".currencyValue");
  const dolarToday = 5;
  const euroToday = 5.45;
  const libraToday = 6.35;
  const bitcoinToday = 145.956;

  if (currencySelect.value == "dolar") {
    CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8,
    }).format(inputCurrencyValue / bitcoinToday);
  }

  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

}

function changeCurrency(){
    const currencyName = document.getElementById('currencyName');
    const currencyImg = document.querySelector('.currencyImg');

    if(currencySelect.value == 'dolar') {
      currencyName.innerHTML = 'Dolar americano';
      currencyImg.src = './assets/dolar.png'
    }
    if(currencySelect.value == 'euro') {
      currencyName.innerHTML = 'Euro'
      currencyImg.src = './assets/euro.png'
    }
    if(currencySelect.value == 'libra') {
      currencyName.innerHTML = 'Libra'
      currencyImg.src = './assets/libra.png'
    }
    if(currencySelect.value == 'bitcoin') {
      currencyName.innerHTML = 'Bitcoin'
      currencyImg.src = './assets/bitcoin.png'
    }
    convertValues()
}

currencySelect.addEventListener('change', changeCurrency);

convertButton.addEventListener("click", convertValues);
