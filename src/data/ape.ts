import {COIN, Deal, Market, STATE} from '../types/cypto';

export const APES: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.APE,
    count: 1252,
    date: new Date('2024-03-29'),
    inUsdt: 2541,
    perUnit: 2.030,
    isBNBComission: false,
    comission: 1,
    Market: Market.Binance,
  },
]