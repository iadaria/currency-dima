import {Deal} from '../types/cypto';
import { APTS } from './apt';
import { ATOMS } from './atom';
import { BONKS } from './bonk';
import {CAKES} from './cake';
import {CFXS} from './cfx';
import { CKBS } from './ckb';
import {DOGE} from './doge';
import {FIL} from './fil';
import {FLOKIS} from './floki';
import {ICPS} from './icp';
import { NEMS } from './nem';
import {ONTS} from './ont';
import { STXS } from './stx';
import {SUIS} from './sui';
import { SUIS_2 } from './sui2';
import { TIAS } from './tia';
import { WLDS } from './wld';

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
  ...SUIS_2,
  ...ONTS,
  ...ATOMS,
  ...APTS,
  ...BONKS,
  ...NEMS,
  ...TIAS,
  ...STXS,
  ...CKBS,
  ...WLDS
];
