import { Deal } from "../types/cypto";
import { ADAS } from "./ada";
import { BTCS } from "./btc";
import { CAKES } from "./cake";
import { CFXS } from "./cfx";
import { FLOKIS } from "./floki";
import { LDOS } from "./ldo";
import { TRXS } from "./trx";

export const DEALS: Deal[] = [
   ...ADAS,
   ...TRXS,
   ...BTCS,
   ...CAKES,
   ...CFXS,
   ...FLOKIS,
   ...LDOS,
];