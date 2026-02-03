import { CHART_PERIODS } from '../../../constants';

function ChartSection() {
  return (
    <section className="chart-section">
      <div className="chart-header">
        <h2>Market Performance</h2>
        <div className="chart-controls">
          {CHART_PERIODS.map((period, index) => (
            <button key={index} className={`chart-btn ${period.isActive ? 'active' : ''}`}>
              {period.label}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <div className="mock-chart">
          <div className="chart-line"></div>
          <div className="chart-data">📈 Interactive Chart Placeholder</div>
        </div>
      </div>
    </section>
  );
}

export default ChartSection;
