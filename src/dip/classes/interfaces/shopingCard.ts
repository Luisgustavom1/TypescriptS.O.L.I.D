import CardItem from './cardItem';

export interface IShopingCard {
  addItem(newItem: CardItem): void;

  removeItem(index: number): void;

  isEmpty(): boolean;

  clear(): void;

  total(): number;

  totalWithDiscount();
};
