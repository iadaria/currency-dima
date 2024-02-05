import {COIN, Deal, Market, STATE} from '../types/cypto';

export const APTS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.APT,
    count: 108.34,
    date: new Date('2024-01-09'),
    inUsdt: 906,
    perUnit: 8.3067,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.APT,
    count: 222,
    date: new Date('2024-02-04'),
    inUsdt: 1981,
    perUnit: 8.9247,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
];