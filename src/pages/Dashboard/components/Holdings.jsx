import { mockPortfolio } from '../../../data/mockData';

function Holdings() {
  return (
    <section className="holdings-section">
      <h2>Your Holdings</h2>
      <div className="holdings-table">
        <div className="table-header">
          <div>Stock</div>
          <div>Shares</div>
          <div>Value</div>
          <div>Change</div>
        </div>
        {mockPortfolio.map((holding, index) => (
          <div key={index} className="holding-row">
            <div className="holding-symbol">
              <strong>{holding.symbol}</strong>
            </div>
            <div className="holding-shares">{holding.shares}</div>
            <div className="holding-value">{holding.value}</div>
            <div className={`holding-change ${holding.dailyChange.includes('+') ? 'positive' : 'negative'}`}>
              {holding.dailyChange}
            </div>
          </div>
        ))}
      </div>
      <button className="add-stock-btn">+ Add Stock</button>
    </section>
  );
}

export default Holdings;
