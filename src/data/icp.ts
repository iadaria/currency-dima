import {COIN, Deal, Market, STATE} from '../types/cypto';

export const ICPS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.ICP,
    count: 120,
    date: new Date('2023-12-26'),
    inUsdt: 1138,
    perUnit: 9.482,
    isBNBComission: false,
    Market: Market.Huobi,
  },
];
