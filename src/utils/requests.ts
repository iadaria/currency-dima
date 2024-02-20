import {COIN, Rates} from '../types/cypto';

//https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22ETHUSDT%22]
export const getPrice = async (symbols: string) => {
  console.log('REQUEST');
  const url = `https://api.binance.com/api/v3/ticker/price?symbols=${symbols}`;
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.log('request error', {error});
  }
};

export const updateRates = async () => {
  let coins = Object.keys(Rates).map((crypto) =>
  `"${crypto.replace(/\d+/g, '')}usdt"`.toUpperCase()
  );
  coins = Array.from( new Set( coins ) )
  console.log(coins);
  const symbols = '[' + coins.join(',') + ']';

  setTimeout(() => {}, 5000);
  type Result = { symbol: string, price: number };
  const result: Result[] = await getPrice(symbols);

  let rates = {...Rates};
  Object.keys(Rates).forEach(coin => {
    const rate = result.find(r => r.symbol.includes(coin.toUpperCase()));
    if (rate) {
      rates[coin] = rate?.price;
    }
  });
  return rates;
};
