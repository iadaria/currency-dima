import { COIN, Deal, Market, STATE } from "../types/cypto";

export const CAKES: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.CAKE,
    count: 452,
    date: new Date('2023-04-25'),
    inUsdt: 1238,
    perUnit: 2.735,
    isBNBComission: false,
    Market: Market.Huobi
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CAKE,
    count: 378,
    date: new Date('2023-04-17'),
    inUsdt: 1355,
    perUnit: 3.586,
    isBNBComission: false,
    Market: Market.Huobi
  },
  {
    state: STATE.SOLD,
    coin: COIN.CAKE,
    count: 828,
    date: new Date('2024-02-04'),
    inUsdt: 1355,
    perUnit: 2.389,
    isBNBComission: false,
    Market: Market.Huobi
  },
];