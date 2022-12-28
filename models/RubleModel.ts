import { ICurrency } from "./model.interface";

export class RubleModel implements ICurrency {
  readonly unicode = "₽";
  readonly priceOfOneDollar = 70;

  dollarsToRubles(dollars: number) {
    return dollars * this.priceOfOneDollar;
  }
}
