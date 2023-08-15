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

  let convertedValue = inputCurrencyValue / dolarToday;

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

  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

}

convertButton.addEventListener("click", convertValues);
