const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currencySelectValue");

async function convertValues() {
  //const convertValues = async =(){} --- Async com arrow function
  const inputCurrencyValue = document.querySelector(".inputCurrency").value;
  const CurrencyValueToConvert = document.querySelector(
    ".currencyValue-to-convert"
  );

  const apiMoney = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const CurrencyValueToConverted = document.querySelector(".currencyValue");
  const dolarToday = apiMoney.USDBRL.high;
  const euroToday = apiMoney.EURBRL.high;
  const libraToday = 6.35;
  const bitcoinToday = apiMoney.BTCBRL.high;

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
  // if (currencySelect.value == "libra") {
  //   CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
  //     style: "currency",
  //     currency: "GBP",
  //   }).format(inputCurrencyValue / libraToday);
  // }
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

function changeCurrency() {
  const currencyName = document.getElementById("currencyName");
  const currencyImg = document.querySelector(".currencyImg");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar americano";
    currencyImg.src = "./assets/dolar.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);
