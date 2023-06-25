import { Deal } from "../types/cypto";
import { ADAS } from "./ada";
import { BTCS } from "./btc";
import { CFXS } from "./cfx";
import { FLOKIS } from "./floki";
import { LDOS } from "./ldo";
import { TRXS } from "./trx";

export const DEALS: Deal[] = [
   ...ADAS,
   ...TRXS,
   ...BTCS,
   ...CFXS,
   ...FLOKIS,
   ...LDOS,
/*   {
    state: STATE.SOLD,
    coin: COIN.CFX,
    count: 11,
    date: new Date('2023-06-21'),
    inUsdt: 11,
    perUnit: 0.2530,
    isBNBComission: true,
  }, */
]