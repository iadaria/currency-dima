
import { useState } from 'react';
import { Item, Rates } from '../types/cypto';
import { formattedDate } from '../utils/date';
import {calcSellingCost, round} from '../utils/digits';

interface Props {
  item: Item;
}

export function Fixed({item}: Props) {
  const {fixed, count, coin, soldDate, soldPerUnit, isBNBComission} = item;
  const [prices, setPrices] = useState(Rates);

  const rate = prices[coin];
  const soldCost = calcSellingCost(count, soldPerUnit, isBNBComission);
  const planOutcome$ = round(count * rate); 
  if (!fixed) return null;

  const soldDateFormated = formattedDate(soldDate);
  return (
    <>
      <br />
      <span className="date">Продажа {soldDateFormated}: </span>
      <span>
        {count} {coin} * {round(soldPerUnit)} usdt = {soldCost} usdt (Было бы: {planOutcome$})
      </span>
    </>
  );
}
