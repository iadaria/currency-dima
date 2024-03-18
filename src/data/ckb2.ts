import { COIN, Deal, Market, STATE } from "../types/cypto";

export const CKBS_2: Deal[] = [
    {
        state: STATE.BOUGHT,
        coin: COIN.CKB,
        count: 206207,
        date: new Date('2024-03-07'),
        inUsdt: 4000,
        perUnit: 0.019382,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      },
      {
        state: STATE.BOUGHT,
        coin: COIN.CKB,
        count: 200391 - 56148,
        date: new Date('2024-03-07'),
        inUsdt: 4000,
        perUnit: 0.019940,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      },
/*       {
        state: STATE.SOLD,
        coin: COIN.CKB,
        count: 56148,
        date: new Date('2024-03-17'),
        inUsdt: 1000,
        perUnit: 0.017810,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      }, */
    ];