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
];
