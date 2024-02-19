import { COIN, Deal, Market, STATE } from "../types/cypto";

export const STXS: Deal[] = [
     {
        state: STATE.BOUGHT,
        coin: COIN.STX,
        count: 2556,
        date: new Date('2024-02-16'),
        inUsdt: 6500,
        perUnit: 2.5428,
        isBNBComission: false,
        comission: 1,
        Market: Market.Binance,
      },
    ];