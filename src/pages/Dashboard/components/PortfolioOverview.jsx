import { mockPortfolioOverview } from '../../../data/mockData';

function PortfolioOverview() {
  return (
    <section className="portfolio-overview">
      <h2>Portfolio Overview</h2>
      <div className="portfolio-cards">
        {mockPortfolioOverview.map((item, index) => (
          <div key={index} className="portfolio-card">
            <h3>{item.title}</h3>
            <div className="portfolio-value">{item.value}</div>
            <div className={`portfolio-change ${item.isPositive ? 'positive' : 'negative'}`}>
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioOverview;
