import {Deal} from '../types/cypto';
import { APTS } from './apt';
import { ATOMS } from './atom';
import { BONKS } from './bonk';
import {CAKES} from './cake';
import {CFXS} from './cfx';
import {DOGE} from './doge';
import {FIL} from './fil';
import {FLOKIS} from './floki';
import {ICPS} from './icp';
import { NEMS } from './nem';
import {ONTS} from './ont';
import {SUIS} from './sui';
import { TIAS } from './tia';

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
  ...ONTS,
  ...ATOMS,
  ...APTS,
  ...BONKS,
  ...NEMS,
  ...TIAS
];
