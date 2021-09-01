import { ShopingCard } from "./shopingCard";
import { Messaging } from "./services/messaging";
import { IOrder } from "./interfaces/order";
import { Persistency } from "./services/persisted";

export class Order {
  private _statusOrder: IOrder = 'Open';

  constructor(
    private readonly messaging: Messaging,
    private readonly shopigCard: ShopingCard,
    private readonly persistency: Persistency,
  ){}

  checkout() {
    if (this.shopigCard.isEmpty()) {
      this.messaging.message('O seu carrinho está vazio');
    }
    const total = this.shopigCard.total();

    this._statusOrder = 'Close';
    this.shopigCard.clear();
    this.persistency.saveCard();
    this.messaging.message(`O seu pedido foi de ${total}`);
    this._statusOrder
  }

  get statusOrder(): 'Close' | 'Open' {
    return this._statusOrder;
  }
}
