// Mock data for the dashboard (design only)

export const mockStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$182.52', change: '+2.41', changePercent: '+1.34%', isPositive: true },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$139.67', change: '-1.23', changePercent: '-0.87%', isPositive: false },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$415.83', change: '+5.67', changePercent: '+1.38%', isPositive: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: '$248.42', change: '-3.15', changePercent: '-1.25%', isPositive: false },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$155.93', change: '+2.84', changePercent: '+1.85%', isPositive: true },
];

export const mockPortfolio = [
  { symbol: 'AAPL', shares: 100, value: '$18,252', dailyChange: '+$241' },
  { symbol: 'GOOGL', shares: 75, value: '$10,475', dailyChange: '-$92' },
  { symbol: 'MSFT', shares: 50, value: '$20,791', dailyChange: '+$284' },
];

export const mockPortfolioOverview = [
  {
    title: 'Total Value',
    value: '$49,518.00',
    change: '+$433.00 (+0.88%)',
    isPositive: true,
  },
  {
    title: "Day's Gain/Loss",
    value: '+$433.00',
    change: '+0.88%',
    isPositive: true,
  },
  {
    title: 'Total Gain/Loss',
    value: '+$5,218.00',
    change: '+11.76%',
    isPositive: true,
  },
];

export const mockMarketIndicators = [
  {
    name: 'S&P 500',
    value: '4,789.85',
    change: '+0.73%',
    isPositive: true,
  },
  {
    name: 'Dow Jones',
    value: '37,863.80',
    change: '+0.56%',
    isPositive: true,
  },
  {
    name: 'NASDAQ',
    value: '15,055.65',
    change: '-0.23%',
    isPositive: false,
  },
  {
    name: 'VIX',
    value: '13.42',
    change: '-5.67%',
    isPositive: false,
  },
];
