import { COIN, Deal, Market, STATE } from "../types/cypto";

export const CKBS: Deal[] = [
    {
        state: STATE.BOUGHT,
        coin: COIN.CKB,
        count: 535672,
        date: new Date('2024-01-20'),
        inUsdt: 6523,
        perUnit: 0.012189,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      },
      {
        state: STATE.SOLD,
        coin: COIN.CKB,
        count: 535672,
        date: new Date('2024-03-06'),
        inUsdt: 6523,
        perUnit: 0.020816,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      },
    ];