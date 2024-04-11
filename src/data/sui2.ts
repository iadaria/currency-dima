import {COIN, Deal, Market, STATE} from '../types/cypto';

export const SUIS_2: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.SUI,
    count: 15819-91.4 - 1305 -2224 - 1000 - 1200 - 4000 - 250,
    date: new Date('2024-02-15'),
    inUsdt: 30000,
    perUnit: 1.8964,
    isBNBComission: false,
  },
/*   {
    state: STATE.SOLD,
    coin: COIN.SUI,
    count: 1219,
    date: new Date('2024-02-24'),
    inUsdt: 2000,
    perUnit: 1.64,
    isBNBComission: false,
  }, */
/*   {
    state: STATE.SOLD,
    coin: COIN.SUI,
    count: 1305,
    date: new Date('2024-03-17'),
    inUsdt: 2000,
    perUnit: 1.5322,
    isBNBComission: false,
  }, */
];
