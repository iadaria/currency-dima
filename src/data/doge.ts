import {COIN, Deal, Market, STATE} from '../types/cypto';

export const DOGE: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.DOGE,
    count: 21741,
    date: new Date('2023-12-25'),
    inUsdt: 2009,
    perUnit: 0.09245,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
  {
    state: STATE.SOLD,
    coin: COIN.DOGE,
    count: 21695,
    date: new Date('2024-02-04'),
    inUsdt: 1693,
    perUnit: 0.07808,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
];
