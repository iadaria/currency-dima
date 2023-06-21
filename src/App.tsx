import {round} from './utils/digits';
import {ITEMS} from './data/crypto';
import './App.css';

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
        }) => {
          

          const boughtDateFormated = boughtDate
            ? `${boughtDate.getDate()}-${
                boughtDate.getMonth() + 1
              }-${boughtDate.getFullYear()}`
            : '';
          const soldDateFormated =
            fixed && soldDate
              ? `${soldDate.getDate()}-${
                  soldDate.getMonth() + 1
                }-${soldDate.getFullYear()}`
              : '';
          let comission = count * boughtPerUnit * 0.01;
          const boughtCost = round(count * boughtPerUnit + comission);

          comission = count * soldPerUnit * 0.01;
          const soldCost = round(count * soldPerUnit - comission);

          return (

            <p className="item">
              <span className="date">Покупка {boughtDateFormated}: </span>
              <span>
                {count} {coin} * {round(boughtPerUnit)} usdt = {boughtCost} usdt
              </span>

              {fixed && (
                <>
                  <br />
                  <span className="date">Покупка {soldDateFormated}: </span>
                  <span>
                    {count} {coin} * {round(soldPerUnit)} usdt = {soldCost} usdt
                  </span>
                  <br />
                  <span>Итого: {round(soldCost - boughtCost)} usdt</span>
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
