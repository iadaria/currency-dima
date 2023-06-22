import {Item} from '../data/crypto';
import {calcBuyingCost, calcSellingCost, round} from '../utils/digits';

interface Props {
  item: Item;
}

export function Result({item}: Props) {
  const {fixed, count, boughtPerUnit, soldPerUnit, isBNBComission} = item;

  if (!fixed) {
    return null;
  }

  const boughtCost = calcBuyingCost(count, boughtPerUnit, isBNBComission);
  const soldCost = calcSellingCost(count, soldPerUnit, isBNBComission);
  const result = round(soldCost - boughtCost);

  return (
    <>
      <br />
      <span>Итого: {result} usdt</span>
    </>
  );
}
