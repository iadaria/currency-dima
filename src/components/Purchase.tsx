import { Item } from '../types/cypto';
import {formattedDate} from '../utils/date';
import {calcBuyingCost, round} from '../utils/digits';

interface Props {
  item: Item;
}
export function Purchase({item}: Props) {
  const {boughtDate, count, coin, boughtPerUnit, isBNBComission} = item;

  const boughtDateFormated = formattedDate(boughtDate);
  const boughtCost = calcBuyingCost(count, boughtPerUnit, isBNBComission);

  return (
    <>
      <span className="date">Покупка {boughtDateFormated}: </span>
      <span>
        {count} {coin} * {round(boughtPerUnit)} usdt = {boughtCost} usdt
      </span>
    </>
  );
}
