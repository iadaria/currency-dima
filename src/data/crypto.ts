import {Deal} from '../types/cypto';
import { APTS } from './apt';
import { ATOMS } from './atom';
import { BONKS } from './bonk';
import { BTCS } from './btc';
import {CAKES} from './cake';
import {CFXS} from './cfx';
import { CKBS } from './ckb';
import { CKBS_2 } from './ckb2';
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
import { TIAS_2 } from './tia2';
import { WLDS } from './wld';

export const DEALS: Deal[] = [
  //...ADAS,
  //...TRXS,
  ...BTCS,
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
  ...TIAS_2,
  ...STXS,
  ...CKBS,
  ...CKBS_2,
  ...WLDS
];
