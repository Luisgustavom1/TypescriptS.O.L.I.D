type CardItem = {
  price: number;
  name: string;
};

export class ShopingCard {
  private readonly _item: CardItem[] = [];
  private _statusOrder: 'Close' | 'Open' = 'Open';

  get item(): Readonly<CardItem[]> {
    return this._item;
  }

  get statusOrder(): 'Close' | 'Open' { //
    return this._statusOrder;
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

  saveCard(): void {
    console.log('O carrinho foi salvo'); //
  }

  clear(): void {
    this._item.length = 0;
  }

  message(msg: string) { //
    console.log(msg);
  }

  total(): number {
    return +this._item.reduce((ant, prox) => ant + prox.price, 0).toFixed(2);
  }

  checkout() { //
    if (this.isEmpty()) {
      this.message('O seu carrinho está vazio');
    }
    const total = this.total();

    this._statusOrder = 'Close';
    this.clear();
    this.saveCard();
    this.message(`O seu pedido foi de ${total}`);
    this._statusOrder
  }
}

const shopingCard = new ShopingCard();

shopingCard.addItem({ name: 'celular', price: 2000 });
shopingCard.addItem({ name: 'fone', price: 100 });
shopingCard.addItem({ name: 'notebook', price: 5000 });
shopingCard.addItem({ name: 'monitor', price: 1700 });

console.log(shopingCard.item);
console.log(shopingCard.total());
shopingCard.checkout();
console.log(shopingCard.statusOrder);
