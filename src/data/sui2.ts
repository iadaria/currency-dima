import {COIN, Deal, Market, STATE} from '../types/cypto';

export const SUIS_2: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.SUI2,
    count: 15819,
    date: new Date('2024-02-15'),
    inUsdt: 30000,
    perUnit: 1.8964,
    isBNBComission: false,
  },
  {
    state: STATE.SOLD,
    coin: COIN.SUI2,
    count: 1219,
    date: new Date('2024-02-24'),
    inUsdt: 2000,
    perUnit: 1.64,
    isBNBComission: false,
  },
];
