import {COIN, DEALS, Deal, STATE, Translate} from './data/crypto';
import {
  calcBuyingCost,
  calcSellingCost,
  sortByDate,
  sortByPricePerUnit,
} from './utils/digits';
import {formattedDate} from './utils/date';
import './App.css';

export const DealItem = ({deal}: {deal: Deal}) => {
  const boughtDate = formattedDate(deal.date);
  const state = Translate[deal.state];
  const boughtCost = calcBuyingCost(
    deal.count,
    deal.perUnit,
    deal.isBNBComission
  );

  return (
    <p>
      <span className="date">
        {state} {boughtDate}:{' '}
      </span>
      <span>
        {deal.count} {deal.coin} * {deal.perUnit}= {boughtCost} usdt
      </span>
    </p>
  );
};

const DealsByCoin = () => {
  const coins = Object.values(COIN);

  const result = coins.map((coin) => {
    const deals = DEALS.filter((deal) => deal.coin === coin);
    const dealsElement = deals
      .sort(sortByDate)
      .map((deal) => <DealItem deal={deal} />);
    // count
    const totalCount = deals.reduce((sum, current, currentIndex) => {
      const deal = deals[currentIndex];
      return deal.state === STATE.BOUGHT ? sum + deal.count : sum - deal.count;
    }, 0);
    // money
    const boughts = deals
      .filter((deal) => deal.state === STATE.BOUGHT)
      .sort(sortByPricePerUnit);
    const solds = deals.filter((deal) => deal.state === STATE.SOLD);
    console.log(solds)
    const totalSolds = solds.reduce(
      (sum, current, idx) =>
        sum + calcSellingCost(deals[idx].count, deals[idx].perUnit, deals[idx].isBNBComission),
      0
    );
    const total = boughts.reduce((sum, current, currentIndex) => {
      return 0;
    }, 0);
    // show
    return (
      <p className="item">
        {coin}
        <br />
        {dealsElement}
        <br />
        <span>
          Осталось {coin}: {totalCount} шт.
        </span>
        <br />
        <span>
          Продано {coin}: {totalSolds}
        </span>
      </p>
    );
  });

  return <>{result}</>;
};

function App() {
  return (
    <div className="App">
      <DealsByCoin />
    </div>
  );
}

export default App;

/* {ITEMS.map((item) => 
    <p className="item">
      <FixedTitle fixed={item.fixed} />
      <Purchase item={item} />
      <Fixed item={item} />
      <Result item={item} />
    </p>
)}
*/
