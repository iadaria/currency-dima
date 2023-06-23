import {COIN, DEALS, Deal} from '../data/crypto';

const USDT_COMISSION = 0.1 / 100;
const BNB_COMISSION = 0.075 / 100;

export const round = (digit: number) => Number(digit.toFixed(3));
export const roundN = (digit: number, decimal: number) =>
  Number(digit.toFixed(decimal));

export const baseComission = (isBnb: boolean) =>
  isBnb ? BNB_COMISSION : USDT_COMISSION;

export const calcBuyingCost = (
  count: number,
  pricePerUnit: number,
  isBNB = false
) => {
  const comission = count * pricePerUnit * baseComission(isBNB);
  return round(count * pricePerUnit + comission);
};

export const calcSellingCost = (
  count: number,
  pricePerUnit: number,
  isBNB = false
) => {
  const comission = count * pricePerUnit * baseComission(isBNB);
  return round(count * pricePerUnit - comission);
};

export const sortByDate = (d1: Deal, d2: Deal) =>
  d1.date.getTime() - d2.date.getTime();

export const sortByPricePerUnit = (d1: Deal, d2: Deal) =>
  d1.perUnit - d2.perUnit

export const dealsGroupedByCoin = () => {
  return Object.values(COIN)
    .map((coin) => {
      const deals = DEALS.filter((deal) => deal.coin === coin);
      return deals.length > 0 ? deals : null;
    })
    .filter(Boolean);
};

export const groupByCoin = (coin: COIN) => {
  const deals = DEALS.filter((deal) => deal.coin === coin);
};
