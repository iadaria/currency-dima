import {COIN, Deal, Market, STATE} from '../types/cypto';

export const NEMS: Deal[] = [
  {
    state: STATE.BOUGHT,
    coin: COIN.NEM,
    count: 33070,
    date: new Date('2024-01-20'),
    inUsdt: 1260,
    perUnit: 0.03818,
    isBNBComission: false,
    comission: 1,
    Market: Market.Okx,
  },
];