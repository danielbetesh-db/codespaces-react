// Type definitions for the application

/**
 * @typedef {Object} Stock
 * @property {string} symbol - Stock symbol (e.g., 'AAPL')
 * @property {string} name - Company name
 * @property {string} price - Current price as string
 * @property {string} change - Price change as string
 * @property {string} changePercent - Percentage change as string
 * @property {boolean} isPositive - Whether the change is positive
 */

/**
 * @typedef {Object} PortfolioItem
 * @property {string} symbol - Stock symbol
 * @property {number} shares - Number of shares owned
 * @property {string} value - Total value as string
 * @property {string} dailyChange - Daily change as string
 */

/**
 * @typedef {Object} MarketIndicator
 * @property {string} name - Indicator name
 * @property {string} value - Current value as string
 * @property {string} change - Change as string
 * @property {boolean} isPositive - Whether the change is positive
 */

/**
 * @typedef {Object} PortfolioOverviewItem
 * @property {string} title - Card title
 * @property {string} value - Main value to display
 * @property {string} change - Change value
 * @property {boolean} isPositive - Whether the change is positive
 */

export {};
