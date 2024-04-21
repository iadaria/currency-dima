export enum Market {
  Binance = 'BINANCE',
  Okx = 'OKX',
  Huobi = 'HUOBI',
}

export enum COIN {
  //ADA = 'ada',
  //LDO = 'ldo',
  //TRX = 'trx',
  //CAKE = 'cake',
  //CFX = 'cfx',
  //FLOKI = 'floki',
  //DOGE = 'doge',
  //FIL = 'fil',
  //ICP = 'icp',
  //SUI = 'sui',
  //ONT = 'ont',
  //ATOM = 'atom',
  //BONK = 'bonk',
  //NEM = 'xem',
  //APT = 'apt',
  //CKB = 'ckb',
  //TIA = 'tia',
  SUI = 'sui',
  TIA = 'tia',
  STX = 'stx',
  BTC = 'btc',
  CKB = 'ckb',
  WLD = 'wld',
  WIF = 'wif',
  BOME = 'bome',
  APE = 'ape',
  //MANIA = 'mania',
  //TRUMP = 'trump'
}

export enum STATE {
  SOLD,
  BOUGHT,
}

export const Rates: {[key: string]: number} = {
  //[COIN.ATOM]: 0,
  //[COIN.CAKE]: 0,
  //[COIN.CFX]: 0,
  //[COIN.FLOKI]: 0,
  //[COIN.ADA]: 0,
  //[COIN.LDO]: 0,
  //[COIN.TRX]: 0,
  //[COIN.DOGE]: 0,
  //[COIN.FIL]: 0,
  //[COIN.ICP]: 0,
  //[COIN.SUI]: 0,
  //[COIN.ONT]: 0,
  //[COIN.BONK]: 0,
  //[COIN.NEM]: 0,
  //[COIN.APT]: 0,
  //[COIN.TIA]: 0,
  //[COIN.CKB]: 0,
  [COIN.STX]: 0,
  [COIN.BTC]: 0,
  [COIN.WLD]: 0,
  [COIN.SUI]: 0,
  [COIN.TIA]: 0,
  [COIN.CKB]: 0,
  [COIN.WIF]: 0,
  [COIN.BOME]: 0,
  [COIN.APE]: 0,
  //[COIN.MANIA]: 0,
  //[COIN.TRUMP]: 0,
};

export type Item = {
  coin: COIN;
  count: number;
  boughtDate: null | Date;
  soldDate: null | Date;
  fixed: boolean;
  inUsdt: number;
  boughtPerUnit: number;
  soldPerUnit: number;
  isBNBComission: boolean;
  comission?: number;
};

export type Deal = {
  state: STATE;
  coin: COIN;
  count: number;
  date: Date;
  inUsdt: number;
  perUnit: number;
  isBNBComission: boolean;
  comission?: number;
  Market?: Market;
  fixed?: boolean;
};

export const Translate = {
  [STATE.BOUGHT]: '->Покупка',
  [STATE.SOLD]: '<-Продажа',
};
