import {COIN, Deal, Market, STATE} from '../types/cypto';

export const BONKS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.BONK,
    count: 92331335,
    date: new Date('2024-01-15'),
    inUsdt: 1300,
    perUnit: 0.00001408,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
];