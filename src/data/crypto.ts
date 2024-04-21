import {Deal} from '../types/cypto';
import {APES} from './ape';
import {BOMES} from './bome';
import {CKBS} from './ckb';
import {MANIAS} from './mania';
import {STXS} from './stx';
import {SUIS_2} from './sui2';
import {TIAS_2} from './tia2';
import {TRUMPS} from './trumb';
import {WIFS} from './wif';
import {WLDS} from './wld';

export const DEALS: Deal[] = [
  ...SUIS_2,
  ...TIAS_2,
  ...STXS,
  //...BTCS,
  ...CKBS,
  ...WLDS,
  ...WIFS,
  ...BOMES,
  ...APES,
  //...MANIAS,
  //...TRUMPS
];
