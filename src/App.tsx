import {DEALS} from './data/crypto';
import {
  calcBuyingCost,
  calcOutcome,
  calcSellingCost,
  countOfCoin,
  round,
  roundN,
  sortByDate,
} from './utils/digits';
import {formattedDate} from './utils/date';
import './App.css';
import { COIN, Deal, STATE, Translate } from './types/cypto';

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
        {deal.count} {deal.coin} * {roundN(deal.perUnit, 3)}= {boughtCost} usdt
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

    // solds
    const solds = deals.filter((deal) => deal.state === STATE.SOLD);
    const totalSolds = solds.reduce(
      (sum, deal) => sum + calcSellingCost(deal.count, deal.perUnit, deal.isBNBComission)
      ,0);
    const countSolds = solds.reduce((sum, deal) => sum + deal.count,0);
    const outcome = round(calcOutcome(coin));
    const sign = outcome > 0 ? '+' : outcome < 0 ? ''  : '';
    const color = outcome > 0 ? 'green' : outcome < 0 ? 'red'  : '';

    // show
    return (
      <p className="item">
        <span className='coin'>{coin}</span>
        {dealsElement}
        <br />
        <span>
          Продано {coin} {countSolds} шт.: {totalSolds} usdt
        </span>
        <br />
        <span style={{color}}>
          Итого: {sign}{outcome} usdt
        </span>
        <br />
        <span>
          Осталось {coin}: {countOfCoin(coin)} шт.
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