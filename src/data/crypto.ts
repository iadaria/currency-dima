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

export const ITEMS: Item[] = [
  {
    coin: COIN.FLOKI,
    count: 0.000038673,
    boughtDate: new Date('2023-04-12'),
    soldDate: new Date('2023-05-26'),
    fixed: true,
    inUsdt: 0,
    boughtPerUnit: (2.235 + 2.220 + 2.216)/3,
    soldPerUnit: 1.987,
    isBNBComission: false,
  },
  {
    coin: COIN.LDO,
    count: 3410,
    boughtDate: new Date('2023-04-12'),
    soldDate: new Date('2023-05-26'),
    fixed: true,
    inUsdt: 0,
    boughtPerUnit: (2.235 + 2.220 + 2.216)/3,
    soldPerUnit: 1.987,
    isBNBComission: false,
  },
  {
    coin: COIN.CFX,
    count: 12587,
    boughtDate: new Date('2023-05-27'),
    soldDate: null,
    fixed: false,
    inUsdt: 3880,
    boughtPerUnit: 0.30784,
    soldPerUnit: 0,
    isBNBComission: false,
  },
  {
    coin: COIN.CFX,
    count: 9423,
    boughtDate: new Date('2023-06-09'),
    soldDate: null,
    fixed: false,
    inUsdt: 0,
    boughtPerUnit: 0.2278,
    soldPerUnit: 0,
    isBNBComission: false,
  },
  {
    coin: COIN.CFX,
    count: 9630,
    boughtDate: new Date('2023-06-19'),
    soldDate: null,
    fixed: false,
    inUsdt: 0,
    boughtPerUnit: 0.1812,
    soldPerUnit: 0,
    isBNBComission: false,
  },
  {
    coin: COIN.CFX,
    count: 19786,
    boughtDate: new Date('2023-06-19'),
    soldDate: new Date('2023-06-22'),
    fixed: false,
    inUsdt: 5005,
    boughtPerUnit: 0.1812,
    soldPerUnit: 0.2530,
    isBNBComission: false,
  },
];

export type Deal = {
  state: STATE,
  coin: COIN,
  count: number,
  date: Date,
  inUsdt: number,
  perUnit: number,
  isBNBComission: boolean,
};

export const Translate = {
  [STATE.BOUGHT]: 'Покупка',
  [STATE.SOLD]: 'Продажа',
};

export const DEALS: Deal[] = [
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
    isBNBComission: false,
  },
]