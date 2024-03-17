import {COIN, Deal, Market, STATE} from '../types/cypto';

export const BOMES: Deal[] = [
  {
  state: STATE.BOUGHT,
  coin: COIN.BOME,
  count: 43569,
  date: new Date('2024-03-16'),
  inUsdt: 989,
  perUnit: 0.022721,
  isBNBComission: false,
  comission: 1,
  Market: Market.Binance,
},
{
  state: STATE.BOUGHT,
  coin: COIN.BOME,
  count: 43878,
  date: new Date('2024-03-17'),
  inUsdt: 870,
  perUnit: 0.019847,
  isBNBComission: false,
  comission: 1,
  Market: Market.Binance,
},
];