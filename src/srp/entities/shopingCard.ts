import CardItem from "./interfaces/cardItem";

export class ShopingCard {
  private readonly _item: CardItem[] = [];

  get item(): Readonly<CardItem[]> {
    return this._item;
  }

  addItem(newItem: CardItem): void {
    this._item.push(newItem);
  }

  removeItem(index: number): void {
    this._item.splice(index, 1);
  }

  isEmpty(): boolean {
    return this._item.length === 0;
  }

  clear(): void {
    this._item.length = 0;
  }

  total(): number {
    return +this._item.reduce((ant, prox) => ant + prox.price, 0).toFixed(2);
  }

};
