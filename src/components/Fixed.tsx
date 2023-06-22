import {Item} from '../data/crypto';
import { formattedDate } from '../utils/date';
import {calcSellingCost, round} from '../utils/digits';

interface Props {
  item: Item;
}

export function Fixed({item}: Props) {
  const {fixed, count, coin, soldDate, soldPerUnit, isBNBComission} = item;
  const soldCost = calcSellingCost(count, soldPerUnit, isBNBComission);

  if (!fixed) return null;

  const soldDateFormated = formattedDate(soldDate);
  return (
    <>
      <br />
      <span className="date">Продажа {soldDateFormated}: </span>
      <span>
        {count} {coin} * {round(soldPerUnit)} usdt = {soldCost} usdt
      </span>
    </>
  );
}
