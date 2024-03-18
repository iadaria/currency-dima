import {Deal} from '../types/cypto';
import { BOMES } from './bome';
import { BTCS } from './btc';
import { CKBS_2 } from './ckb2';
import { STXS } from './stx';
import { SUIS_2 } from './sui2';
import { TIAS_2 } from './tia2';
import { WIFS } from './wif';
import { WLDS } from './wld';

export const DEALS: Deal[] = [
  ...SUIS_2,
  ...TIAS_2,
  ...STXS,
  //...BTCS,
  ...CKBS_2,
  ...WLDS,
  ...WIFS,
  ...BOMES,
];
