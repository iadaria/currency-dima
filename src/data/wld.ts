import {COIN, Deal, Market, STATE} from '../types/cypto';

export const WLDS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 258,
    date: new Date('2024-02-19'),
    inUsdt: 2008,
    perUnit: 7.780,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 355.3,
    date: new Date('2024-02-23'),
    inUsdt: 3000,
    perUnit: 8.445,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 72.2,
    date: new Date('2024-02-23'),
    inUsdt: 619,
    perUnit: 8.565,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 96,
    date: new Date('2024-02-24'),
    inUsdt: 889,
    perUnit: 9.156,
    isBNBComission: false,
];
