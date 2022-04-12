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
  fetch("https://api.coinpaprika.com/v1/coins").then((res) => res.json());
