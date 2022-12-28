export interface ICurrency {
  unicode: string;
  priceOfOneDollar: number;
  dollarsToRubles: (dollars: number) => number;
}
