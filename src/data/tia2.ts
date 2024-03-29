import {COIN, Deal, Market, STATE} from '../types/cypto';

export const TIAS_2: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.TIA,
    count: 162.4,
    date: new Date('2024-03-07'),
    inUsdt: 11127,
    perUnit: 16.83,
    isBNBComission: false,
    Market: Market.Binance,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.TIA,
    count: 392,
    date: new Date('2024-03-29'),
    inUsdt: 11127,
    perUnit: 15.21,
    isBNBComission: false,
    Market: Market.Binance,
  }
];
