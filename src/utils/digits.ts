const USDT_COMISSION = 0.1 / 100;
const BNB_COMISSION = 0.075 / 100;

export const round = (digit: number) => Number(digit.toFixed(3))

export const baseComission = (isBnb: boolean) => isBnb ? BNB_COMISSION : USDT_COMISSION;

export const calcBuyingCost = (count: number, pricePerUnit: number, isBNB = false) => {
  const comission = count * pricePerUnit * baseComission(isBNB);
  return round(count * pricePerUnit + comission);
};

export const calcSellingCost = (count: number, pricePerUnit: number, isBNB = false) => {
  const comission = count * pricePerUnit * baseComission(isBNB);
  return round(count * pricePerUnit - comission);
};