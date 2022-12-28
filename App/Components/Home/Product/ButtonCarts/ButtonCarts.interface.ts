export interface IButtonCartsProps {
  addingToCart: () => void;
  decrement: () => void;
  increment: () => void;
  isCart: boolean;
  count: number;
}
