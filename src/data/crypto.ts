import { round } from "../utils/digits";

export enum COIN {
  USDT = 'USDT',
  ADA = 'ADA',
  LDO = 'LDO',
  CFX = 'CFX',
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
    coin: COIN.USDT,
    count: 1043,
    boughtDate: new Date('2023-06-03'),
    soldDate: null,
    fixed: false,
    inUsdt: 1043,
    boughtPerUnit: 1,
    soldPerUnit: 1,
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
    count: 9630,
    boughtDate: new Date('2023-06-19'),
    soldDate: null,
    fixed: false,
    inUsdt: 1744,
    boughtPerUnit: 0.1812,
    soldPerUnit: 0,
    isBNBComission: true,
  },
];
