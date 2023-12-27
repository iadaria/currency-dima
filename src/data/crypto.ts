import {Deal} from '../types/cypto';
import {CAKES} from './cake';
import {CFXS} from './cfx';
import {DOGE} from './doge';
import {FIL} from './fil';
import {FLOKIS} from './floki';
import {ICPS} from './icp';
import {SUIS} from './sui';

export const DEALS: Deal[] = [
  //...ADAS,
  //...TRXS,
  //...BTCS,
  ...CAKES,
  ...CFXS,
  ...FLOKIS,
  //...LDOS,
  ...DOGE,
  ...FIL,
  ...ICPS,
  ...SUIS,
];
