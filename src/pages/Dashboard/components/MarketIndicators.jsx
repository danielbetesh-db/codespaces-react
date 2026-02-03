import { mockMarketIndicators } from '../../../data/mockData';

function MarketIndicators() {
  return (
    <section className="market-indicators">
      <h2>Market Indicators</h2>
      <div className="indicators-grid">
        {mockMarketIndicators.map((indicator, index) => (
          <div key={index} className="indicator-card">
            <h3>{indicator.name}</h3>
            <div className="indicator-value">{indicator.value}</div>
            <div className={`indicator-change ${indicator.isPositive ? 'positive' : 'negative'}`}>
              {indicator.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketIndicators;
