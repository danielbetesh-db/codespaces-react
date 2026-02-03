import {
  PortfolioOverview,
  ChartSection,
  StocksList,
  Holdings,
  MarketIndicators,
} from './components';

function Dashboard() {
  return (
    <main className="main-content">
      <PortfolioOverview />
      <ChartSection />
      
      <div className="content-grid">
        <StocksList />
        <Holdings />
      </div>
      
      <MarketIndicators />
    </main>
  );
}

export default Dashboard;
