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
];
