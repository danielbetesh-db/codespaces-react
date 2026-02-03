import { mockStocks } from '../../../data/mockData';

function StocksList() {
  return (
    <section className="watchlist-section">
      <h2>Top Stocks</h2>
      <div className="stocks-table">
        <div className="table-header">
          <div>Symbol</div>
          <div>Price</div>
          <div>Change</div>
          <div>%</div>
        </div>
        {mockStocks.map((stock, index) => (
          <div key={index} className="stock-row">
            <div className="stock-symbol">
              <strong>{stock.symbol}</strong>
              <small>{stock.name}</small>
            </div>
            <div className="stock-price">{stock.price}</div>
            <div className={`stock-change ${stock.isPositive ? 'positive' : 'negative'}`}>
              {stock.change}
            </div>
            <div className={`stock-percent ${stock.isPositive ? 'positive' : 'negative'}`}>
              {stock.changePercent}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StocksList;
