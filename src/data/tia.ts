import {COIN, Deal, Market, STATE} from '../types/cypto';

export const TIAS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.TIA,
    count: 106,
    date: new Date('2024-01-24'),
    inUsdt: 1700,
    perUnit: 16.0357,
    isBNBComission: false,
    Market: Market.Huobi,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.TIA,
    count: 26,
    date: new Date('2024-01-24'),
    inUsdt: 433,
    perUnit: 16.63,
    isBNBComission: false,
    Market: Market.Huobi,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.TIA,
    count: 313,
    date: new Date('2024-02-03'),
    inUsdt: 5302,
    perUnit: 16.91,
    isBNBComission: false,
    Market: Market.Huobi,
  },
  {
    state: STATE.SOLD,
    coin: COIN.TIA,
    count: 444,
    date: new Date('2024-02-19'),
    inUsdt: 5302,
    perUnit: 19.0642,
    isBNBComission: false,
    Market: Market.Huobi,
  },
];
