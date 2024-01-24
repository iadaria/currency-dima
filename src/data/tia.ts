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
];
