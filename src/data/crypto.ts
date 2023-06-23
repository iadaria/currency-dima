export enum COIN {
  LDO = 'ldo',
  CFX = 'cfx',
  FLOKI = 'floki',
}

export enum STATE {
  SOLD,
  BOUGHT,
}

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
};

export type Deal = {
  state: STATE,
  coin: COIN,
  count: number,
  date: Date,
  inUsdt: number,
  perUnit: number,
  isBNBComission: boolean,
  isNew?: boolean,
};

export const Translate = {
  [STATE.BOUGHT]: '->Покупка',
  [STATE.SOLD]: '<-Продажа',
};

export const DEALS: Deal[] = [
  {
    state: STATE.SOLD,
    coin: COIN.LDO,
    count: 3218 + 185,
    date: new Date('2023-05-26'),
    inUsdt: 6260 + 361,
    perUnit: 1.945,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.LDO,
    count: 549 + 1397,
    date: new Date('2023-04-17'),
    inUsdt: 0,
    perUnit: (2.235 + 2.22) / 2,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.LDO,
    count: 1466,
    date: new Date('2023-04-17'),
    inUsdt: 0,
    perUnit: 2.216,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.FLOKI,
    count: 113105263,
    date: new Date('2023-04-17'),
    inUsdt: 4298,
    perUnit: 0.000038673,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 12587,
    date: new Date('2023-05-27'),
    inUsdt: 3880,
    perUnit: 0.30784,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 9423,
    date: new Date('2023-06-09'),
    inUsdt: 0,
    perUnit: 0.2278,
    isBNBComission: false,
  },
  {
    state: STATE.BOUGHT,
    coin: COIN.CFX,
    count: 9630,
    date: new Date('2023-06-19'),
    inUsdt: 0,
    perUnit: 0.1812,
    isBNBComission: false,
  },
  {
    state: STATE.SOLD,
    coin: COIN.CFX,
    count: 19786,
    date: new Date('2023-06-22'),
    inUsdt: 5005,
    perUnit: 0.2530,
    isBNBComission: true,
  },
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