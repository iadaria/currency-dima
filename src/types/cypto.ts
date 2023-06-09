export enum Market {
  Binance = 'BINANCE',
  Okx = 'OKX',
  Huobi = 'HUOBI',
}

export enum COIN {
  ADA = 'ada',
  LDO = 'ldo',
  TRX = 'trx',
  BTC = 'btc',
  CAKE = 'cake',
  CFX = 'cfx',
  FLOKI = 'floki',
}

export enum STATE {
  SOLD,
  BOUGHT,
}

export const Rates: { [key: string]: number} = {
  [COIN.BTC]: 0,
  [COIN.CAKE]:0,
  [COIN.CFX]: 0,
  [COIN.FLOKI]: 0,
  [COIN.ADA]: 0,
  [COIN.LDO]: 0,
  [COIN.TRX]: 0,
};

export type Item = {
  coin: COIN,
  count: number,
  boughtDate: null | Date,
  soldDate: null | Date,
  fixed: boolean,
  inUsdt: number,
  boughtPerUnit: number,
  soldPerUnit: number,
  isBNBComission: boolean,
  comission?: number,
};

export type Deal = {
  state: STATE,
  coin: COIN,
  count: number,
  date: Date,
  inUsdt: number,
  perUnit: number,
  isBNBComission: boolean,
  comission?: number,
  Market?: Market,
  fixed?: boolean,
};

export const Translate = {
  [STATE.BOUGHT]: '->Покупка',
  [STATE.SOLD]: '<-Продажа',
};