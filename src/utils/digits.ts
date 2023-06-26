import {DEALS} from '../data/crypto';
import {COIN, Deal, STATE} from '../types/cypto';

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
export const sortByDateD = (d1: Deal, d2: Deal) =>
  d2.date.getTime() - d1.date.getTime();

export const sortByPricePerUnit = (d1: Deal, d2: Deal) =>
  d1.perUnit - d2.perUnit;

export const dealsGroupedByCoin = () => {
  return Object.values(COIN)
    .map((coin) => {
      const deals = DEALS.filter((deal) => deal.coin === coin);
      return deals.length > 0 ? deals : null;
    })
    .filter(Boolean);
};

export const dealsByCoin = (coin: COIN) =>
  DEALS.filter((deal) => deal.coin === coin);

export const countOfCoin = (coin: COIN) =>
  dealsByCoin(coin).reduce(
    (sum, deal) =>
      deal.state === STATE.BOUGHT ? sum + deal.count : sum - deal.count,
    0
  );

export const filterByCoinAndState = (coin: COIN, state: STATE) =>
  dealsByCoin(coin)
    .filter((deal) => deal.state === state)
    .sort(sortByPricePerUnit);

export const boughtsByCoin = (coin: COIN) =>
  filterByCoinAndState(coin, STATE.BOUGHT);

export const soldsByCoin = (coin: COIN) =>
  filterByCoinAndState(coin, STATE.SOLD).sort(sortByDateD);

export const equalDeals = (d1: Deal, d2: Deal) =>
  d1.coin === d2.coin && d1.count === d2.count && d1.date === d2.date;

export const newBoughtsByCoin = (coin: COIN) => {
  const newSales: Deal[] = [];
  const newPurchases: Deal[] = [];

  const uniq = (buy: Deal) =>
    !newPurchases.some((p) => p.count === buy.count && p.date === buy.date);

  const solds = soldsByCoin(coin);
  const boughts = boughtsByCoin(coin);

  if (!solds.length) {
    return [boughts, []];
  }

  solds
    .filter((sold) => !sold.fixed)
    .forEach((sold, index) => {
      let sale: Deal | null = sold;
      boughts.filter((buy) => !buy.fixed)
        .filter(uniq) // фильтруем то, что уже отработали с предыдущим sale
        .forEach((buy) => {
          if (!sale) {
            // Если отработали уже все Продажи, то просто копируем Покупки
            newPurchases.push(buy);
          } else {
            if (sale.count > buy.count) {
              // разбиваем один элемент Продажи на две Продажи
              newSales.push({...sale, count: buy.count});
              sale = {...sale, count: sale.count - buy.count};
              // элемент Покупки тот же
              newPurchases.push(buy);
              // теперь новый элемент для отслеживания
            }
            if (sale.count < buy.count) {
              // разбиваем один элемент Покупки на две Покупки
              newPurchases.push({...buy, count: sale.count});
              newPurchases.push({...buy, count: buy.count - sale.count});
              // элмент Продажи тот же
              newSales.push(sale);
              // обновляем текущую Продажу для работы
              sale = null;
            }
            if (sale && sale.count === buy.count) {
              newSales.push(sale);
              newPurchases.push(buy);
            }
          }
        });
    });
  //newSales.push(...solds.filter(s => s.fixed));
  //newPurchases.push(...boughts.filter(s => s.fixed));
  return [newPurchases, newSales];
};

export const calcOutcome = (coin: COIN) => {
  const [boughts, solds] = newBoughtsByCoin(coin);
  // if (coin === COIN.CFX) {
  //   console.log(boughts);
  //   console.log(solds);
  // }
  return solds.reduce((sum, sold) => {
    // находим соответствующую покупку
    const buy = boughts.find(
      (buy) => buy.count === sold.count && buy.date <= sold.date
    );
    if (!buy) {
      throw Error('Не найдена, соответствующая продаже, покупка ' + JSON.stringify(sold),);
    }
    return (
      sum +
      (calcSellingCost(sold.count, sold.perUnit, sold.isBNBComission) -
        calcBuyingCost(buy.count, buy.perUnit, buy.isBNBComission))
    );
  }, 0);
};

export const calcSpent = (coin: COIN) => {
  const [boughts, solds] = newBoughtsByCoin(coin);
  /* if (coin === COIN.CFX) {
    console.log('$calPlanOutcome: ' + coin, { boughts, solds });
  } */
  return boughts.reduce((sum, buy) => {
    // находим соответствующую покупку
    const sold = solds.find(
      (sale) => buy.count === sale.count && buy.date <= sale.date
    );
    if (sold) {
      return sum;
    }
   
    return sum + calcBuyingCost(buy.count, buy.perUnit, buy.isBNBComission);
  }, 0);
};
