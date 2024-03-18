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
    count: 355.3 - 111,
    date: new Date('2024-02-23'),
    inUsdt: 3000,
    perUnit: 8.445,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 72.2 - 15.9,
    date: new Date('2024-02-23'),
    inUsdt: 619,
    perUnit: 8.565,
    isBNBComission: false,
  },
/*   {
    state: STATE.SOLD,
    coin: COIN.WLD,
    count: 111,
    date: new Date('2024-03-17'),
    inUsdt: 1000,
    perUnit: 9.072,
    isBNBComission: false,
  }, */
/* {
    state: STATE.BOUGHT,
    coin: COIN.WLD,
    count: 96,
    date: new Date('2024-02-24'),
    inUsdt: 889,
    perUnit: 9.156,
    isBNBComission: false,
  },
  {
    state: STATE.SOLD,
    coin: COIN.WLD,
    count: 88,
    date: new Date('2024-03-16'),
    inUsdt: 800,
    perUnit: 9.048,
    isBNBComission: false,
  } */
];
