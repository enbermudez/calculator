import { useState } from 'react';
import evalFormula from './utils/eval-formula';

import './App.css';

const App = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState(0);

  const addValue = (val) => {
    const newFormula = formula + val;
    setFormula(newFormula);
  };

  const renderButton = (val) => (
    <button
      onClick={() => addValue(val)}
      type="button"
      id={`number-button-${val}`}
      className="btn"
    >
      {val}
    </button>
  );

  const getResult = () => {
    const newResult = evalFormula(formula);
    setResult(newResult);
  };

  const clearResult = () => {
    setResult(0);
    setFormula('');
  };

  return (
    <div className="calculator">
      <div className="formula">{formula}</div>
      <div className="result">{result}</div>

      <div className="btn-group">
        {[7, 8, 9, '*'].map((val) => renderButton(val))}
      </div>

      <div className="btn-group">
        {[4, 5, 6, '+'].map((val) => renderButton(val))}
      </div>

      <div className="btn-group">
        {[1, 2, 3, '-'].map((val) => renderButton(val))}
      </div>

      <div className="btn-group">
        <button className="btn btn-special" onClick={clearResult} type="button">
          AC
        </button>

        {['.', 0].map((val) => renderButton(val))}

        <button className="btn" onClick={getResult} type="button">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
