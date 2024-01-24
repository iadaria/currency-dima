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
  {
    state: STATE.BOUGHT,
    coin: COIN.ICP,
    count: 161.29,
    date: new Date('2024-01-24'),
    inUsdt: 1700,
    perUnit: 10.536,
    isBNBComission: false,
    Market: Market.Huobi,
  },
];
