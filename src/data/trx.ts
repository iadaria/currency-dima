import {COIN, Deal, Market, STATE} from '../types/cypto';

export const TRXS: Deal[] = [
  {
    state: STATE.SOLD,
    coin: COIN.TRX,
    count: 67697,
    date: new Date('2023-04-20'),
    inUsdt: 4492,
    perUnit: 0.06633,
    isBNBComission: false,
    comission: 3.5,
    Market: Market.Okx
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.TRX,
    count: 67027,
    date: new Date('2023-04-17'),
    inUsdt: 4441,
    perUnit: 0.06624,
    isBNBComission: false,
    comission: 57.84 * 0.06624,
    Market: Market.Okx
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.TRX,
    count: 728,
    date: new Date('2023-04-17'),
    inUsdt: 48,
    perUnit: 0.06617,
    isBNBComission: false,
    comission: 0.728 * 0.06617,
    Market: Market.Okx
  },
];
