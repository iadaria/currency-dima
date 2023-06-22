import {calcBuyingCost, calcSellingCost, round} from './utils/digits';
import {ITEMS} from './data/crypto';
import './App.css';
import {formattedDate} from './utils/date';
import {FixedTitle} from './components/FixedTitle';
import {Purchase} from './components/Purchase';
import {Fixed} from './components/Fixed';
import { Result } from './components/Result';

function App() {
  return (
    <div className="App">
      <p className="item">
        Все приблизительно, не получается точно до цента в цифры уложиться
      </p>
      {ITEMS.map((item) => {
        return (
          <p className="item">
            <FixedTitle fixed={item.fixed} />
            <Purchase item={item} />
            <Fixed item={item} />
            <Result item={item} />
          </p>
        );
      })}
    </div>
  );
}

export default App;
