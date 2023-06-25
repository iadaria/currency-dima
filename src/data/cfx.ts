import { COIN, Deal, Market, STATE } from "../types/cypto";

export const CFXS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 21793,
    date: new Date('2023-03-26'),
    inUsdt: 6612,
    perUnit: 0.3038,
    isBNBComission: false,
  },
/*   {
    state: STATE.SOLD,
    coin: COIN.CFX,
    count: 22634,
    date: new Date('2023-04-12'),
    inUsdt: 8942,
    perUnit: 0.39492,
    isBNBComission: false,
    comission: 8.6,
    Market: Market.Okx
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 22634,
    date: new Date('2023-04-12'),
    inUsdt: 8749,
    perUnit: 0.38609,
    isBNBComission: false,
    comission: 18.466 * 0.38609,
    Market: Market.Okx
  }, */
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 12597,
    date: new Date('2023-05-27'),
    inUsdt: 3879,
    perUnit: 0.30784,
    isBNBComission: false,
    comission: 3.3,
    Market: Market.Okx
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 12587,
    date: new Date('2023-05-27'),
    inUsdt: 3880,
    perUnit: 0.30784,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 9423,
    date: new Date('2023-06-09'),
    inUsdt: 0,
    perUnit: 0.2278,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 9630,
    date: new Date('2023-06-19'),
    inUsdt: 0,
    perUnit: 0.1812,
    isBNBComission: false,
  },
  {
    state: STATE.SOLD,
    coin: COIN.CFX,
    count: 19786,
    date: new Date('2023-06-22'),
    inUsdt: 5005,
    perUnit: 0.2530,
    isBNBComission: true,
  },
];