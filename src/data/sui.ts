import {COIN, Deal, Market, STATE} from '../types/cypto';

export const SUIS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.SUI,
    count: 1175,
    date: new Date('2023-12-26'),
    inUsdt: 1000,
    perUnit: 0.8506,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.SUI,
    count: 3468,
    date: new Date('2024-02-03'),
    inUsdt: 5218,
    perUnit: 1.5048,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.SUI,
    count: 1685,
    date: new Date('2024-02-04'),
    inUsdt: 2528,
    perUnit: 1.4995,
    isBNBComission: false,
  },
  {
    state: STATE.SOLD,
    coin: COIN.SUI,
    count: 6322,
    date: new Date('2024-02-14'),
    inUsdt: 12092,
    perUnit: 1.9125,
    isBNBComission: false,
  },
];
