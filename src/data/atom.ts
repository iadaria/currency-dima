import {COIN, Deal, Market, STATE} from '../types/cypto';

export const ATOMS: Deal[] = [
  {
  state: STATE.BOUGHT,
  coin: COIN.ATOM,
  count: 107,
  date: new Date('2024-01-02'),
  inUsdt: 1222,
  perUnit: 11.416,
  isBNBComission: false,
  comission: 1,
  Market: Market.Binance,
},
{
  state: STATE.BOUGHT,
  coin: COIN.ATOM,
  count: 73.15,
  date: new Date('2023-01-02'),
  inUsdt: 834,
  perUnit: 11.415,
  isBNBComission: false,
  comission: 1,
  Market: Market.Binance,
}, 
];
