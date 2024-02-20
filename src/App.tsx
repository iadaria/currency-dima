import {DEALS} from './data/crypto';
import {
  calcBuyingCost,
  calcFixed,
  calcOutcome,
  calcSellingCost,
  calcSpent,
  countOfBoughts,
  countOfCoin,
  round,
  roundN,
  sortByDate,
  sumOfBoughts,
} from './utils/digits';
import {formattedDate} from './utils/date';
import './App.css';
import {COIN, Deal, Rates,Translate} from './types/cypto';
import {useEffect, useState} from 'react';
import {updateRates} from './utils/requests';

export const DealItem = ({deal}: {deal: Deal}) => {
  const boughtDate = formattedDate(deal.date);
  const state = Translate[deal.state];
  const boughtCost = calcBuyingCost(
    deal.count,
    deal.perUnit,
    deal.isBNBComission
  );

  return (
    <div>
      <span className="date">
        {state} {boughtDate}:{' '}
      </span>
      <span>
        {deal.count} {deal.coin} * {roundN(deal.perUnit, 3)}= {boughtCost} $
      </span>
    </div>
  );
};

interface DealsByCoinProps {
  prices: {[key: string]: number};
}

const DealsByCoin = ({prices}: DealsByCoinProps) => {
  const coins = Object.values(COIN);

  const result = coins.map((coin, index) => {
    const rate = prices[coin];
    const deals = DEALS.filter((deal) => deal.coin === coin);
    const dealsElement = deals
      .sort(sortByDate)
      .map((deal, index) => <DealItem key={`item-${index}`} deal={deal} />);

    // solds
    //const solds = deals.filter((deal) => deal.state === STATE.SOLD);
    /* const totalSolds = solds.reduce(
      (sum, deal) =>
        sum + calcSellingCost(deal.count, deal.perUnit, deal.isBNBComission),
      0
    ); */
    //const countSolds = solds.reduce((sum, deal) => sum + deal.count, 0);
    // outcome
    const outcome = round(calcOutcome(coin));
    const outcomeIn$ = round(countOfCoin(coin) * rate);
    const sign = outcome > 0 ? '+' : outcome < 0 ? '' : '';
    //const color = outcome > 0 ? 'green' : outcome <; 0 ? 'red' : '';
    const spent$ = round(calcSpent(coin));
    const planOutcome$ = round(outcomeIn$ - spent$);
    const s = planOutcome$ > 0 ? '+' : '';

    const wouldBeOutcome$ = round(countOfBoughts(coin) * rate - sumOfBoughts(coin));
    const signWouldBe = wouldBeOutcome$ > 0 ? '+': '';
    const wrap = () => {
      if (outcomeIn$ > 50) return <br></br>;
      return null;
    };
    // show
    return (
      <div key={`item-${index}`} className="item">
        <span className="coin">{coin}</span>
        <span> (текущий курс {roundN(rate * 1, 5)}$)</span>
        {dealsElement}
        {/* <br /> */}
        {/* <span>
          Продано {coin} {countSolds} шт.: {totalSolds} $
        </span> */}
        {/* <br /> */}
        <span>
          Зафиксили: {sign}
          {outcomeIn$ > 50 ? outcome : calcFixed(coin)}$ {outcomeIn$ < 50 && `(Было БЫ: ${signWouldBe}${wouldBeOutcome$}$)`}
        </span>
        <br/>
        <span>
          {outcomeIn$ > 50 &&
            `(Вложено: ${spent$}$, заработок: ${s}${planOutcome$}$)`}
          {wrap()}
          Осталось {coin}: {round(countOfCoin(coin))} шт. (~ {outcomeIn$} $)
        </span>
        {/* <p>
          04.08.23 Продажа cfx на 20 usdt и покупка 258 trx для комиссии на
          перевод tron
        </p> */}
      </div>
    );
  });

  return <>{result}</>;
};

function App() {
  const [prices, setPrices] = useState(Rates);

  const fetchRates = () =>
    updateRates()
      .then((rates) => setPrices(rates))
      .catch(console.log);

  useEffect(() => {
    fetchRates();
    setInterval(fetchRates, 80000);
  }, []);

  return (
    <div className="App">
      <DealsByCoin prices={prices} />
    </div>
  );
}

export default App;
