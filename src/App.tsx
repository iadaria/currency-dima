import {calcBuyingCost, calcSellingCost, round} from './utils/digits';
import {ITEMS} from './data/crypto';
import './App.css';
import {formattedDate} from './utils/date';
import { FixedTitle } from './components/FixedTitle';

function App() {
  return (
    <div className="App">
      <p className="item">Все приблизительно, не получается в цифры уложится</p>
      {ITEMS.map(
        ({
          boughtDate,
          soldDate,
          count,
          coin,
          fixed,
          inUsdt,
          boughtPerUnit,
          soldPerUnit,
          isBNBComission,
        }) => {
          const boughtDateFormated = formattedDate(boughtDate);
          const soldDateFormated = formattedDate(soldDate);

          const boughtCost = calcBuyingCost(
            count,
            boughtPerUnit,
            isBNBComission
          );
          const soldCost = calcSellingCost(count, soldPerUnit, isBNBComission);
          const result = fixed ? round(soldCost - boughtCost) : null;

          return (
            <p className="item">
              <FixedTitle fixed={fixed} />
              <span className="date">Покупка {boughtDateFormated}: </span>
              <span>
                {count} {coin} * {round(boughtPerUnit)} usdt = {boughtCost} usdt
              </span>

              {fixed && (
                <>
                  <br />
                  <span className="date">Продажа {soldDateFormated}: </span>
                  <span>
                    {count} {coin} * {round(soldPerUnit)} usdt = {soldCost} usdt
                  </span>
                  <br />
                  <span>Итого: {result} usdt</span>
                </>
              )}
            </p>
          );
        }
      )}
    </div>
  );
}

export default App;
