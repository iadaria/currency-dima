import {COIN, Deal, Market, STATE} from '../types/cypto';

export const FIL: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.FIL,
    count: 348,
    date: new Date('2023-12-25'),
    inUsdt: 2010,
    perUnit: 5.76,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.FIL,
    count: 390,
    date: new Date('2023-12-26'),
    inUsdt: 2178,
    perUnit: 5.57,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.FIL,
    count: 206,
    date: new Date('2023-12-27'),
    inUsdt: 1170,
    perUnit: 5.68,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
];
