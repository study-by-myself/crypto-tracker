const BASE_URL = `https://api.coinpaprika.com/v1`;

export interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export const fetchCoins = (): Promise<ICoins[]> =>
  fetch(`${BASE_URL}/coins`).then((res) => res.json());

export const fetchCoinInfo = (coinId: string) =>
  fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());

export const fetchCoinTickers = (coinId: string) =>
  fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
