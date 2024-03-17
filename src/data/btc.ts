import {COIN, Deal, Market, STATE} from '../types/cypto';

export const BTCS: Deal[] = [
  {
  state: STATE.BOUGHT,
  coin: COIN.BTC,
  count: 0.03243419,
  date: new Date('2023-03-06'),
  inUsdt: 8936,
  perUnit: 67253,
  isBNBComission: false,
  comission: 0,
  Market: Market.Binance,
},
{
  state: STATE.BOUGHT,
  coin: COIN.BTC,
  count: 0.01568,
  date: new Date('2023-03-06'),
  inUsdt: 1120,
  perUnit: 71436,
  isBNBComission: false,
  comission: 0,
  Market: Market.Binance,
},
/*{
  state: STATE.SOLD,
  coin: COIN.BTC,
  count: 0.29002049,
  date: new Date('2023-04-17'),
  inUsdt: 8797,
  perUnit: 30320,
  isBNBComission: false,
  comission: 8.7,
  Market: Market.Okx,
}, */
];
