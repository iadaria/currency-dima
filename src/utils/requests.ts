import { COIN, Rates } from "../types/cypto";

//https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22ETHUSDT%22]
export const getPrice = async (coin: COIN) => {
  console.log('REQUEST');
  const symbol = `${coin}usdt`.toUpperCase();
  const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data?.price;
  } catch (error) {
    console.log('request error', { error });
  }
}

export const updateRates = async () => {
  let rates = {...Rates};
  const cryptos = Object.keys(Rates);
  for (let i = 0; i < cryptos.length; i++) {
    const coin = cryptos[i] as COIN;
    const price = await getPrice(coin);
    rates = {...rates, [coin]: price } ;
    setTimeout(() => {/** Задержка на 5 секунд */}, 5000);
  }
  return rates;
};